
// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loja Checkpoint – Docs',
  tagline: 'Documentação do app (terminal Python)',
  favicon: 'img/favicon.ico',

  // Produção: GitHub Pages (project site)
  url: 'https://eduardo895.github.io',
  baseUrl: '/Loja-Checkpoint-Site/', // tem que começar e terminar com '/'. [3](https://docusaurus.io/docs/deployment)

  // Para deploy automático em gh-pages
  organizationName: 'eduardo895',
  projectName: 'Loja-Checkpoint-Site',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Idioma (opcional)
  i18n: {
    defaultLocale: 'pt-PT',
    locales: ['pt-PT'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Servir docs na raiz do site
          routeBasePath: '/',
          // Usa string de caminho (compatível com ESM)
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          // Caminho relativo para CSS
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs Loja Checkpoint',
      items: [
        { href: 'https://github.com/Deni-jpg/Loja-Checkpoint', label: 'Código do App', position: 'right' },
        // API gerada por pdoc em static/api
        { href: '/Loja-Checkpoint-Site/api/index.html', label: 'API (pdoc)', position: 'right' },
      ],
    },
    // (opcional) Prism: se quiseres, adiciona depois — não é necessário para compilar
    // prism: {
    //   theme: (await import('prism-react-renderer')).themes.github,
    //   darkTheme: (await import('prism-react-renderer')).themes.dracula,
    // },
   },
};

