/**
 * update-publish-registry — record publish state for a blog in
 * publishing-registry.json (keyed by slug).
 *
 * Usage:
 *   npx tsx tools/update-publish-registry.ts <slug> [flags]
 *
 * Flags:
 *   --status=APPROVED            overall pipeline status
 *   --angular                    mark Angular as published (uses canonical URL)
 *   --url=<canonical>            override the Angular/canonical URL
 *   --medium-mode=draft|public  Medium publish mode
 *   --medium-url=<url>           Medium post URL
 *   --medium-id=<id>             Medium post id
 */
import { log, paths, readJson, siteOrigin, writeJson } from './_lib';

function flags(argv: string[]): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  for (const a of argv) {
    if (!a.startsWith('--')) continue;
    const [k, v] = a.slice(2).split('=');
    out[k] = v === undefined ? true : v;
  }
  return out;
}

function main(): void {
  const slug = process.argv[2];
  if (!slug || slug.startsWith('--')) {
    log.err('usage: update-publish-registry <slug> [--status=.. --angular --url=.. --medium-url=..]');
    process.exit(1);
  }
  const f = flags(process.argv.slice(3));
  const registry = readJson<Record<string, any>>(paths.registry, {});
  const now = new Date().toISOString();
  const canonical = (f.url as string) || `${siteOrigin()}/${slug}`;

  const entry = registry[slug] ?? { slug };
  if (f.status) entry.status = f.status;
  entry.canonicalUrl = canonical;

  if (f.angular) {
    entry.angular = { ...(entry.angular ?? {}), published: true, url: canonical, publishedAt: now };
  }
  if (f['medium-url'] || f['medium-id'] || f['medium-mode']) {
    entry.medium = {
      ...(entry.medium ?? {}),
      published: true,
      mode: (f['medium-mode'] as string) || entry.medium?.mode || 'draft',
      url: (f['medium-url'] as string) || entry.medium?.url,
      postId: (f['medium-id'] as string) || entry.medium?.postId,
      publishedAt: now,
    };
  }
  entry.updatedAt = now;
  registry[slug] = entry;

  writeJson(paths.registry, registry);
  log.head(`update-publish-registry: updated "${slug}"`);
  console.log(JSON.stringify(entry, null, 2));
}

main();
