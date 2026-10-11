// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'memm.dev',
  tagline: 'programmer socks? purely for productivity‚ obviously',
  favicon: 'img/memm.png',
  url: 'https://memm.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'memm.dev',
        logo: {
          alt: 'memm.dev logo',
          src: 'img/memm.png',
        },
        items: [
          {to: '/docs', label: 'Docs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
    }),
};

export default config;
