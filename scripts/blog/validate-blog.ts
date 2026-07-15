/**
 * validate-blog — validate reviewed blog metadata + content against blog.schema.json.
 *
 * Usage:
 *   npx tsx tools/validate-blog.ts            # validate all content/reviewed/*.md
 *   npx tsx tools/validate-blog.ts <slug>     # validate one blog
 *
 * Exits non-zero if any blog fails, so it can gate CI / blog:build.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { listMarkdown, log, parseFrontmatter, paths, readJson } from './_lib';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const STATUSES = [
  'DRAFT', 'REWRITTEN', 'REVIEW_REQUIRED', 'APPROVED',
  'PUBLISHED_ANGULAR', 'PUBLISHED_MEDIUM', 'FAILED',
];

function validate(file: string): string[] {
  const errors: string[] = [];
  const slug = file.replace(/.*\//, '').replace(/\.md$/, '');
  const { data, body } = parseFrontmatter(readFileSync(file, 'utf8'));

  // Required frontmatter (specs/blog.schema.json)
  for (const f of ['title', 'slug', 'author', 'status', 'category', 'tags', 'publishTargets']) {
    if (data[f] === undefined || data[f] === '') errors.push(`missing required field: ${f}`);
  }
  if (data.title && String(data.title).length < 5) errors.push('title must be >= 5 chars');
  if (data.slug && !SLUG_RE.test(String(data.slug))) errors.push(`slug "${data.slug}" not kebab-case`);
  if (data.slug && data.slug !== slug) errors.push(`frontmatter slug "${data.slug}" != filename "${slug}"`);
  if (data.status && !STATUSES.includes(String(data.status))) errors.push(`invalid status: ${data.status}`);
  if (data.tags) {
    const tags = Array.isArray(data.tags) ? data.tags : [];
    if (tags.length < 1 || tags.length > 10) errors.push('tags must have 1..10 items');
  }

  // Content checks (specs/agent.contracts.yaml validation-agent)
  const h1 = (body.match(/^#\s+/gm) || []).length;
  if (h1 > 1) errors.push(`multiple H1 headings (${h1}); blog body should have at most one`);
  if (/\b(TODO|FIXME|TBD)\b/.test(body)) errors.push('contains TODO/FIXME/TBD marker');

  // SEO sidecar (optional, but validated when present)
  const seoFile = join(paths.reviewed, `${slug}.seo.json`);
  if (existsSync(seoFile)) {
    const seo = readJson<any>(seoFile, {});
    if (!seo.metaTitle) errors.push('seo.json: metaTitle missing');
    if (!seo.metaDescription) errors.push('seo.json: metaDescription missing');
    else if (String(seo.metaDescription).length > 160) errors.push('seo.json: metaDescription > 160 chars');
  }

  return errors;
}

function main(): void {
  const arg = process.argv[2];
  let files: string[];
  if (arg) {
    const f = join(paths.reviewed, `${arg}.md`);
    if (!existsSync(f)) {
      log.err(`no reviewed blog found: ${f}`);
      process.exit(1);
    }
    files = [f];
  } else {
    files = listMarkdown(paths.reviewed);
  }

  if (files.length === 0) {
    log.head('validate-blog: no reviewed blogs to validate (content/reviewed is empty) — skipping.');
    return;
  }

  log.head(`validate-blog: checking ${files.length} blog(s)`);
  let failed = 0;
  for (const file of files) {
    const slug = file.replace(/.*\//, '');
    const errors = validate(file);
    if (errors.length === 0) {
      log.ok(slug);
    } else {
      failed++;
      log.err(slug);
      errors.forEach((e) => console.error(`      - ${e}`));
    }
  }

  if (failed > 0) {
    console.error(`\nvalidate-blog: ${failed} blog(s) failed validation.`);
    process.exit(1);
  }
  console.log('\nvalidate-blog: all blogs valid.');
}

main();
