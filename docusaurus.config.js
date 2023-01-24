const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Redpanda Docs',
  tagline: 'A modern streaming platform for mission critical workloads',
  url: 'https://docs.redpanda.com',
  baseUrl: '/',
  trailingSlash: 'true',
  favicon: 'img/Redpanda_Favicon_32px.svg',
  organizationName: 'redpanda-data', // Usually your GitHub org/user name.
  projectName: 'redpanda', // Usually your repo name.,
  themeConfig: {
    colorMode: {
      disableSwitch: false
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Redpanda Logo',
        src: 'img/redpanda-docs-logo.svg',
        srcDark: 'img/redpanda-docs-logo.svg',
        href: '/'
      },
      items: [
        // { type: 'docsVersionDropdown',position: 'right'},
        // { type: 'localeDropdown',position: 'right'},
        { href: 'https://redpanda.com/', label: 'Redpanda', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/resources/', label: 'Resources', position: 'right', target: '_self' },
        { href: 'https://university.redpanda.com/', label: 'Training', position: 'right', target: '_self' },
        { href: 'https://redpanda.com/blog/', label: 'Blog', position: 'right', target: '_self' },
        { href: 'https://support.redpanda.com/hc/en-us/', label: 'Helpdesk', position: 'right', target: '_self' },
        { href: 'https://rpnda.co/slack', label: 'Community', position: 'right', target: '_self' },
        { href: 'https://github.com/redpanda-data/redpanda/', label: 'GitHub', position: 'right', target: '_self' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redpanda Logo',
        src: 'img/redpanda-logo.svg',
        srcDark: 'img/redpanda-logo.svg',
        href: 'https://redpanda.com/'
      },
      links: [
        {
        }
      ],
      copyright: '<p style=" color: #808080">© 2022 Redpanda Data Inc. All Rights Reserved.</p>'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash', 'docker', 'yaml','docker','powershell','git', 'ini', 'properties', 'javascript', 'python']
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '6YUV7845VT',

      // Public API key: it is safe to commit it
      apiKey: '2639b1b6c05670f52200b301c84866d9',

      indexName: 'redpanda',

      // Optional: see doc section below
      contextualSearch: true,

    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/redpanda-data/documentation/edit/dev/${versionDocsDirPath}/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          lastVersion: 'current',
          versions: {
            current: {
              label: '22.3',
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
        },
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/pandaproxy-schema-registry.json',
            route: '/docs/api/pandaproxy-schema-registry',
          },
          {
            spec: 'static/api/pandaproxy-rest.json',
            route: '/docs/api/pandaproxy-rest',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          options: {
            hideDownloadButton: true,
          },
        },
      },
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'docusaurus-plugin',
        injectHtmlTags({content}) {
          return {
            headTags:['<meta name="google-site-verification" content="QcL-pD81oJatgKXQ3Wquvk_Ku3RRtUljxKoMaicySQA" />'],
            preBodyTags: [`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB2CSV5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`],
          };
        },
      }
    },
  ],
  scripts: [
    {
      src: '/js/googletag.js',
      async: false,
    },
    {
      src:'https://plausible.io/js/plausible.js',
      defer: true,
      'data-domain': "redpanda.com",

    }
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
};
