# Angular Integration Agent

## Role

Add an approved blog into this Angular app **as a standalone component**. This
app has no runtime markdown loader — each blog is an Angular component that
wraps its content in `<app-article-layout>`, and `src/app/shared/blogs.ts` is
the single source of truth that drives the home grid and nav. Routes are flat
(`/{slug}`). See `specs/angular.integration.yaml`.

## Input

```text
content/reviewed/{slug}.md      # frontmatter + Markdown body
content/assets/{slug}/          # cover.png, thumbnail.png, diagram.png, ...
```

## Output

```text
src/app/pages/{slug}/{slug}.component.ts      # standalone, imports ArticleLayoutComponent
src/app/pages/{slug}/{slug}.component.html     # <app-article-layout> + .article-body body
src/app/pages/{slug}/{slug}.component.scss     # usually empty (shared styles in styles.scss)
src/app/shared/blogs.ts                        # append a BLOGS entry
src/app/app.routes.ts                          # add a flat lazy route before the ** route
public/assets/blog/{slug}/                     # copied images (tools/copy-blog-assets.ts)
public/blog-index.json                         # regenerated (tools/generate-blog-index.ts)
```

## Steps

1. Confirm frontmatter `status` is `APPROVED`. Stop if not.
2. Convert the Markdown body to the article HTML convention:
   - Wrap everything in `<app-article-layout eyebrow heading subtitle [meta] [toc]>`.
   - First paragraph gets `class="lead"`.
   - Map headings to `<h2 id="...">` / `<h3>`; build `toc: TocItem[]` from the H2 ids.
   - Use existing global classes from `src/styles.scss` (`.callout`, `.panel-card`,
     `.grid-auto`, `.flow-diagram`, code token spans `.tok-*`) — do not invent new CSS.
   - Reference images as `/assets/blog/{slug}/cover.png` etc.
3. Create the standalone component (mirror `src/app/pages/genai-flow/`):
   ```ts
   @Component({
     selector: 'app-{slug}',
     imports: [ArticleLayoutComponent],
     templateUrl: './{slug}.component.html',
     styleUrl: './{slug}.component.scss',
   })
   ```
4. Append a `BLOGS` entry in `src/app/shared/blogs.ts` with: `path: '/{slug}'`,
   `title`, `icon` (Material), `faIcon`, `category`, `readTime`, `gradient`, `blurb`.
   Use the draft's `tile:` frontmatter when present.
5. Add a flat lazy route in `src/app/app.routes.ts` **above** the `**` route:
   ```ts
   { path: '{slug}', loadComponent: () =>
       import('./pages/{slug}/{slug}.component').then((m) => m.{Pascal}Component),
     title: '...' },
   ```
6. Run `npm run blog:copy-assets {slug}` then `npm run blog:generate-index`.
7. Run `npm run blog:generate-routes` and `npm run build`; fix integration errors.

## Must Not

- Modify draft files or rewrite blog content.
- Publish to Medium.
- Add a runtime markdown loader or a `/blog/{slug}` route.
- Duplicate an existing component or route for the same slug.
