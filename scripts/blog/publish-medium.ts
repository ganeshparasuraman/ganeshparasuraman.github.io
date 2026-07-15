/**
 * publish-medium — publish an APPROVED blog to Medium as a draft, or fall back
 * to a manual export under dist/medium when no API token is configured (or the
 * API call fails).
 *
 * Canonical URL always points at the Angular blog (the source of truth):
 *   {siteOrigin}/{slug}   (flat route — e.g. https://host/genai-flow)
 *
 * Usage:
 *   npx tsx tools/publish-medium.ts <slug> [--force] [--public]
 *
 * Env (optional — when absent, a manual export is produced):
 *   MEDIUM_ACCESS_TOKEN, MEDIUM_USER_ID, MEDIUM_PUBLICATION_ID, BLOG_BASE_URL
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadBlogs, log, parseFrontmatter, paths, readJson, siteOrigin, slugOf, writeJson } from './_lib';

async function canonicalFor(slug: string): Promise<string> {
  try {
    const blogs = await loadBlogs();
    const hit = blogs.find((b) => slugOf(b.path) === slug);
    if (hit) return `${siteOrigin()}/${slugOf(hit.path)}`;
  } catch {
    /* blogs.ts unreadable — fall through */
  }
  return `${siteOrigin()}/${slug}`;
}

function recordMedium(slug: string, fields: Record<string, any>): void {
  const registry = readJson<Record<string, any>>(paths.registry, {});
  const now = new Date().toISOString();
  registry[slug] = {
    ...(registry[slug] ?? { slug }),
    medium: { ...(registry[slug]?.medium ?? {}), ...fields, publishedAt: now },
    updatedAt: now,
  };
  writeJson(paths.registry, registry);
}

function manualExport(slug: string, md: string, meta: Record<string, any>): void {
  mkdirSync(paths.mediumExport, { recursive: true });
  writeFileSync(join(paths.mediumExport, `${slug}.md`), md);
  writeJson(join(paths.mediumExport, `${slug}.metadata.json`), meta);
  log.ok(`dist/medium/${slug}.md`);
  log.ok(`dist/medium/${slug}.metadata.json`);
}

async function main(): Promise<void> {
  const slug = process.argv[2];
  if (!slug || slug.startsWith('--')) {
    log.err('usage: publish-medium <slug> [--force] [--public]');
    process.exit(1);
  }
  const force = process.argv.includes('--force');
  const mode = process.argv.includes('--public') ? 'public' : 'draft';

  const file = join(paths.reviewed, `${slug}.md`);
  if (!existsSync(file)) {
    log.err(`reviewed blog not found: ${file}`);
    process.exit(1);
  }
  const { data, body } = parseFrontmatter(readFileSync(file, 'utf8'));

  // Guardrails from specs/medium.policy.yaml
  if (data.status !== 'APPROVED') {
    log.err(`status is "${data.status ?? 'unknown'}", must be APPROVED before Medium publish.`);
    process.exit(1);
  }
  const registry = readJson<Record<string, any>>(paths.registry, {});
  if (registry[slug]?.medium?.published && !force) {
    log.warn(`"${slug}" already published to Medium; pass --force to republish. Skipping.`);
    return;
  }

  const canonical = await canonicalFor(slug);
  const tags = (Array.isArray(data.tags) ? data.tags : []).slice(0, 5); // maxTags: 5
  const title = String(data.title ?? slug);
  const mediumMd = `# ${title}\n\n> Originally published at [${canonical}](${canonical})\n\n${body}`;
  const meta = { slug, title, tags, canonicalUrl: canonical, publishMode: mode, publishStatus: mode };

  log.head(`publish-medium: "${slug}" (mode=${mode})`);

  const token = process.env.MEDIUM_ACCESS_TOKEN;
  const userId = process.env.MEDIUM_USER_ID;
  if (!token || !userId) {
    log.warn('MEDIUM_ACCESS_TOKEN / MEDIUM_USER_ID not set — writing manual export instead.');
    manualExport(slug, mediumMd, meta);
    recordMedium(slug, { published: false, mode, exported: true, url: canonical, canonicalUrl: canonical });
    return;
  }

  const pub = process.env.MEDIUM_PUBLICATION_ID;
  const endpoint = pub
    ? `https://api.medium.com/v1/publications/${pub}/posts`
    : `https://api.medium.com/v1/users/${userId}/posts`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        contentFormat: 'markdown',
        content: mediumMd,
        tags,
        canonicalUrl: canonical,
        publishStatus: mode, // 'draft' | 'public' | 'unlisted'
      }),
    });
    if (!res.ok) throw new Error(`Medium API ${res.status}: ${await res.text()}`);
    const json: any = await res.json();
    const url = json?.data?.url;
    const postId = json?.data?.id;
    log.ok(`published to Medium (${mode}): ${url}`);
    recordMedium(slug, { published: true, mode, url, postId, canonicalUrl: canonical });
  } catch (err) {
    log.err(`Medium API failed: ${String((err as Error).message)}`);
    log.warn('falling back to manual export under dist/medium.');
    manualExport(slug, mediumMd, meta);
    recordMedium(slug, { published: false, mode, exported: true, error: String((err as Error).message), canonicalUrl: canonical });
  }
}

main().catch((err) => {
  log.err(String(err?.message ?? err));
  process.exit(1);
});
