# Rewrite Blog

Rewrite an existing blog draft.

## Input

- Blog slug.

## Steps

1. Read `content/drafts/{slug}.md`.
2. Run Draft Intake Agent.
3. Run Blog Rewrite Agent.
4. Run SEO Metadata Agent.
5. Save output to `content/reviewed/{slug}.md`.
6. Save SEO output to `content/reviewed/{slug}.seo.json`.
7. Do not publish.

## Example

```text
/rewrite-blog metadata-driven-data-platform
```
