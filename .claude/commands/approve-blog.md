# Approve Blog

Mark a reviewed blog as approved.

## Input

- Blog slug.

## Steps

1. Read `content/reviewed/{slug}.md`.
2. Change status to `APPROVED`.
3. Add `approvedAt` date.
4. Preserve the current content.
5. Do not rewrite.
6. Do not publish automatically.

## Example

```text
/approve-blog metadata-driven-data-platform
```
