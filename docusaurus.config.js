
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loja Checkpoint – Docs',              
  tagline: 'Documentação do app (terminal Python)',
  favicon: 'img/favicon.ico',

  // ====== Deploy em GitHub Pages ======
  url: 'https://eduardo895.github.io',          
  baseUrl: '/Loja-Checkpoint-Site/',            

   // ramo de publicação
  organizationName: 'eduardo895',
  projectName: 'Loja-Checkpoint-Site',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // (opcional) i18n
  i18n: { defaultLocale: 'pt-PT', locales: ['pt-PT'] },

  // ====== Preset classic ======
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // servir a documentação na raiz
          routeBasePath: '/',
          // usa require.resolve (CommonJS compatível)
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // ====== Tema ======
  themeConfig: {
    navbar: {
      title: 'Docs Loja Checkpoint',
      items: [
        {
          href: 'https://github.com/Deni-jpg/Loja-Checkpoint',
          label: 'Código do App',
          position: 'right',
        },
        {
          href: '/Loja-Checkpoint-Site/api/index.html', // pdoc gerado em static/api
          label: 'API (pdoc)',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Loja Checkpoint`,
    },
  },
};

module.exports = config;