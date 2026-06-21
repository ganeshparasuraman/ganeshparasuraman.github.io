# ganeshparasuraman.github.io

Personal tech blog, built as a static **Angular 19** single-page app with
**Angular Material** (Material 3 theming), a light/dark theme toggle, Material
Icons, and a fully responsive layout. Deployed to GitHub Pages.

## Content

- **Home** (`/`) — landing page with profile + blog tiles
- **Blogs**
  - `/mongodb-uc-backend` — MongoDB as the Metadata Backbone for Unity Catalog
  - `/edi-ndjson` — Parsing Healthcare EDI into NDJSON
  - `/ai-native-data-mesh` — Building an AI-Native Data Mesh with Metadata at the Core
  - `/dto-blog` — The Organisational Data Twin
- **About Me** (`/about-me`) and **Resume** (`/resume`) — placeholder pages

## Develop

```bash
npm install
npm start            # ng serve → http://localhost:4200
```

## Build

```bash
npm run build        # ng build --configuration production
# output: dist/ganeshsite/browser
```

## Theming

The Material 3 theme is defined in `src/styles.scss` with
`theme-type: color-scheme`, so every Material system variable resolves through
CSS `light-dark()`. `ThemeService` (`src/app/core/theme.service.ts`) toggles the
`dark-theme` class on `<html>` and persists the choice in `localStorage`
(default: light, honoring the OS preference on first load).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app
and publishes `dist/ganeshsite/browser` to the **`gh-pages`** branch. The
workflow also copies `index.html` to `404.html` (SPA deep-link fallback for
GitHub Pages) and adds `.nojekyll`.

> One-time setup: in repo **Settings → Pages**, set the source to the
> **`gh-pages` branch / root**.
