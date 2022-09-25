// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki Hyperion',
  tagline: 'Bravo le veau',
  url: 'https://wiki-hyperion.github.io',
  baseUrl: '/Wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_sans_texte.svg',
  organizationName: 'aeecleclair', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /* @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aeecleclair/Wiki/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aeecleclair/Wiki/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-connaissance',
        path: 'docs-connaissance', 
        routeBasePath: 'docs-connaissance',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
      
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-projet',
        path: 'docs-projet', 
        routeBasePath: 'docs-projet',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
      
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wiki ÉCLAIR', 
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_sans_texte.svg',
        },
        items: [
          {
            to: '/docs/presentation',
            label: 'Utiliser ce Wiki',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-projet/presentation_hyperion',
            label: 'Hyperion',
            position: 'left',
            activeBaseRegex: `/docs-projet/`,
          },
          {
            to: '/docs-connaissance/presentation_BC',
            label: 'Boîte de connaissance',
            position: 'left',
            activeBaseRegex: `/docs-connaissance/`,
          },          
          {
            href: 'https://github.com/aeecleclair',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aeecleclair',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ÉCLAIR.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
