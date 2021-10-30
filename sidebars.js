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
			type: "doc",
			id: "whats_new"
		},
    {
      type: "category",
      label: "JS Kanban API",
      collapsible: true,
      collapsed: false,
      items: [
        "api/api_overview",
				// JS Kanban methods
        {
          type: "category",
          label: "JS Kanban Methods",
          collapsible: true,
          collapsed: true,
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
        {
          type: "category",
          label: "JS Kanban Properties",
          collapsible: true,
          collapsed: true,
          items: [
						// C
						"api/config/js_kanban_cards_config",
						"api/config/js_kanban_cardshape_config",
						"api/config/js_kanban_cardtemplate_config",
						"api/config/js_kanban_columnkey_config",
						"api/config/js_kanban_columns_config",
						// E
						"api/config/js_kanban_editorautosave_config",
						"api/config/js_kanban_editorshape_config",
						// R
						"api/config/js_kanban_readonly_config",
						"api/config/js_kanban_rowkey_config",
						"api/config/js_kanban_rows_config"
          ]
        },
				// JS Kanban internal methods
				{
					type: "category",
					label: "JS Kanban Internal API",
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: "category",
							label: "Event Bus Methods",
							collapsible: true,
							collapsed: true,
							items: [
								"api/internal/js_kanban_exec_method",
								"api/internal/js_kanban_intercept_method",
								"api/internal/js_kanban_on_method",
								"api/internal/js_kanban_setnext_method"
							]
						},
						{
							type: "category",
							label: "State Methods",
							collapsible: true,
							collapsed: true,
							items: [
								"api/internal/js_kanban_getreactivestate_method",
								"api/internal/js_kanban_getstate_method",
								"api/internal/js_kanban_getstores_method"
							]
						}
					]
				}
      ]
    },
    {
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: true,
      items: [
				"guides/initialization",
				"guides/configuration",
				"guides/localization",
				"guides/loading_data",
				"guides/customization"
      ]
    }
  ]
};
