# Claude Code Master Prompt

You are working inside an existing Angular static blog application.

Implement a spec-driven blog automation workflow.

The workflow must support:

1. Creating a blog from a Markdown draft.
2. Rewriting and rephrasing the blog using an LLM agent.
3. Generating SEO metadata.
4. Generating image prompts and saving generated image assets.
5. Adding the approved blog to the existing Angular application.
6. Updating `blog-index.json`.
7. Validating Markdown, metadata, images, and Angular build.
8. Publishing to Medium as draft by default.
9. Using the Angular blog URL as the canonical URL for Medium.
10. Updating `publishing-registry.json`.

Create or adapt:

- `specs/blog.workflow.yaml`
- `specs/blog.schema.json`
- `specs/agent.contracts.yaml`
- `.claude/agents/*.md`
- `.claude/commands/*.md`
- `tools/*.ts`
- `package.json` scripts
- `publishing-registry.json` if missing

Rules:

- Do not overwrite existing Angular application logic unless required.
- First inspect the existing app structure.
- Integrate with the existing blog route and content model where possible.
- If the app already has a blog index or markdown loader, adapt to it instead of creating a duplicate system.
- Publishing must require `APPROVED` status.
- Medium should publish as draft by default.
- If Medium API fails, generate manual export under `dist/medium`.
