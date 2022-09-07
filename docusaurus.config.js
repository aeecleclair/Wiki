// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki ECLAIR',
  tagline: 'Bravo le veau',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_sans_texte.svg',
  organizationName: 'Anto-nain', // Usually your GitHub org/user name.
  projectName: 'Wiki ECLAIR', // Usually your repo name.
  //deployementBranch: 'gh-pages'

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Wiki ECLAIR', 
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_sans_texte.svg',
        },
        items: [
          {
            to: '/docs/presentation',
            label: 'Guide du Wiki',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-projet/presentation_DP',
            label: 'Documentation ',
            position: 'left',
            activeBaseRegex: `/docs-projet/`,
          },
          {
            to: '/docs-connaissance/presentation_BC',
            label: 'Boîte de connaissance',
            position: 'left',
            activeBaseRegex: `/docs-connaissance/`,
          },          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
