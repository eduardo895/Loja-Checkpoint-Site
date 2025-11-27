import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Loja-Checkpoint-Site/blog',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog', '5d8'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/archive',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/archive', '86e'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/authors',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/authors', '6f0'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/authors/all-sebastien-lorber-articles', 'b84'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/authors/yangshun',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/authors/yangshun', '5a9'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/first-blog-post',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/first-blog-post', '5dc'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/long-blog-post',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/long-blog-post', '943'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/mdx-blog-post',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/mdx-blog-post', '470'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/tags',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/tags', 'eb5'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/tags/docusaurus',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/tags/docusaurus', '682'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/tags/facebook',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/tags/facebook', '843'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/tags/hello',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/tags/hello', '6dc'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/tags/hola',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/tags/hola', 'a50'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/blog/welcome',
    component: ComponentCreator('/Loja-Checkpoint-Site/blog/welcome', '1c0'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/markdown-page',
    component: ComponentCreator('/Loja-Checkpoint-Site/markdown-page', '07a'),
    exact: true
  },
  {
    path: '/Loja-Checkpoint-Site/docs',
    component: ComponentCreator('/Loja-Checkpoint-Site/docs', '477'),
    routes: [
      {
        path: '/Loja-Checkpoint-Site/docs',
        component: ComponentCreator('/Loja-Checkpoint-Site/docs', '7a2'),
        routes: [
          {
            path: '/Loja-Checkpoint-Site/docs',
            component: ComponentCreator('/Loja-Checkpoint-Site/docs', '857'),
            routes: [
              {
                path: '/Loja-Checkpoint-Site/docs/category/tutorial---basics',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/category/tutorial---basics', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/category/tutorial---extras',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/category/tutorial---extras', '9fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/intro',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/intro', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/congratulations', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-blog-post', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-document', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/create-a-page', 'b0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/deploy-your-site', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-basics/markdown-features', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-extras/manage-docs-versions', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Loja-Checkpoint-Site/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Loja-Checkpoint-Site/docs/tutorial-extras/translate-your-site', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Loja-Checkpoint-Site/',
    component: ComponentCreator('/Loja-Checkpoint-Site/', 'a49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
