/**
 * generate-blog-index — derive public/blog-index.json from the Angular app's
 * BLOGS array (src/app/shared/blogs.ts), which is the source of truth.
 *
 * The Angular UI does NOT need this file at runtime (blogs.ts drives the grid);
 * it is a derived artifact for SEO/sitemap tooling, the Medium publisher
 * (canonical-URL lookup) and external consumers.
 *
 * Usage: npx tsx tools/generate-blog-index.ts
 */
import { loadBlogs, log, paths, siteOrigin, slugOf, writeJson } from './_lib';

interface IndexEntry {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  blurb: string;
  route: string;
  url: string;
}

async function main(): Promise<void> {
  const origin = siteOrigin();
  const blogs = await loadBlogs();

  const entries: IndexEntry[] = blogs.map((b) => {
    const slug = slugOf(b.path);
    return {
      slug,
      title: b.title,
      category: b.category ?? '',
      readTime: b.readTime ?? '',
      blurb: b.blurb ?? '',
      route: b.path.startsWith('/') ? b.path : `/${b.path}`,
      url: `${origin}/${slug}`,
    };
  });

  writeJson(paths.blogIndex, entries);
  log.head(`generate-blog-index: wrote ${entries.length} entries`);
  log.ok(paths.blogIndex.replace(/.*\/public\//, 'public/'));
  entries.forEach((e) => console.log(`      - ${e.slug} → ${e.url}`));
}

main().catch((err) => {
  log.err(String(err?.message ?? err));
  process.exit(1);
});
