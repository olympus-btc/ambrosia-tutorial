# Ambrosia Tutorial

Source of [tutorial.ambrosiapay.com](https://tutorial.ambrosiapay.com/), the step-by-step guide to install, configure, and use [Ambrosia](https://github.com/olympus-btc/ambrosia), a point of sale that accepts Bitcoin payments over the Lightning Network. Built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js 20 or newer (includes npm)

## Local development

```bash
npm ci
npm start
```

`npm start` serves the English site with hot reload. To preview the Spanish site, run `npm start -- --locale es`.

## Build

```bash
npm run build
npm run serve
```

`npm run build` generates both languages into `build/`, and `npm run serve` serves that output locally.

## Content and translations

- English pages live in `docs/`.
- Spanish pages live in `i18n/es/docusaurus-plugin-content-docs/current/` and mirror the same file structure.
- Every content change has to be made in both languages.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through GitHub Actions (`.github/workflows/deployment.yml`). The workflow can also be run manually from the Actions tab.
