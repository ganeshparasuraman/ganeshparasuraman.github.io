# Claude Code Blog Automation Spec Bundle

This is the reference documentation for the spec-driven blog automation workflow.
It originally shipped as a self-contained `claude-blog-spec-bundle/` folder; the
pipeline has since been **dissolved into the repo's native layout** (`scripts/blog/`,
`specs/`, `content/`, `.claude/`). The paths below reflect that native layout.

## Workflow

```text
Draft Blog
   ↓
Claude Code Agents
   ↓
Rephrased Blog
   ↓
Generated Blog Images
   ↓
Angular Static Blog Update
   ↓
GitHub Pages Build
   ↓
Medium Draft / Medium Export
```

## What is included

```text
specs/
  blog.workflow.yaml
  blog.schema.json
  agent.contracts.yaml
  image.policy.yaml
  medium.policy.yaml
  angular.integration.yaml

.claude/
  agents/
    draft-intake-agent.md
    blog-rewrite-agent.md
    seo-agent.md
    image-agent.md
    angular-integration-agent.md
    validation-agent.md
    medium-publisher-agent.md

  commands/
    create-blog.md
    rewrite-blog.md
    generate-blog-images.md
    add-blog-to-angular.md
    approve-blog.md
    publish-blog.md

scripts/blog/
  validate-blog.ts
  generate-blog-index.ts
  generate-routes.ts
  copy-blog-assets.ts
  publish-medium.ts
  update-publish-registry.ts
  _lib.ts

content/
  drafts/sample-blog.md

publishing-registry.json        (repo root)

docs/blog-pipeline/             (reference docs)
  README.md
  package-scripts.json
  github-workflow-publish-blog.yml
  CLAUDE_MASTER_PROMPT.md
  IMPLEMENTATION_ORDER.md
```

## Recommended usage in Claude Code

1. Copy the files into your existing Angular repository.
2. Ask Claude Code to inspect your current Angular blog structure first.
3. Ask Claude Code to adapt these specs to your existing routes, markdown loader, and build process.
4. Do not publish automatically after rewrite.
5. Keep the mandatory `APPROVED` state before Angular or Medium publishing.

## Adapted to this repo (component model)

This bundle has been adapted to how **this** Angular app actually works. The
generic `/blog/{slug}` + runtime-markdown-loader design in the original spec
does **not** apply here. Instead:

| Concern | This app |
|---------|----------|
| Content | Each blog is a **standalone component** wrapping `<app-article-layout>` |
| Source of truth | `src/app/shared/blogs.ts` (the `BLOGS` array) — drives home grid + nav |
| Routes | **Flat**, lazy `loadComponent` in `src/app/app.routes.ts` (e.g. `/genai-flow`) |
| Assets | `public/assets/blog/{slug}/` → served at `/assets/blog/{slug}/` |
| `blog-index.json` | **Derived** artifact (SEO/sitemap/Medium), generated from `blogs.ts` |
| Build output | `dist/ganeshsite/browser` |

The `add_to_angular` stage therefore **generates a component + registers the
blog in `blogs.ts` + adds a flat route**, rather than dropping a markdown file.
See `specs/angular.integration.yaml`.

### Tools

All six `scripts/blog/*.ts` tools are implemented (no external deps; run via `npx tsx`).
The `blog:*` npm scripts are already wired into the repo's `package.json`:

```bash
npm run blog:validate          # validate content/reviewed/*.md vs blog.schema.json
npm run blog:generate-index    # write public/blog-index.json from BLOGS
npm run blog:generate-routes   # assert every BLOGS entry has a flat route
npm run blog:copy-assets <slug> # content/assets/<slug> → public/assets/blog/<slug>
npm run blog:publish-medium <slug>  # Medium draft, or manual export under dist/medium
npm run blog:update-registry <slug> [--angular --status=..]
npm run blog:build             # validate → index → routes → ng build
```

The GitHub Pages workflow lives at `docs/blog-pipeline/github-workflow-publish-blog.yml`
as an **inactive template** — copy it to `.github/workflows/` to enable it.

## Important rule

Your Angular blog should be the source of truth. Medium should be a distribution channel using the Angular URL as canonical.
