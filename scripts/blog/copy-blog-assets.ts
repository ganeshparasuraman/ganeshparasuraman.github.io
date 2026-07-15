/**
 * copy-blog-assets — copy generated images for a blog into the Angular app's
 * served assets folder.
 *
 *   content/assets/{slug}/*.{png,jpg,jpeg,svg,webp}
 *        →  public/assets/blog/{slug}/        (served at /assets/blog/{slug}/)
 *
 * Usage:
 *   npx tsx tools/copy-blog-assets.ts <slug>   # one blog
 *   npx tsx tools/copy-blog-assets.ts          # every slug under content/assets
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { log, paths } from './_lib';

const IMG_RE = /\.(png|jpe?g|svg|webp|gif|avif)$/i;

function copyOne(slug: string): number {
  const src = join(paths.contentAssets, slug);
  if (!existsSync(src) || !statSync(src).isDirectory()) {
    log.warn(`no asset folder for "${slug}" (${src}) — skipping.`);
    return 0;
  }
  const dest = join(paths.publicBlogAssets, slug);
  mkdirSync(dest, { recursive: true });
  let n = 0;
  for (const file of readdirSync(src)) {
    if (!IMG_RE.test(file)) continue; // skip image-prompts.json etc.
    copyFileSync(join(src, file), join(dest, file));
    log.ok(`assets/blog/${slug}/${file}`);
    n++;
  }
  if (n === 0) log.warn(`no images found in ${src}`);
  return n;
}

function main(): void {
  const arg = process.argv[2];
  const slugs = arg
    ? [arg]
    : existsSync(paths.contentAssets)
      ? readdirSync(paths.contentAssets).filter((f) =>
          statSync(join(paths.contentAssets, f)).isDirectory(),
        )
      : [];

  if (slugs.length === 0) {
    log.head('copy-blog-assets: nothing to copy (no content/assets) — skipping.');
    return;
  }

  log.head(`copy-blog-assets: copying assets for ${slugs.length} blog(s)`);
  let total = 0;
  for (const slug of slugs) total += copyOne(slug);
  console.log(`\ncopy-blog-assets: copied ${total} file(s).`);
}

main();
