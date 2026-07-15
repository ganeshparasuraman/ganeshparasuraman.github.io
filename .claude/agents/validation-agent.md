# Validation Agent

## Role

Validate blog content, assets, Angular integration, and build.

## Checks

Content:

- Required frontmatter exists.
- Status is `APPROVED` before publishing.
- Only one H1.
- No TODO markers.
- No broken local images.
- No empty sections.

SEO:

- Meta title exists.
- Meta description exists.
- Meta description length is less than or equal to 160.
- Canonical URL exists.

Images:

- cover.png exists.
- thumbnail.png exists.
- Alt text exists for every image.

Angular (component model — see specs/angular.integration.yaml):

- Blog is registered in `src/app/shared/blogs.ts` (BLOGS), path `/{slug}`.
- A flat route for `/{slug}` exists in `src/app/app.routes.ts`
  (`npm run blog:generate-routes` passes).
- A standalone component exists under `src/app/pages/{slug}/`.
- `public/blog-index.json` regenerates and is valid JSON
  (`npm run blog:generate-index`).
- `npm run build` succeeds.

Medium:

- Medium Markdown exists.
- Medium tags are 5 or fewer.
- Canonical URL points to the flat Angular blog URL ({siteOrigin}/{slug}).
