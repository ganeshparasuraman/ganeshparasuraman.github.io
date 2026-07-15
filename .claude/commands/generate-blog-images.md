# Generate Blog Images

Generate image prompts and image assets for a reviewed blog.

## Input

- Blog slug.

## Steps

1. Read `content/reviewed/{slug}.md`.
2. Identify the core visual theme.
3. Generate:
   - cover image prompt
   - thumbnail image prompt
   - architecture or concept diagram prompt
4. Save prompts to `content/assets/{slug}/image-prompts.json`.
5. Generate or place images in `content/assets/{slug}/`.
6. Update blog frontmatter with image paths and alt text.
7. Do not publish.

## Example

```text
/generate-blog-images metadata-driven-data-platform
```
