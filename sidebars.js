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
                type: "generated-index",
                title: "What's new and migration",
                //slug: '/category/docusaurus-guides',
                keywords: ['news'],
                image: "/img/docusaurus.png",
            },
            items: [
                'news/whats_new',
                'news/migration'
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
                type: "doc",
                id: "api/overview/main_overview"
            },
            items: [
                //"api/overview/main_overview",
                // JS Kanban methods
                {
                    type: "category",
                    label: "Kanban methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/methods_overview"
                    },
                    items: [
                        // A
                        "api/methods/js_kanban_addcard_method",
                        "api/methods/js_kanban_addcolumn_method",
                        "api/methods/js_kanban_addcomment_method",
                        "api/methods/js_kanban_addlink_method",
                        "api/methods/js_kanban_addrow_method",
                        // D
                        "api/methods/js_kanban_deletecard_method",
                        "api/methods/js_kanban_deletecolumn_method",
                        "api/methods/js_kanban_deletecomment_method",
                        "api/methods/js_kanban_deletelink_method",
                        "api/methods/js_kanban_deleterow_method",
                        "api/methods/js_kanban_destructor_method",
                        "api/methods/js_kanban_duplicatecard_method",
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
                        // R
                        "api/methods/js_kanban_redo_method",
                        // S
                        "api/methods/js_kanban_scroll_method",
                        "api/methods/js_kanban_selectcard_method",
                        "api/methods/js_kanban_serialize_method",
                        "api/methods/js_kanban_setconfig_method",
                        "api/methods/js_kanban_setedit_method",
                        "api/methods/js_kanban_setlocale_method",
                        "api/methods/js_kanban_setsearch_method",
                        "api/methods/js_kanban_setsort_method",
                        // U
                        "api/methods/js_kanban_undo_method",
                        "api/methods/js_kanban_unselectcard_method",
                        "api/methods/js_kanban_updatecard_method",
                        "api/methods/js_kanban_updatecolumn_method",
                        "api/methods/js_kanban_updatecomment_method",
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
                        type: "generated-index",
                        title: 'Internal API overview',
                        keywords: ['internal api'],
                        image: "/img/docusaurus.png",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Event Bus methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "doc",
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
                            label: "Export methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "api/overview/internal_export_overview"
                            },
                            items: [
                                "api/internal/js_kanban_json_method",
                                // this section will be extended by the new methods
                            ]
                        },
                        {
                            type: "category",
                            label: "State methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "api/overview/internal_state_overview"
                            },
                            items: [
                                "api/internal/js_kanban_getreactivestate_method",
                                "api/internal/js_kanban_getstate_method",
                                "api/internal/js_kanban_getstores_method"
                            ]
                        },
                    ]
                },
                {
                    type: "category",
                    label: "Kanban events",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/events_overview"
                    },
                    items: [
                        "api/events/js_kanban_addcard_event",
                        "api/events/js_kanban_addcolumn_event",
                        "api/events/js_kanban_addcomment_event",
                        "api/events/js_kanban_addlink_event",
                        "api/events/js_kanban_addrow_event",
                        "api/events/js_kanban_deletecard_event",
                        "api/events/js_kanban_deletecolumn_event",
                        "api/events/js_kanban_deletecomment_event",
                        "api/events/js_kanban_deletelink_event",
                        "api/events/js_kanban_deleterow_event",
                        "api/events/js_kanban_dragcard_event",
                        "api/events/js_kanban_duplicatecard_event",
                        "api/events/js_kanban_enddragcard_event",
                        "api/events/js_kanban_movecard_event",
                        "api/events/js_kanban_movecolumn_event",
                        "api/events/js_kanban_moverow_event",
                        "api/events/js_kanban_scroll_event",
                        "api/events/js_kanban_selectcard_event",
                        "api/events/js_kanban_setedit_event",
                        "api/events/js_kanban_setsearch_event",
                        "api/events/js_kanban_setsort_event",
                        "api/events/js_kanban_startdragcard_event",
                        "api/events/js_kanban_unselectcard_event",
                        "api/events/js_kanban_updatecard_event",
                        "api/events/js_kanban_updatecolumn_event",
                        "api/events/js_kanban_updatecomment_event",
                        "api/events/js_kanban_updaterow_event"    
                    ]
                },
                {
                    type: "category",
                    label: "Kanban properties",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/properties_overview"
                    },
                    items: [
                        // JS Kanban
                        // C
                        "api/config/js_kanban_cardheight_config",
                        "api/config/js_kanban_cards_config",
                        "api/config/js_kanban_cardshape_config",
                        "api/config/js_kanban_cardtemplate_config",
                        "api/config/js_kanban_columnkey_config",
                        "api/config/js_kanban_columns_config",
                        "api/config/js_kanban_columnshape_config",
                        "api/config/js_kanban_currentuser_config",
                        // E
                        "api/config/js_kanban_editor_config",
                        "api/config/js_kanban_editorautosave_config",
                        "api/config/js_kanban_editorshape_config",
                        // H
                        "api/config/js_kanban_history_config",
                        // L
                        "api/config/js_kanban_links_config",
                        "api/config/js_kanban_locale_config",
                        // R
                        "api/config/js_kanban_readonly_config",
                        "api/config/js_kanban_rendertype_config",
                        "api/config/js_kanban_rowkey_config",
                        "api/config/js_kanban_rows_config",
                        "api/config/js_kanban_rowshape_config",
                        // S
                        "api/config/js_kanban_scrolltype_config",
                        // T
                        "api/config/js_kanban_theme_config"
                        
                    ]
                },
                {
                    type: "category",
                    label: "Toolbar methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/toolbar_methods_overview"
                    },
                    items: [    
                        // D
                        "api/methods/toolbar_destructor_method",
                        // S
                        "api/methods/toolbar_setconfig_method",
                        "api/methods/toolbar_setlocale_method",
                    ]
                },
                {
                    type: "category",
                    label: "Toolbar properties",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/toolbar_properties_overview"
                    },
                    items: [    
                        "api/config/toolbar_api_config",
                        "api/config/toolbar_items_config",
                        "api/config/toolbar_locale_config",
                        "api/config/toolbar_theme_config"
                    ]
                },
                {
                    type: "category",
                    label: "Common settings",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "api/overview/common_settings_overview"
                    },
                    items: [    
                        "api/common/js_kanban_meta_parameter",
                    ]
                },
                // RestDataProvider api
                {
                    type: "category",
                    label: "RestDataProvider API",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "RestDataProvider API",
                        keywords: ['rest api'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "REST methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "api/overview/internal_rest_overview"
                            },
                            items: [
                                "api/provider/rest_methods/js_kanban_getcards_method",
                                "api/provider/rest_methods/js_kanban_getcolumns_method",
                                "api/provider/rest_methods/js_kanban_getlinks_method",
                                "api/provider/rest_methods/js_kanban_getrows_method",
                                "api/provider/rest_methods/js_kanban_getusers_method",
                                "api/provider/rest_methods/js_kanban_send_method",
                            ]
                        },

                        {
                        type: "category",
                        label: "REST routes",
                        collapsible: true,
                        collapsed: true,
                        link: {
                            type: "doc",
                            id: "api/overview/rest_routes_overview"
                                                        
                        },
                        items: [
                            {
                                type: "category",
                                label: "GET routes",
                                collapsible: true,
                                collapsed: true,
                                link: {
                                    type: "generated-index",
                                    title: "GET routes",
                                    keywords: ['routes'],
                                    image: "/img/docusaurus.png"
                                },
                                items: [
                                    "api/provider/rest_routes/get_routes/js_kanban_get_cards_route",
                                    "api/provider/rest_routes/get_routes/js_kanban_get_columns_route",
                                    "api/provider/rest_routes/get_routes/js_kanban_get_links_route",    
                                    "api/provider/rest_routes/get_routes/js_kanban_get_rows_route",
                                    "api/provider/rest_routes/get_routes/js_kanban_get_users_route",
                                    "api/provider/rest_routes/get_routes/js_kanban_get_uploads_route",
                                ]
                            },
                            {
                                type: "category",
                                label: "POST routes",
                                collapsible: true,
                                collapsed: true,
                                link: {
                                    type: "generated-index",
                                    title: "POST routes",
                                    keywords: ['routes'],
                                    image: "/img/docusaurus.png"
                                },
                                items: [
                                    "api/provider/rest_routes/post_routes/js_kanban_post_cards_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_rows_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_columns_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_links_route",
                                    "api/provider/rest_routes/post_routes/js_kanban_post_uploads_route",
                                ]
                            },
                            {
                                type: "category",
                                label: "PUT routes",
                                collapsible: true,
                                collapsed: true,
                                link: {
                                    type: "generated-index",
                                    title: "PUT routes",
                                    keywords: ['routes'],
                                    image: "/img/docusaurus.png"
                                },
                                items: [
                                    "api/provider/rest_routes/put_routes/js_kanban_put_cards_route",
                                    "api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route",
                                    "api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route",
                                    "api/provider/rest_routes/put_routes/js_kanban_put_rows_route",
                                    "api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route",
                                    "api/provider/rest_routes/put_routes/js_kanban_put_columns_route",    
                                    "api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route",
                                ]
                            },
                            {
                                type: "category",
                                label: "DELETE routes",
                                collapsible: true,
                                collapsed: true,
                                link: {
                                    type: "generated-index",
                                    title: "DELETE routes",
                                    keywords: ['routes'],
                                    image: "/img/docusaurus.png"
                                },
                                items: [
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route",
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route",
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route",
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route",
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route",
                                    "api/provider/rest_routes/delete_routes/js_kanban_delete_links_route",                        
                                ]
                            }
                        ]
                    }        
                ]
              },
            ]
        },

        //start Backend and frameworks integration
        {
            type: "category",
            label: "Backend and frameworks integration",
            link: {
                type: "generated-index",
                title: "Backend and frameworks integration",
                keywords: ['backend and frameworks integration'],
                image: "/img/docusaurus.png"
            },
            items: [
                "guides/working_with_server",
                "guides/integration_with_angular",
                "guides/integration_with_react",
                "guides/integration_with_vue",
                "guides/integration_with_svelte",
                "guides/integration",
            ],
        },
        // end Backend and frameworks integration

        {
            type: "category",
            label: "Guides",
            collapsible: true,
            collapsed: true,
            link: {
                type: "generated-index",
                title: 'Guides',
                keywords: ['guides'],
                image: "/img/docusaurus.png",
            },
            items: [
                "guides/initialization",
                "guides/configuration",
                "guides/customization",
                "guides/stylization",
                "guides/localization",
                //"guides/integration",
                "guides/working_with_data",
                //"guides/working_with_server",
                "guides/typescript_support"
            ]
        },
        {
            type: "doc",
            id: "howtos"
        }
    ]
};
