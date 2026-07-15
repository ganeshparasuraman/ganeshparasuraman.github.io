# Add Blog to Angular

Add a reviewed and approved blog to this Angular app as a standalone component.
This app has no runtime markdown loader — see `specs/angular.integration.yaml`.

## Input

- Blog slug.

## Steps

1. Read `content/reviewed/{slug}.md`; confirm `status` is `APPROVED`.
2. Generate the standalone component under `src/app/pages/{slug}/`
   (`.ts` + `.html` + `.scss`) using `<app-article-layout>` and the global
   `.article-body` styles. Mirror `src/app/pages/genai-flow/`.
3. Append a `BLOGS` entry in `src/app/shared/blogs.ts` (path `/{slug}`, title,
   icon, faIcon, category, readTime, gradient, blurb).
4. Add a flat lazy route to `src/app/app.routes.ts` above the `**` route.
5. Copy assets: `npm run blog:copy-assets {slug}`.
6. Regenerate the derived index: `npm run blog:generate-index`.
7. Verify routes + build: `npm run blog:generate-routes && npm run build`.
8. Fix integration errors if the build fails.
9. Do not publish to Medium.

## Example

```text
/add-blog-to-angular metadata-driven-data-platform
```
