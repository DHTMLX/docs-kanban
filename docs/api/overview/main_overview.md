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

## Kanban methods

| Name                                                      | Description                                              |
| ----------------------------------------------------------| ---------------------------------------------------------|
| [](../methods/js_kanban_addcard_method.md)               | @getshort(../methods/js_kanban_addcard_method.md)       |
| [](../methods/js_kanban_addcolumn_method.md)             | @getshort(../methods/js_kanban_addcolumn_method.md)     |
| [](../methods/js_kanban_addcomment_method.md)            | @getshort(../methods/js_kanban_addcomment_method.md)    |
| [](../methods/js_kanban_addlink_method.md)               | @getshort(../methods/js_kanban_addlink_method.md)       |
| [](../methods/js_kanban_addrow_method.md)                | @getshort(../methods/js_kanban_addrow_method.md)        |
| [](../methods/js_kanban_deletecard_method.md)            | @getshort(../methods/js_kanban_deletecard_method.md)    |
| [](../methods/js_kanban_deletecolumn_method.md)          | @getshort(../methods/js_kanban_deletecolumn_method.md)  |
| [](../methods/js_kanban_deletecomment_method.md)         | @getshort(../methods/js_kanban_deletecomment_method.md) |
| [](../methods/js_kanban_deletelink_method.md)            | @getshort(../methods/js_kanban_deletelink_method.md)    |
| [](../methods/js_kanban_deleterow_method.md)             | @getshort(../methods/js_kanban_deleterow_method.md)     |
| [](../methods/js_kanban_destructor_method.md)            | @getshort(../methods/js_kanban_destructor_method.md)    |
| [](../methods/js_kanban_duplicatecard_method.md)         | @getshort(../methods/js_kanban_duplicatecard_method.md) |
| [](../methods/js_kanban_getareacards_method.md)          | @getshort(../methods/js_kanban_getareacards_method.md)  |
| [](../methods/js_kanban_getcard_method.md)               | @getshort(../methods/js_kanban_getcard_method.md)       |
| [](../methods/js_kanban_getselection_method.md)          | @getshort(../methods/js_kanban_getselection_method.md)  |
| [](../methods/js_kanban_movecard_method.md)              | @getshort(../methods/js_kanban_movecard_method.md)      |
| [](../methods/js_kanban_movecolumn_method.md)            | @getshort(../methods/js_kanban_movecolumn_method.md)    |
| [](../methods/js_kanban_moverow_method.md)               | @getshort(../methods/js_kanban_moverow_method.md)       |
| [](../methods/js_kanban_parse_method.md)                 | @getshort(../methods/js_kanban_parse_method.md)         |
| [](../methods/js_kanban_redo_method.md)                  | @getshort(../methods/js_kanban_redo_method.md)          |
| [](../methods/js_kanban_scroll_method.md)                | @getshort(../methods/js_kanban_scroll_method.md)        |
| [](../methods/js_kanban_selectcard_method.md)            | @getshort(../methods/js_kanban_selectcard_method.md)    |
| [](../methods/js_kanban_serialize_method.md)             | @getshort(../methods/js_kanban_serialize_method.md)     |
| [](../methods/js_kanban_setconfig_method.md)             | @getshort(../methods/js_kanban_setconfig_method.md)     |
| [](../methods/js_kanban_setedit_method.md)               | @getshort(../methods/js_kanban_setedit_method.md)       |
| [](../methods/js_kanban_setlocale_method.md)             | @getshort(../methods/js_kanban_setlocale_method.md)     |
| [](../methods/js_kanban_setsearch_method.md)             | @getshort(../methods/js_kanban_setsearch_method.md)     |
| [](../methods/js_kanban_setsort_method.md)               | @getshort(../methods/js_kanban_setsort_method.md)       |
| [](../methods/js_kanban_undo_method.md)                  | @getshort(../methods/js_kanban_undo_method.md)          |
| [](../methods/js_kanban_unselectcard_method.md)          | @getshort(../methods/js_kanban_unselectcard_method.md)  |
| [](../methods/js_kanban_updatecard_method.md)            | @getshort(../methods/js_kanban_updatecard_method.md)    |
| [](../methods/js_kanban_updatecolumn_method.md)          | @getshort(../methods/js_kanban_updatecolumn_method.md)  |
| [](../methods/js_kanban_updatecomment_method.md)         | @getshort(../methods/js_kanban_updatecomment_method.md) |
| [](../methods/js_kanban_updaterow_method.md)             | @getshort(../methods/js_kanban_updaterow_method.md)     |

## Kanban internal API

### Event Bus methods

| Name                                                       | Description                                                  |
| -----------------------------------------------------------| ------------------------------------------------------------ |
| [](../internal/js_kanban_exec_method.md)                  | @getshort(../internal/js_kanban_exec_method.md)             |
| [](../internal/js_kanban_intercept_method.md)             | @getshort(../internal/js_kanban_intercept_method.md)        |
| [](../internal/js_kanban_on_method.md)                    | @getshort(../internal/js_kanban_on_method.md)               |
| [](../internal/js_kanban_setnext_method.md)               | @getshort(../internal/js_kanban_setnext_method.md)          |

### Export methods

| Name                                         | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| [](../internal/js_kanban_json_method.md)    | @getshort(../internal/js_kanban_json_method.md)   |

### State methods

| Name                                                       | Description                                                   |
| -----------------------------------------------------------| ------------------------------------------------------------- |
| [](../internal/js_kanban_getreactivestate_method.md)      | @getshort(../internal/js_kanban_getreactivestate_method.md)  |
| [](../internal/js_kanban_getstate_method.md)              | @getshort(../internal/js_kanban_getstate_method.md)          |
| [](../internal/js_kanban_getstores_method.md)             | @getshort(../internal/js_kanban_getstores_method.md)         |

## Kanban events

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](../events/js_kanban_addcard_event.md)                  | @getshort(../events/js_kanban_addcard_event.md)         |
| [](../events/js_kanban_addcolumn_event.md)                | @getshort(../events/js_kanban_addcolumn_event.md)       |
| [](../events/js_kanban_addcomment_event.md)               | @getshort(../events/js_kanban_addcomment_event.md)      |
| [](../events/js_kanban_addlink_event.md)                  | @getshort(../events/js_kanban_addlink_event.md)         |
| [](../events/js_kanban_addrow_event.md)                   | @getshort(../events/js_kanban_addrow_event.md)          |
| [](../events/js_kanban_deletecard_event.md)               | @getshort(../events/js_kanban_deletecard_event.md)      |
| [](../events/js_kanban_deletecolumn_event.md)             | @getshort(../events/js_kanban_deletecolumn_event.md)    |
| [](../events/js_kanban_deletecomment_event.md)            | @getshort(../events/js_kanban_deletecomment_event.md)   |
| [](../events/js_kanban_deletelink_event.md)               | @getshort(../events/js_kanban_deletelink_event.md)      |
| [](../events/js_kanban_deleterow_event.md)                | @getshort(../events/js_kanban_deleterow_event.md)       |
| [](../events/js_kanban_dragcard_event.md)                 | @getshort(../events/js_kanban_dragcard_event.md)        |
| [](../events/js_kanban_duplicatecard_event.md)            | @getshort(../events/js_kanban_duplicatecard_event.md)   |
| [](../events/js_kanban_enddragcard_event.md)              | @getshort(../events/js_kanban_enddragcard_event.md)     |
| [](../events/js_kanban_movecard_event.md)                 | @getshort(../events/js_kanban_movecard_event.md)        |
| [](../events/js_kanban_movecolumn_event.md)               | @getshort(../events/js_kanban_movecolumn_event.md)      |
| [](../events/js_kanban_moverow_event.md)                  | @getshort(../events/js_kanban_moverow_event.md)         |
| [](../events/js_kanban_scroll_event.md)                   | @getshort(../events/js_kanban_scroll_event.md)          |
| [](../events/js_kanban_selectcard_event.md)               | @getshort(../events/js_kanban_selectcard_event.md)      |
| [](../events/js_kanban_setedit_event.md)                  | @getshort(../events/js_kanban_setedit_event.md)         |
| [](../events/js_kanban_setsearch_event.md)                | @getshort(../events/js_kanban_setsearch_event.md)       |
| [](../events/js_kanban_setsort_event.md)                  | @getshort(../events/js_kanban_setsort_event.md)         |
| [](../events/js_kanban_startdragcard_event.md)            | @getshort(../events/js_kanban_startdragcard_event.md)   |
| [](../events/js_kanban_unselectcard_event.md)             | @getshort(../events/js_kanban_unselectcard_event.md)    |
| [](../events/js_kanban_updatecard_event.md)               | @getshort(../events/js_kanban_updatecard_event.md)      |
| [](../events/js_kanban_updatecolumn_event.md)             | @getshort(../events/js_kanban_updatecolumn_event.md)    |
| [](../events/js_kanban_updatecomment_event.md)            | @getshort(../events/js_kanban_updatecomment_event.md)   |
| [](../events/js_kanban_updaterow_event.md)                | @getshort(../events/js_kanban_updaterow_event.md)       |

## Kanban properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](../config/js_kanban_cardheight_config.md)              | @getshort(../config/js_kanban_cardheight_config.md)     |
| [](../config/js_kanban_cards_config.md)                   | @getshort(../config/js_kanban_cards_config.md)          |
| [](../config/js_kanban_cardshape_config.md)               | @getshort(../config/js_kanban_cardshape_config.md)      |
| [](../config/js_kanban_cardtemplate_config.md)            | @getshort(../config/js_kanban_cardtemplate_config.md)   |
| [](../config/js_kanban_columnkey_config.md)               | @getshort(../config/js_kanban_columnkey_config.md)      |
| [](../config/js_kanban_columns_config.md)                 | @getshort(../config/js_kanban_columns_config.md)        |
| [](../config/js_kanban_columnshape_config.md)             | @getshort(../config/js_kanban_columnshape_config.md)    |
| [](../config/js_kanban_currentuser_config.md)             | @getshort(../config/js_kanban_currentuser_config.md)    |
| [](../config/js_kanban_editor_config.md)                  | @getshort(../config/js_kanban_editor_config.md)         |
| [~~editorAutoSave~~](api/config/js_kanban_editorautosave_config.md) | Deprecated! ~~Optional. Enables/disables an autosave mode~~ |
| [](../config/js_kanban_editorshape_config.md)             | @getshort(../config/js_kanban_editorshape_config.md)    |
| [](../config/js_kanban_history_config.md)                 | @getshort(../config/js_kanban_history_config.md)        |
| [](../config/js_kanban_links_config.md)                   | @getshort(../config/js_kanban_links_config.md)          |
| [](../config/js_kanban_locale_config.md)                  | @getshort(../config/js_kanban_locale_config.md)         |
| [](../config/js_kanban_readonly_config.md)                | @getshort(../config/js_kanban_readonly_config.md)       |
| [](../config/js_kanban_rendertype_config.md)              | @getshort(../config/js_kanban_rendertype_config.md)     |
| [](../config/js_kanban_rowkey_config.md)                  | @getshort(../config/js_kanban_rowkey_config.md)         |
| [](../config/js_kanban_rows_config.md)                    | @getshort(../config/js_kanban_rows_config.md)           |
| [](../config/js_kanban_rowshape_config.md)                | @getshort(../config/js_kanban_rowshape_config.md)       |
| [](../config/js_kanban_scrolltype_config.md)              | @getshort(../config/js_kanban_scrolltype_config.md)     |
| [](../config/js_kanban_theme_config.md)                   | @getshort(../config/js_kanban_theme_config.md)          |

## Toolbar methods

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](../methods/toolbar_destructor_method.md)               | @getshort(../methods/toolbar_destructor_method.md)      |
| [](../methods/toolbar_setconfig_method.md)                | @getshort(../methods/toolbar_setconfig_method.md)       |
| [](../methods/toolbar_setlocale_method.md)                | @getshort(../methods/toolbar_setlocale_method.md)       |

## Toolbar properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](../config/toolbar_api_config.md)                       | @getshort(../config/toolbar_api_config.md)              |
| [](../config/toolbar_items_config.md)                     | @getshort(../config/toolbar_items_config.md)            |
| [](../config/toolbar_locale_config.md)                    | @getshort(../config/toolbar_locale_config.md)           |
| [](../config/toolbar_theme_config.md)                     | @getshort(../config/toolbar_theme_config.md)            |

## Common settings

| Name                                         | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| [](../common/js_kanban_meta_parameter.md)   | @getshort(../common/js_kanban_meta_parameter.md)  |

## RestDataProvider API

### RestDataProvider methods

| Name                                                           | Description                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------------- |
| [](../provider/rest_methods/js_kanban_getcards_method.md)     | @getshort(../provider/rest_methods/js_kanban_getcards_method.md)   |
| [](../provider/rest_methods/js_kanban_getcolumns_method.md)   | @getshort(../provider/rest_methods/js_kanban_getcolumns_method.md) |
| [](../provider/rest_methods/js_kanban_getlinks_method.md)     | @getshort(../provider/rest_methods/js_kanban_getlinks_method.md)   |
| [](../provider/rest_methods/js_kanban_getrows_method.md)      | @getshort(../provider/rest_methods/js_kanban_getrows_method.md)    |
| [](../provider/rest_methods/js_kanban_getusers_method.md)     | @getshort(../provider/rest_methods/js_kanban_getusers_method.md)   |
| [](../provider/rest_methods/js_kanban_send_method.md)         | @getshort(../provider/rest_methods/js_kanban_send_method.md)       |

### RestDataProvider routes

| Name                                                        | Description                                            |
| ----------------------------------------------------------- | -------------------------------------------------------|
| [GET `/cards`](api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md) | @getshort(../provider/rest_routes/get_routes/js_kanban_get_cards_route.md) |
| [GET `/columns`](api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_columns_route.md) |
| [GET `/links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_links_route.md) |
| [GET `/rows`](api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_rows_route.md) |
| [GET `/users`](api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_users_route.md) |
| [GET `/uploads`](api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_uploads_route.md) |
| [POST `/cards`](api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_route.md) |
| [POST `/cards/{cardId}/comments`](api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md) |
| [POST `/cards/{cardId}/vote`](api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md) |
| [POST `/columns`](api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_columns_route.md) |
| [POST `/links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_links_route.md) |
| [POST `/rows`](api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_rows_route.md) |
| [POST `/uploads`](api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_uploads_route.md) |
| [PUT `/cards`](api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_route.md) |
| [PUT `/cards/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md) |
| [PUT `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md) |
| [PUT `/columns`](api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_route.md) |
| [PUT `/columns/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md) |
| [PUT `/rows`](api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_route.md) |
| [PUT `/rows/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md) |
| [DELETE `/cards`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md) |
| [DELETE `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) |
| [DELETE `/cards/{cardId}/vote`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md) |
| [DELETE `/columns`](api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md) |
| [DELETE `/links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_links_route.md) |
| [DELETE `/rows`](api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md) |
