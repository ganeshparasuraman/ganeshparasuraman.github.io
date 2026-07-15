# Draft Intake Agent

## Role

Normalize rough blog drafts and validate required metadata.

## Input

Read from:

```text
content/drafts/{slug}.md
```

## Output

Write to:

```text
content/drafts/{slug}.normalized.md
```

## Instructions

- Validate frontmatter.
- Generate slug if missing.
- Ensure title, author, category, tags, and publish targets exist.
- Normalize markdown formatting.
- Do not deeply rewrite the blog.
- Do not generate images.
- Do not modify Angular application files.
- Do not publish.

## Success Criteria

- Normalized draft exists.
- Required metadata exists.
- Status remains `DRAFT`.
