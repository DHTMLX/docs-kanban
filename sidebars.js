module.exports = {
	docs: [
		{
			type: "doc",
			id: "index"
		},
		{
			type: "doc",
			id: "how_to_start"
		},
		{
			type: "category",
			label: "What's new and migration",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: "What's new and migration",
				//description: '',
				//slug: '/category/docusaurus-guides',
				keywords: ['news'],
				image: '/img/docusaurus.png',
			},
			items: [
				"news/whats_new",
				"news/migration"
			]
		},
			/*{
				type: "doc",
				id: "whats_new"
			},*/
		{
			type: "category",
			label: "API",
			collapsible: true,
			collapsed: false,
			link: {
				type: 'doc',
				id: "api/api_overview"
			},
			items: [
				//"api/api_overview",
				// JS Kanban methods
				{
					type: "category",
					label: "Kanban methods",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/methods_overview"
					},
					items: [
						// A
						"api/methods/js_kanban_addcard_method",
						"api/methods/js_kanban_addcolumn_method",
						"api/methods/js_kanban_addrow_method",
						// D
						"api/methods/js_kanban_deletecard_method",
						"api/methods/js_kanban_deletecolumn_method",
						"api/methods/js_kanban_deleterow_method",
						"api/methods/js_kanban_destructor_method",
						// G
						"api/methods/js_kanban_getareacards_method",
						"api/methods/js_kanban_getcard_method",
						"api/methods/js_kanban_getselection_method",
						// M
						"api/methods/js_kanban_movecard_method",
						"api/methods/js_kanban_movecolumn_method",
						"api/methods/js_kanban_moverow_method",

						// P
						"api/methods/js_kanban_parse_method",
						// S
						"api/methods/js_kanban_selectcard_method",
						"api/methods/js_kanban_serialize_method",
						"api/methods/js_kanban_setconfig_method",
						"api/methods/js_kanban_setlocale_method",
						"api/methods/js_kanban_setsearch_method",
						// U
						"api/methods/js_kanban_unselectcard_method",
						"api/methods/js_kanban_updatecard_method",
						"api/methods/js_kanban_updatecolumn_method",
						"api/methods/js_kanban_updaterow_method"
					]
				},
				// JS Kanban internal methods
				{
					type: "category",
					label: "Kanban internal API",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Internal API overview',
						keywords: ['internal api'],
						image: '/img/docusaurus.png',
					},
					items: [
						{
							type: "category",
							label: "Event Bus methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/internal_eventbus_overview"
							},
							items: [
								"api/internal/js_kanban_exec_method",
								"api/internal/js_kanban_intercept_method",
								"api/internal/js_kanban_on_method",
								"api/internal/js_kanban_setnext_method"
							]
						},
						{
							type: "category",
							label: "State methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/internal_state_overview"
							},
							items: [
								"api/internal/js_kanban_getreactivestate_method",
								"api/internal/js_kanban_getstate_method",
								"api/internal/js_kanban_getstores_method"
							]
						},
						{
							type: "category",
							label: "REST methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/internal_rest_overview"
							},
							items: [
								"api/provider/js_kanban_getcards_method",
								"api/provider/js_kanban_getcolumns_method",
								"api/provider/js_kanban_getrows_method"
							]
						}
					]
				},
				{
					type: "category",
					label: "Kanban events",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/events_overview"
					},
					items: [
						"api/events/js_kanban_addcard_event",
						"api/events/js_kanban_addcolumn_event",
						"api/events/js_kanban_addrow_event",
						"api/events/js_kanban_deletecard_event",
						"api/events/js_kanban_deletecolumn_event",
						"api/events/js_kanban_deleterow_event",
						"api/events/js_kanban_movecard_event",
						"api/events/js_kanban_movecolumn_event",
						"api/events/js_kanban_moverow_event",
						"api/events/js_kanban_selectcard_event",
						"api/events/js_kanban_setsearch_event",
						"api/events/js_kanban_unselectcard_event",
						"api/events/js_kanban_updatecard_event",
						"api/events/js_kanban_updatecolumn_event",
						"api/events/js_kanban_updaterow_event"	
					]
				},
				{
					type: "category",
					label: "Kanban properties",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/properties_overview"
					},
					items: [
						// JS Kanban
						// C
						"api/config/js_kanban_cards_config",
						"api/config/js_kanban_cardshape_config",
						"api/config/js_kanban_cardtemplate_config",
						"api/config/js_kanban_columnkey_config",
						"api/config/js_kanban_columns_config",
						// E
						"api/config/js_kanban_editorautosave_config",
						"api/config/js_kanban_editorshape_config",
						// L
						"api/config/js_kanban_locale_config",
						// R
						"api/config/js_kanban_readonly_config",
						"api/config/js_kanban_rowkey_config",
						"api/config/js_kanban_rows_config",

						// Toolbar
						"api/config/toolbar_api_config",
						"api/config/toolbar_items_config"
					]
				},
			]
		},
		{
			type: "category",
			label: "Guides",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Guides',
				keywords: ['guides'],
				image: '/img/docusaurus.png',
			},
			items: [
				"guides/initialization",
				"guides/configuration",
				"guides/customization",
				"guides/localization",
				"guides/working_with_data",
				"guides/working_with_server",
				"guides/typescript_support"
			]
		},
		{
			type: "doc",
			id: "howtos"
		}
	]
};
