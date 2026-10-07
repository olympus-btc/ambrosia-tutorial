// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ambrosia Tutorial',
  tagline: 'Welcome to the Ambrosia Tutorial, Learn how to install, configure, and use Ambrosia Point of Sale (PoS) to accept Bitcoin payments.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://tutorial.ambrosiapay.com/',
  baseUrl: '/',
  organizationName: 'olympus-btc',
  projectName: 'ambrosia-tutorial',
  onBrokenLinks: 'throw',
  trailingSlash: true,

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
        blog: false,
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
            type: 'localeDropdown',
            position: 'right',
          },
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
                label: 'Quick Start - Desktop App',
                to: '/quick-start-desktop-app',
              },
              {
                label: 'Quick Start - Docker',
                to: '/quick-start-docker',
              },
              {
                label: 'Quick Start - Native',
                to: '/quick-start-native',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
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
