# CLAUDE.md

Angular 19 personal tech blog + portfolio (`ganeshsite`), deployed to GitHub Pages
at a custom domain (see `public/CNAME`). This file documents the **blog automation
pipeline** and the **authoring runbook**.

## App model (how blogs work here)

- **Each blog is a standalone component** under `src/app/pages/{slug}/`, wrapping
  `<app-article-layout>` (`src/app/shared/article-layout/`). There is **no runtime
  markdown loader**.
- **Source of truth:** the `BLOGS` array in `src/app/shared/blogs.ts` drives the
  home grid and nav.
- **Routes are flat & lazy** in `src/app/app.routes.ts` (e.g. `/genai-flow`), with a
  `**` wildcard 404 last.
- **Article body** uses the global classes in `src/styles.scss` (`.lead`, `.callout`,
  `.panel-card`, `.grid-auto`, `.flow-diagram`, code token spans `.tok-*`).
- **Build output:** `dist/ganeshsite/browser`.

## Blog automation pipeline

The pipeline lives natively in the repo: TS tools in `scripts/blog/`, role specs in
`specs/`, slash commands in `.claude/commands/`, role agents in `.claude/agents/`,
and reference docs in `docs/blog-pipeline/` (see `docs/blog-pipeline/README.md` and
`specs/angular.integration.yaml`).

- **Content base:** pipeline content lives under **`content/`** at the repo root
  — `drafts/`, `reviewed/`, `assets/{slug}/`. When a command/agent says
  `content/...`, it means this directory. The TS tools resolve it automatically.
- **Slash commands** (real files in `.claude/commands/`): `/create-blog`,
  `/rewrite-blog`, `/generate-blog-images`, `/approve-blog`, `/add-blog-to-angular`,
  `/publish-blog`. Each command's markdown is the full procedure; it references the
  role specs in `.claude/agents/`.
- **npm scripts** (in `package.json`, run via `npx tsx`, no extra deps):
  `blog:validate`, `blog:generate-index`, `blog:generate-routes`,
  `blog:copy-assets`, `blog:publish-medium`, `blog:update-registry`, `blog:build`.

### Hard rules
- Never integrate or publish a blog unless its frontmatter `status` is `APPROVED`.
- **Angular is the source of truth; publish it first.** Medium is distribution.
- Medium publishes as **draft** by default; canonical URL = `{siteOrigin}/{slug}`
  (siteOrigin from `public/CNAME` or `BLOG_BASE_URL`).
- Generating a blog = create the component + register in `BLOGS` + add a flat route.
  Never add a `/blog/{slug}` route or a runtime markdown loader; never duplicate an
  existing slug.

## Authoring runbook (writer's day-to-day)

1. **Scaffold** — `/create-blog "My Blog Title"` → creates
   `content/drafts/{slug}.md` (frontmatter + `# Draft`).
2. **Write your rough draft** — fill in the body; informal/bullets are fine.
3. **Rewrite + SEO** — `/rewrite-blog {slug}` → `content/reviewed/{slug}.md`
   (+ `{slug}.seo.json`); status → `REVIEW_REQUIRED`.
4. **(Optional) Images** — `/generate-blog-images {slug}` →
   `content/assets/{slug}/`.
5. **Review** the reviewed markdown; `npm run blog:validate` to sanity-check.
6. **Approve** — `/approve-blog {slug}` → `status: APPROVED`.
7. **Integrate** — `/add-blog-to-angular {slug}` → component + `BLOGS` entry +
   flat route + assets + regenerated `public/blog-index.json` + build.
8. **Preview** — `npm start`, open `http://localhost:4200/{slug}`
   (or `npm run blog:build` for the full chain).
9. **Ship** — commit + push (deploys when the Pages workflow is enabled), then
   `/publish-blog {slug}` for the Medium draft.

To enable CI deploy: copy `docs/blog-pipeline/github-workflow-publish-blog.yml`
to `.github/workflows/`.
