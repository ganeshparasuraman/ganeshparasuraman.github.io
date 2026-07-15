# Publish Blog

Publish an approved blog to Angular site and Medium.

## Input

- Blog slug.

## Steps

1. Validate blog status is `APPROVED`.
2. Run content validation.
3. Add blog to Angular application.
4. Run `npm run build`.
5. Confirm Angular build passes.
6. Publish site through the existing GitHub Pages workflow.
7. Publish to Medium as draft by default.
8. Use Angular URL as canonical URL.
9. Update `publishing-registry.json`.
10. If Medium API fails, create manual Medium export under `dist/medium`.

## Example

```text
/publish-blog metadata-driven-data-platform
```
