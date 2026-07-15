/**
 * generate-routes — verify the flat route table is consistent with BLOGS.
 *
 * This app registers each blog as a lazy-loaded standalone component in
 * src/app/app.routes.ts (flat routes like `/genai-flow`). Components are
 * authored by the angular-integration-agent, so this tool does NOT mutate
 * source — it asserts that every blog in src/app/shared/blogs.ts has a
 * matching route entry, and reports drift. Exits non-zero on a missing route
 * so blog:build fails before a blog ships without a page.
 *
 * Usage: npx tsx tools/generate-routes.ts
 */
import { existsSync, readFileSync } from 'node:fs';
import { loadBlogs, log, paths, slugOf } from './_lib';

function declaredRoutePaths(routesSrc: string): Set<string> {
  const set = new Set<string>();
  const re = /path:\s*['"]([^'"]*)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(routesSrc)) !== null) set.add(m[1]);
  return set;
}

async function main(): Promise<void> {
  if (!existsSync(paths.routesTs)) {
    log.err(`routes file not found: ${paths.routesTs}`);
    process.exit(1);
  }
  const routesSrc = readFileSync(paths.routesTs, 'utf8');
  const declared = declaredRoutePaths(routesSrc);
  const blogs = await loadBlogs();

  log.head(`generate-routes: verifying ${blogs.length} blog route(s)`);
  const missing: string[] = [];
  for (const b of blogs) {
    const slug = slugOf(b.path);
    if (declared.has(slug)) log.ok(`/${slug}`);
    else {
      missing.push(slug);
      log.err(`/${slug} — no matching route in app.routes.ts`);
    }
  }

  if (!declared.has('**')) log.warn('no wildcard (**) route found — 404 page may not be wired.');

  if (missing.length > 0) {
    console.error(
      `\ngenerate-routes: ${missing.length} blog(s) missing routes: ${missing.join(', ')}\n` +
        `Add a lazy loadComponent entry for each in src/app/app.routes.ts.`,
    );
    process.exit(1);
  }
  console.log('\ngenerate-routes: all blog routes present.');
}

main().catch((err) => {
  log.err(String(err?.message ?? err));
  process.exit(1);
});
