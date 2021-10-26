module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "doc",
      id: "how_to_start",
    },
		{
			type: "doc",
			id: "whats_new",
		},

    {
      type: "category",
      label: "JS Kanban API",
      collapsible: true,
      collapsed: false,
      items: [
				// you need to import components (elements without anchors on the right side)
				"toggle1_api/api_overview",
				//all components in 1 file (elements with anchors on the right side)
				"toggle2_api/api_overview",
        "api/api_overview",
				// JS Kanban methods
        {
          type: "category",
          label: "JS Kanban methods",
          collapsible: true,
          collapsed: true,
          items: [
						// A
            "api/methods/js_kanban_addcard_method",
            "api/methods/js_kanban_addcolumn_method",
						"api/methods/js_kanban_addrow_method",
						// D
						"api/methods/js_kanban_deletecard_method",
						"api/methods/js_kanban_destructor_method",
						// G
						"api/methods/js_kanban_getareacards_method",
						"api/methods/js_kanban_getcard_method",
						"api/methods/js_kanban_getselection_method",
						// M
						"api/methods/js_kanban_movecard_method",
						// P
						"api/methods/js_kanban_parse_method",
						// R
						"api/methods/js_kanban_removesearch_method",
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
          ],
        },
				// JS Kanban inner methods
				{
          type: "category",
          label: "JS Kanban inner methods",
          collapsible: true,
          collapsed: true,
          items: [
						// E
            "api/inner/js_kanban_exec_method",
						// G
						"api/inner/js_kanban_getreactivestate_method",
						"api/inner/js_kanban_getstate_method",
						"api/inner/js_kanban_getstores_method",
						// I
						"api/inner/js_kanban_intercept_method",
						// O
						"api/inner/js_kanban_on_method",
						// S
						"api/inner/js_kanban_setnext_method"
          ],
        },
				// JS Kanban events ?
        {
          type: "category",
          label: "JS Kanban events ?",
          collapsible: true,
          collapsed: true,
          items: [
          ],
        },
				// JS Kanban properties
        {
          type: "category",
          label: "JS Kanban properties",
          collapsible: true,
          collapsed: true,
          items: [
            // C
						"api/config/js_kanban_cards_config",
						"api/config/js_kanban_cardshape_config",
						"api/config/js_kanban_cardtemplate_config",
						"api/config/js_kanban_columns_config",
						// E
						"api/config/js_kanban_editorautosave_config",
						"api/config/js_kanban_editorshape_config",
						// L
						"api/config/js_kanban_lane_config",
						// R
						"api/config/js_kanban_readonly_config",
						// S
						"api/config/js_kanban_stage_config"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: false,
      items: [
        "guides/dev_guide",
        {
          type: "category",
          label: "Developer guides",
          collapsible: true,
          collapsed: true,
          items: [
            "guides/initialization",
            "guides/configuration",
            "guides/localization",
            "guides/loading_data",
            "guides/customization"
          ],
        }
      ],
    },
  ],
};
