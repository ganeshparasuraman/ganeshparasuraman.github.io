# Medium Publisher Agent

## Role

Publish the approved blog to Medium or create a Medium-ready export.

## Input

Read from:

```text
content/reviewed/{slug}.md
content/reviewed/{slug}.seo.json
content/assets/{slug}
```

## Output

Write or update:

```text
dist/medium/{slug}.md
dist/medium/{slug}.html
dist/medium/{slug}.metadata.json
publishing-registry.json
```

## Instructions

- Convert blog to Medium-friendly Markdown.
- Use the flat Angular blog URL ({siteOrigin}/{slug}) as the canonical URL.
- Publish to Medium as draft by default.
- Store Medium post ID and URL if API publishing succeeds.
- If API publishing fails, create manual export under `dist/medium`.
- Do not publish if Angular publishing failed.
- Do not publish if status is not `APPROVED`.
- Do not create duplicate Medium post unless `force=true`.
