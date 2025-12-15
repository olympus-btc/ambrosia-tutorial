// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ambrosia Tutorial',
  tagline: 'Welcome to the Ambrosia Tutorial, Learn how to install, configure, and use Ambrosia Point of Sale (PoS) to accept Bitcoin payments.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  url: 'https://olympus-btc.github.io',
  baseUrl: '/ambrosia-tutorial/',
  organizationName: 'olympus-btc',
  projectName: 'ambrosia-tutorial',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
        path: 'en',
      },
      es: {
        label: 'Español',
        htmlLang: 'es-MX',
        path: 'es',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Ambrosia',
          src: 'img/ambrosia.png',
        },
        items: [
          {
            href: 'https://github.com/olympus-btc/ambrosia-tutorial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Quick Start',
                to: '/quick-start',
              },
              {
                label: 'Other Features',
                to: '/other-features',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ambrosia Tutorial, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
