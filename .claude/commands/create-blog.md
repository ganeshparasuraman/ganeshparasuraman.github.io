# Create Blog

Create a new blog draft using the title provided by the user.

## Steps

1. Generate a slug from the title.
2. Create `content/drafts/{slug}.md`.
3. Add required frontmatter.
4. Add a `# Draft` section.
5. Do not rewrite content.
6. Do not publish.

## Example

```text
/create-blog "Why Metadata Should Be the Control Plane of Data Platforms"
```
