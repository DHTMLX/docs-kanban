---
sidebar_label: API overview
title: API Overview
description: You can have an API overview of JavaScript Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# API overview

## Kanban constructor

~~~js
new kanban.Kanban("#root", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#kanban-properties))

## Toolbar constructor

~~~js
new kanban.Toolbar("#toolbar", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#toolbar-properties))

## External editor constructor

~~~js
new kanban.Editor("#editor", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#external-editor-properties))

## Kanban methods

| Name                                                      | Description                                              |
| ----------------------------------------------------------| ---------------------------------------------------------|
| [](api/methods/js_kanban_addcard_method.md)               | @getshort(api/methods/js_kanban_addcard_method.md)       |
| [](api/methods/js_kanban_addcolumn_method.md)             | @getshort(api/methods/js_kanban_addcolumn_method.md)     |
| [](api/methods/js_kanban_addcomment_method.md)            | @getshort(api/methods/js_kanban_addcomment_method.md)    |
| [](api/methods/js_kanban_addrow_method.md)                | @getshort(api/methods/js_kanban_addrow_method.md)        |
| [](api/methods/js_kanban_deletecard_method.md)            | @getshort(api/methods/js_kanban_deletecard_method.md)    |
| [](api/methods/js_kanban_deletecolumn_method.md)          | @getshort(api/methods/js_kanban_deletecolumn_method.md)  |
| [](api/methods/js_kanban_deletecomment_method.md)         | @getshort(api/methods/js_kanban_deletecomment_method.md) |
| [](api/methods/js_kanban_deleterow_method.md)             | @getshort(api/methods/js_kanban_deleterow_method.md)     |
| [](api/methods/js_kanban_destructor_method.md)            | @getshort(api/methods/js_kanban_destructor_method.md)    |
| [](api/methods/js_kanban_duplicatecard_method.md)         | @getshort(api/methods/js_kanban_duplicatecard_method.md) |
| [](api/methods/js_kanban_getareacards_method.md)          | @getshort(api/methods/js_kanban_getareacards_method.md)  |
| [](api/methods/js_kanban_getcard_method.md)               | @getshort(api/methods/js_kanban_getcard_method.md)       |
| [](api/methods/js_kanban_getselection_method.md)          | @getshort(api/methods/js_kanban_getselection_method.md)  |
| [](api/methods/js_kanban_movecard_method.md)              | @getshort(api/methods/js_kanban_movecard_method.md)      |
| [](api/methods/js_kanban_movecolumn_method.md)            | @getshort(api/methods/js_kanban_movecolumn_method.md)    |
| [](api/methods/js_kanban_moverow_method.md)               | @getshort(api/methods/js_kanban_moverow_method.md)       |
| [](api/methods/js_kanban_parse_method.md)                 | @getshort(api/methods/js_kanban_parse_method.md)         |
| [](api/methods/js_kanban_redo_method.md)                  | @getshort(api/methods/js_kanban_redo_method.md)          |
| [](api/methods/js_kanban_scroll_method.md)                | @getshort(api/methods/js_kanban_scroll_method.md)        |
| [](api/methods/js_kanban_selectcard_method.md)            | @getshort(api/methods/js_kanban_selectcard_method.md)    |
| [](api/methods/js_kanban_serialize_method.md)             | @getshort(api/methods/js_kanban_serialize_method.md)     |
| [](api/methods/js_kanban_setconfig_method.md)             | @getshort(api/methods/js_kanban_setconfig_method.md)     |
| [](api/methods/js_kanban_setedit_method.md)               | @getshort(api/methods/js_kanban_setedit_method.md)       |
| [](api/methods/js_kanban_setlocale_method.md)             | @getshort(api/methods/js_kanban_setlocale_method.md)     |
| [](api/methods/js_kanban_setsearch_method.md)             | @getshort(api/methods/js_kanban_setsearch_method.md)     |
| [](api/methods/js_kanban_setsort_method.md)               | @getshort(api/methods/js_kanban_setsort_method.md)       |
| [](api/methods/js_kanban_undo_method.md)                  | @getshort(api/methods/js_kanban_undo_method.md)          |
| [](api/methods/js_kanban_unselectcard_method.md)          | @getshort(api/methods/js_kanban_unselectcard_method.md)  |
| [](api/methods/js_kanban_updatecard_method.md)            | @getshort(api/methods/js_kanban_updatecard_method.md)    |
| [](api/methods/js_kanban_updatecolumn_method.md)          | @getshort(api/methods/js_kanban_updatecolumn_method.md)  |
| [](api/methods/js_kanban_updatecomment_method.md)         | @getshort(api/methods/js_kanban_updatecomment_method.md) |
| [](api/methods/js_kanban_updaterow_method.md)             | @getshort(api/methods/js_kanban_updaterow_method.md)     |

## Kanban internal API

### Event Bus methods

| Name                                                       | Description                                                  |
| -----------------------------------------------------------| ------------------------------------------------------------ |
| [](api/internal/js_kanban_exec_method.md)                  | @getshort(api/internal/js_kanban_exec_method.md)             |
| [](api/internal/js_kanban_intercept_method.md)             | @getshort(api/internal/js_kanban_intercept_method.md)        |
| [](api/internal/js_kanban_on_method.md)                    | @getshort(api/internal/js_kanban_on_method.md)               |
| [](api/internal/js_kanban_setnext_method.md)               | @getshort(api/internal/js_kanban_setnext_method.md)          |

### Export methods

| Name                                         | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| [](api/internal/js_kanban_json_method.md)    | @getshort(api/internal/js_kanban_json_method.md)   |

### State methods

| Name                                                       | Description                                                   |
| -----------------------------------------------------------| ------------------------------------------------------------- |
| [](api/internal/js_kanban_getreactivestate_method.md)      | @getshort(api/internal/js_kanban_getreactivestate_method.md)  |
| [](api/internal/js_kanban_getstate_method.md)              | @getshort(api/internal/js_kanban_getstate_method.md)          |
| [](api/internal/js_kanban_getstores_method.md)             | @getshort(api/internal/js_kanban_getstores_method.md)         |

## Kanban events

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/events/js_kanban_addcard_event.md)                  | @getshort(api/events/js_kanban_addcard_event.md)         |
| [](api/events/js_kanban_addcolumn_event.md)                | @getshort(api/events/js_kanban_addcolumn_event.md)       |
| [](api/events/js_kanban_addcomment_event.md)               | @getshort(api/events/js_kanban_addcomment_event.md)      |
| [](api/events/js_kanban_addlink_event.md)                  | @getshort(api/events/js_kanban_addlink_event.md)         |
| [](api/events/js_kanban_addrow_event.md)                   | @getshort(api/events/js_kanban_addrow_event.md)          |
| [](api/events/js_kanban_deletecard_event.md)               | @getshort(api/events/js_kanban_deletecard_event.md)      |
| [](api/events/js_kanban_deletecolumn_event.md)             | @getshort(api/events/js_kanban_deletecolumn_event.md)    |
| [](api/events/js_kanban_deletecomment_event.md)            | @getshort(api/events/js_kanban_deletecomment_event.md)   |
| [](api/events/js_kanban_deletelink_event.md)               | @getshort(api/events/js_kanban_deletelink_event.md)      |
| [](api/events/js_kanban_deleterow_event.md)                | @getshort(api/events/js_kanban_deleterow_event.md)       |
| [](api/events/js_kanban_dragcard_event.md)                 | @getshort(api/events/js_kanban_dragcard_event.md)        |
| [](api/events/js_kanban_duplicatecard_event.md)            | @getshort(api/events/js_kanban_duplicatecard_event.md)   |
| [](api/events/js_kanban_enddragcard_event.md)              | @getshort(api/events/js_kanban_enddragcard_event.md)     |
| [](api/events/js_kanban_movecard_event.md)                 | @getshort(api/events/js_kanban_movecard_event.md)        |
| [](api/events/js_kanban_movecolumn_event.md)               | @getshort(api/events/js_kanban_movecolumn_event.md)      |
| [](api/events/js_kanban_moverow_event.md)                  | @getshort(api/events/js_kanban_moverow_event.md)         |
| [](api/events/js_kanban_scroll_event.md)                   | @getshort(api/events/js_kanban_scroll_event.md)          |
| [](api/events/js_kanban_selectcard_event.md)               | @getshort(api/events/js_kanban_selectcard_event.md)      |
| [](api/events/js_kanban_setedit_event.md)                  | @getshort(api/events/js_kanban_setedit_event.md)         |
| [](api/events/js_kanban_setsearch_event.md)                | @getshort(api/events/js_kanban_setsearch_event.md)       |
| [](api/events/js_kanban_setsort_event.md)                  | @getshort(api/events/js_kanban_setsort_event.md)         |
| [](api/events/js_kanban_startdragcard_event.md)            | @getshort(api/events/js_kanban_startdragcard_event.md)   |
| [](api/events/js_kanban_unselectcard_event.md)             | @getshort(api/events/js_kanban_unselectcard_event.md)    |
| [](api/events/js_kanban_updatecard_event.md)               | @getshort(api/events/js_kanban_updatecard_event.md)      |
| [](api/events/js_kanban_updatecolumn_event.md)             | @getshort(api/events/js_kanban_updatecolumn_event.md)    |
| [](api/events/js_kanban_updatecomment_event.md)            | @getshort(api/events/js_kanban_updatecomment_event.md)   |
| [](api/events/js_kanban_updaterow_event.md)                | @getshort(api/events/js_kanban_updaterow_event.md)       |

## Kanban properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/config/js_kanban_cardheight_config.md)              | @getshort(api/config/js_kanban_cardheight_config.md)     |
| [](api/config/js_kanban_cards_config.md)                   | @getshort(api/config/js_kanban_cards_config.md)          |
| [](api/config/js_kanban_cardshape_config.md)               | @getshort(api/config/js_kanban_cardshape_config.md)      |
| [](api/config/js_kanban_cardtemplate_config.md)            | @getshort(api/config/js_kanban_cardtemplate_config.md)   |
| [](api/config/js_kanban_columnkey_config.md)               | @getshort(api/config/js_kanban_columnkey_config.md)      |
| [](api/config/js_kanban_columns_config.md)                 | @getshort(api/config/js_kanban_columns_config.md)        |
| [](api/config/js_kanban_columnshape_config.md)             | @getshort(api/config/js_kanban_columnshape_config.md)    |
| [](api/config/js_kanban_currentuser_config.md)             | @getshort(api/config/js_kanban_currentuser_config.md)    |
| [](api/config/js_kanban_editor_config.md)                  | @getshort(api/config/js_kanban_editor_config.md)         |
| [~~editorAutoSave~~](api/config/js_kanban_editorautosave_config.md) | Deprecated! ~~Optional. Enables/disables an autosave mode~~ |
| [](api/config/js_kanban_editorshape_config.md)             | @getshort(api/config/js_kanban_editorshape_config.md)    |
| [](api/config/js_kanban_history_config.md)                 | @getshort(api/config/js_kanban_history_config.md)        |
| [](api/config/js_kanban_links_config.md)                   | @getshort(api/config/js_kanban_links_config.md)          |
| [](api/config/js_kanban_locale_config.md)                  | @getshort(api/config/js_kanban_locale_config.md)         |
| [](api/config/js_kanban_readonly_config.md)                | @getshort(api/config/js_kanban_readonly_config.md)       |
| [](api/config/js_kanban_rendertype_config.md)              | @getshort(api/config/js_kanban_rendertype_config.md)     |
| [](api/config/js_kanban_rowkey_config.md)                  | @getshort(api/config/js_kanban_rowkey_config.md)         |
| [](api/config/js_kanban_rows_config.md)                    | @getshort(api/config/js_kanban_rows_config.md)           |
| [](api/config/js_kanban_rowshape_config.md)                | @getshort(api/config/js_kanban_rowshape_config.md)       |
| [](api/config/js_kanban_scrolltype_config.md)              | @getshort(api/config/js_kanban_scrolltype_config.md)     |

## Toolbar methods

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/methods/toolbar_destructor_method.md)               | @getshort(api/methods/toolbar_destructor_method.md)      |
| [](api/methods/toolbar_setconfig_method.md)                | @getshort(api/methods/toolbar_setconfig_method.md)       |
| [](api/methods/toolbar_setlocale_method.md)                | @getshort(api/methods/toolbar_setlocale_method.md)       |

## Toolbar properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/config/toolbar_api_config.md)                       | @getshort(api/config/toolbar_api_config.md)              |
| [](api/config/toolbar_items_config.md)                     | @getshort(api/config/toolbar_items_config.md)            |
| [](api/config/toolbar_locale_config.md)                    | @getshort(api/config/toolbar_locale_config.md)           |

## External editor properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/config/external_editor_api_config.md)               | @getshort(api/config/external_editor_api_config.md)      |
| [](api/config/external_editor_config_config.md)            | @getshort(api/config/external_editor_config_config.md)   |

## Common settings

| Name                                         | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| [](api/common/js_kanban_meta_parameter.md)   | @getshort(api/common/js_kanban_meta_parameter.md)  |

## RestDataProvider API

### RestDataProvider methods

| Name                                                       | Description                                            |
| -----------------------------------------------------------| -------------------------------------------------------|
| [](api/provider/rest_methods/js_kanban_getcards_method.md)              | @getshort(api/provider/rest_methods/js_kanban_getcards_method.md)   |
| [](api/provider/rest_methods/js_kanban_getcolumns_method.md)            | @getshort(api/provider/rest_methods/js_kanban_getcolumns_method.md) |
| [](api/provider/rest_methods/js_kanban_getrows_method.md)               | @getshort(api/provider/rest_methods/js_kanban_getrows_method.md)    |
| [](api/provider/rest_methods/js_kanban_getusers_method.md)              | @getshort(api/provider/rest_methods/js_kanban_getusers_method.md)   |
| [](api/provider/rest_methods/js_kanban_send_method.md)             | @getshort(api/provider/rest_methods/js_kanban_send_method.md)   |

### RestDataProvider routes

| Name                                                       | Description                                            |
| -----------------------------------------------------------| -------------------------------------------------------|
| [](api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md) | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md) |
| [](api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)| @getshort(api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md) |
| [](api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)| @getshort(api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md) |
| [](api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)| @getshort(api/provider/rest_routes/get_routes/js_kanban_get_users_route.md) |
| [](api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)| @getshort(api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md) |
| [](api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)| @getshort(api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md) |
| [](api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)| @getshort(api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md) |
| [](api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)| @getshort(api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md) |
| [](api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)| @getshort(api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md) |
| [](api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)| @getshort(api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md) |
| [](api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)| @getshort(api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md) |
| [](api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)| @getshort(api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md) |
| [](api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)| @getshort(api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md) |
| [](api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)| @getshort(api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md) |
| [](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)| @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md) |
| [](api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)| @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md) |
| [](api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)| @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md) |