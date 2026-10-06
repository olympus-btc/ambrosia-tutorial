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

## Updating the Ambrosia version

The installation guides pin the Ambrosia release they describe, currently `0.9.0-beta`, in download links, release file names and install script URLs, in both languages. When a new release ships:

1. List the files that mention the current version:

   ```bash
   grep -rl "0.9.0-beta" docs i18n README.md
   ```

2. Replace it with the new version in those files.
3. Check on the release page that the file names still follow the same pattern, for example `ambrosia-pos_<version>_amd64.deb`.
4. Check the versions that depend on the release: the phoenixd version mentioned in the Native guide (`PHOENIXD_TAG` in the Ambrosia `scripts/install.sh`) and the Desktop App minimum requirements (Electron and the bundled Node.js).
5. Review the guides for UI changes and run `npm run build`.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through GitHub Actions (`.github/workflows/deployment.yml`). The workflow can also be run manually from the Actions tab.
