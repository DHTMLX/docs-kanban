// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: false,
  title: 'DHTMLX JS Kanban Docs',
  tagline: 'DHTMLX JS Kanban Docs', 
  url: 'https://docs.dhtmlx.com',
  baseUrl: '/kanban/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DHTMLX', // Usually your GitHub org/user name.
  projectName: 'docs-kanban', // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // (Done)Please change this to your repo.
          editUrl: 'https://github.com/DHTMLX/docs-kanban/edit/master/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          trailingSlash: true
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JavaScript Kanban Documentation',
        logo: {
          alt: 'DHTMLX JavaScript Kanban Logo',
          src: 'img/logo.svg',
					href: 'https://docs.dhtmlx.com/'
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
					{
	          "label": "Examples",
	          "href": "https://webix.io/dev/webix/js-kanban/master/",
	          "position": "right"
	        },
	        {
	          "label": "Forum",
	          "href": "https://forum.dhtmlx.com/c/widgets/",
	          "position": "right"
	        },
	        {
	          "label": "Support",
	          "href": "https://dhtmlx.com/docs/technical-support.shtml",
	          "position": "right"
	        },
	        {
	          "label": "Download",
	          "href": "https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml",
	          "position": "right"
	        }
        ],
      },
      footer: {
				"style": "dark",
				"links": [
					{
						"title": "Development center",
						"items": [
							{
								"label": "Download JS Kanban",
								"href": "https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml",
								"position": "right"
							},
							{
								"label": "Examples",
								"href": "https://webix.io/dev/webix/js-kanban/master/",
								"position": "right"
							},
							{
								"label": "Blog",
								"href": "https://dhtmlx.com/blog/"
							},
							{
								"label": "Forum",
								"href": "https://forum.dhtmlx.com/c/widgets/",
								"position": "right"
							}
						]
					},
					{
						"title": "Community",
						"items": [
							{
								"label": "GitHub",
								"href": "https://github.com/DHTMLX"
							},
							{
								"label": "Youtube",
								"href": "https://www.youtube.com/user/dhtmlx"
							},
							{
								"label": "Facebook",
								"href": "https://www.facebook.com/dhtmlx"
							},
							{
								"label": "Twitter",
								"href": "https://twitter.com/dhtmlx"
							},
							{
								"label": "Linkedin",
								"href": "https://www.linkedin.com/groups/3345009/"
							}
						]
					},
					{
						"title": "Company",
						"items": [
							{
								"label": "About us",
								"href": "https://dhtmlx.com/docs/company.shtml"
							},
							{
								"label": "Contact us",
								"href": "https://dhtmlx.com/docs/contact.shtml"
							},
							{
								"label": "Licensing",
								"href": "https://dhtmlx.com/docs/products/dhtmlxKanban/#editions-licenses"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} XB Software Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
        // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
        apiKey: '123', //TODO: change it
        indexName: 'kanbanalt', //TODO: change it

        // Optional: see doc section bellow
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
    }),
};

module.exports = config;
