# Implementation Order for Claude Code

Give Claude Code one task at a time.

## Task 1

Inspect the existing Angular app and identify how blog pages are currently loaded, routed, built, and deployed. Produce an implementation plan without changing files.

## Task 2

Create the spec files under `/specs` and Claude agent files under `/.claude/agents` based on the blog automation workflow.

## Task 3

Create CLI tools under `/tools` for validating blog metadata, generating `blog-index.json`, copying assets, and generating static routes.

## Task 4

Create Claude commands under `/.claude/commands` for:

- create-blog
- rewrite-blog
- generate-blog-images
- add-blog-to-angular
- approve-blog
- publish-blog

## Task 5

Integrate the workflow with the existing Angular blog route and Markdown rendering logic. Do not duplicate existing components if they already exist.

## Task 6

Add Medium publishing adapter. Default to draft publishing. Add manual export fallback.

## Task 7

Run validation, build the Angular app, fix issues, and show the final changed files.
