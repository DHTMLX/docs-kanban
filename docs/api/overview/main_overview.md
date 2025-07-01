---
sidebar_label: API overview
title: API Overview
description: Here's a general overview of the JavaScript Kanban API found in the DHTMLX JavaScript Kanban library documentation. You can explore developer guides and API references, experiment with code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# API overview

## Kanban constructor

```js
new kanban.Kanban("#root", {
  // configuration parameters
});
```

**Parameters**:

- the HTML container (the container's ID)
- an object containing configuration parameters ([details here](#kanban-properties))

## Toolbar constructor

```js
new kanban.Toolbar("#toolbar", {
  // configuration parameters
});
```

**Parameters**:

- the HTML container (the container's ID)
- an object containing configuration settings ([details here](#toolbar-properties))

## Kanban methods

| Name                                              | Description                                             |
| ------------------------------------------------- | ------------------------------------------------------- |
| [addCard()](/api/methods/js_kanban_addcard_method)       | @getshort(../methods/js_kanban_addcard_method.md)       |
| [addColumn()](/api/methods/js_kanban_addcolumn_method)     | @getshort(../methods/js_kanban_addcolumn_method.md)     |
| [addComment()](/api/methods/js_kanban_addcomment_method)    | @getshort(../methods/js_kanban_addcomment_method.md)    |
| [addLink()](/api/methods/js_kanban_addlink_method)       | @getshort(../methods/js_kanban_addlink_method.md)       |
| [addRow()](/api/methods/js_kanban_addrow_method)        | @getshort(../methods/js_kanban_addrow_method.md)        |
| [deleteCard()](/api/methods/js_kanban_deletecard_method)    | @getshort(../methods/js_kanban_deletecard_method.md)    |
| [deleteColumn()](/api/methods/js_kanban_deletecolumn_method)  | @getshort(../methods/js_kanban_deletecolumn_method.md)  |
| [deleteComment()](/api/methods/js_kanban_deletecomment_method) | @getshort(../methods/js_kanban_deletecomment_method.md) |
| [deleteLink()](/api/methods/js_kanban_deletelink_method)    | @getshort(../methods/js_kanban_deletelink_method.md)    |
| [deleteRow()](/api/methods/js_kanban_deleterow_method)     | @getshort(../methods/js_kanban_deleterow_method.md)     |
| [destructor()](/api/methods/js_kanban_destructor_method)    | @getshort(../methods/js_kanban_destructor_method.md)    |
| [duplicateCard()](/api/methods/js_kanban_duplicatecard_method) | @getshort(../methods/js_kanban_duplicatecard_method.md) |
| [getAreaCards()](/api/methods/js_kanban_getareacards_method)  | @getshort(../methods/js_kanban_getareacards_method.md)  |
| [getCard()](/api/methods/js_kanban_getcard_method)       | @getshort(../methods/js_kanban_getcard_method.md)       |
| [getSelection()](/api/methods/js_kanban_getselection_method)  | @getshort(../methods/js_kanban_getselection_method.md)  |
| [moveCard()](/api/methods/js_kanban_movecard_method)      | @getshort(../methods/js_kanban_movecard_method.md)      |
| [moveColumn()](/api/methods/js_kanban_movecolumn_method)    | @getshort(../methods/js_kanban_movecolumn_method.md)    |
| [moveRow()](/api/methods/js_kanban_moverow_method)       | @getshort(../methods/js_kanban_moverow_method.md)       |
| [parse()](/api/methods/js_kanban_parse_method)         | @getshort(../methods/js_kanban_parse_method.md)         |
| [redo()](/api/methods/js_kanban_redo_method)          | @getshort(../methods/js_kanban_redo_method.md)          |
| [scroll()](/api/methods/js_kanban_scroll_method)        | @getshort(../methods/js_kanban_scroll_method.md)        |
| [selectCard()](/api/methods/js_kanban_selectcard_method)    | @getshort(../methods/js_kanban_selectcard_method.md)    |
| [serialize()](/api/methods/js_kanban_serialize_method)     | @getshort(../methods/js_kanban_serialize_method.md)     |
| [setConfig()](/api/methods/js_kanban_setconfig_method)     | @getshort(../methods/js_kanban_setconfig_method.md)     |
| [setEdit()](/api/methods/js_kanban_setedit_method)       | @getshort(../methods/js_kanban_setedit_method.md)       |
| [setLocale()](/api/methods/js_kanban_setlocale_method)     | @getshort(../methods/js_kanban_setlocale_method.md)     |
| [setSearch()](/api/methods/js_kanban_setsearch_method)     | @getshort(../methods/js_kanban_setsearch_method.md)     |
| [setSort()](/api/methods/js_kanban_setsort_method)       | @getshort(../methods/js_kanban_setsort_method.md)       |
| [setTheme()](/api/methods/js_kanban_settheme_method)      | @getshort(../methods/js_kanban_settheme_method.md)      |
| [undo()](/api/methods/js_kanban_undo_method)          | @getshort(../methods/js_kanban_undo_method.md)          |
| [unselectCard()](/api/methods/js_kanban_unselectcard_method)  | @getshort(../methods/js_kanban_unselectcard_method.md)  |
| [updateCard()](/api/methods/js_kanban_updatecard_method)    | @getshort(../methods/js_kanban_updatecard_method.md)    |
| [updateColumn()](/api/methods/js_kanban_updatecolumn_method)  | @getshort(../methods/js_kanban_updatecolumn_method.md)  |
| [updateComment()](/api/methods/js_kanban_updatecomment_method) | @getshort(../methods/js_kanban_updatecomment_method.md) |
| [updateRow()](/api/methods/js_kanban_updaterow_method)     | @getshort(../methods/js_kanban_updaterow_method.md)     |

## Kanban internal API

### Event Bus methods

| Name                                           | Description                                          |
| ---------------------------------------------- | ---------------------------------------------------- |
| [api.exec()](/api/internal/js_kanban_exec_method)      | @getshort(../internal/js_kanban_exec_method.md)      |
| [api.intercept()](/api/internal/js_kanban_intercept_method) | @getshort(../internal/js_kanban_intercept_method.md) |
| [api.on()](/api/internal/js_kanban_on_method)        | @getshort(../internal/js_kanban_on_method.md)        |
| [api.setNext()](/api/internal/js_kanban_setnext_method)   | @getshort(../internal/js_kanban_setnext_method.md)   |

### Export methods

| Name                                      | Description                                     |
| ----------------------------------------- | ----------------------------------------------- |
| [export.json()](/api/internal/js_kanban_json_method) | @getshort(../internal/js_kanban_json_method.md) |

### State methods

| Name                                                  | Description                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| [api.getReactiveState()](/api/internal/js_kanban_getreactivestate_method) | @getshort(../internal/js_kanban_getreactivestate_method.md) |
| [api.getState()](/api/internal/js_kanban_getstate_method)         | @getshort(../internal/js_kanban_getstate_method.md)         |
| [api.getStores()](/api/internal/js_kanban_getstores_method)        | @getshort(../internal/js_kanban_getstores_method.md)        |

## Kanban events

| Name                                            | Description                                           |
| :---------------------------------------------- | :---------------------------------------------------- |
| [add-card](/api/events/js_kanban_addcard_event)       | @getshort(../events/js_kanban_addcard_event.md)       |
| [add-column](/api/events/js_kanban_addcolumn_event)     | @getshort(../events/js_kanban_addcolumn_event.md)     |
| [add-comment](/api/events/js_kanban_addcomment_event)    | @getshort(../events/js_kanban_addcomment_event.md)    |
| [add-link](/api/events/js_kanban_addlink_event)       | @getshort(../events/js_kanban_addlink_event.md)       |
| [add-row](/api/events/js_kanban_addrow_event)        | @getshort(../events/js_kanban_addrow_event.md)        |
| [add-vote](/api/events/js_kanban_addvote_event)       | @getshort(../events/js_kanban_addvote_event.md)       |
| [delete-card](/api/events/js_kanban_deletecard_event)    | @getshort(../events/js_kanban_deletecard_event.md)    |
| [delete-column](/api/events/js_kanban_deletecolumn_event)  | @getshort(../events/js_kanban_deletecolumn_event.md)  |
| [delete-comment](/api/events/js_kanban_deletecomment_event) | @getshort(../events/js_kanban_deletecomment_event.md) |
| [delete-link](/api/events/js_kanban_deletelink_event)    | @getshort(../events/js_kanban_deletelink_event.md)    |
| [delete-row](/api/events/js_kanban_deleterow_event)     | @getshort(../events/js_kanban_deleterow_event.md)     |
| [delete-vote](/api/events/js_kanban_deletevote_event)    | @getshort(../events/js_kanban_deletevote_event.md)    |
| [drag-card](/api/events/js_kanban_dragcard_event)      | @getshort(../events/js_kanban_dragcard_event.md)      |
| [duplicate-card](/api/events/js_kanban_duplicatecard_event) | @getshort(../events/js_kanban_duplicatecard_event.md) |
| [end-drag-card](/api/events/js_kanban_enddragcard_event)   | @getshort(../events/js_kanban_enddragcard_event.md)   |
| [move-card](/api/events/js_kanban_movecard_event)      | @getshort(../events/js_kanban_movecard_event.md)      |
| [move-column](/api/events/js_kanban_movecolumn_event)    | @getshort(../events/js_kanban_movecolumn_event.md)    |
| [move-row](/api/events/js_kanban_moverow_event)       | @getshort(../events/js_kanban_moverow_event.md)       |
| [scroll](/api/events/js_kanban_scroll_event)        | @getshort(../events/js_kanban_scroll_event.md)        |
| [select-card](/api/events/js_kanban_selectcard_event)    | @getshort(../events/js_kanban_selectcard_event.md)    |
| [set-edit](/api/events/js_kanban_setedit_event)       | @getshort(../events/js_kanban_setedit_event.md)       |
| [set-search](/api/events/js_kanban_setsearch_event)     | @getshort(../events/js_kanban_setsearch_event.md)     |
| [set-sort](/api/events/js_kanban_setsort_event)       | @getshort(../events/js_kanban_setsort_event.md)       |
| [start-drag-card](/api/events/js_kanban_startdragcard_event) | @getshort(../events/js_kanban_startdragcard_event.md) |
| [unselect-card](/api/events/js_kanban_unselectcard_event)  | @getshort(../events/js_kanban_unselectcard_event.md)  |
| [update-card](/api/events/js_kanban_updatecard_event)    | @getshort(../events/js_kanban_updatecard_event.md)    |
| [update-column](/api/events/js_kanban_updatecolumn_event)  | @getshort(../events/js_kanban_updatecolumn_event.md)  |
| [update-comment](/api/events/js_kanban_updatecomment_event) | @getshort(../events/js_kanban_updatecomment_event.md) |
| [update-row](/api/events/js_kanban_updaterow_event)     | @getshort(../events/js_kanban_updaterow_event.md)     |

## Kanban properties

| Name                                                                 | Description                                                 |
| :------------------------------------------------------------------- | :---------------------------------------------------------- |
| [cardHeight](/api/config/js_kanban_cardheight_config)                        | @getshort(../config/js_kanban_cardheight_config.md)         |
| [cards](/api/config/js_kanban_cards_config)                             | @getshort(../config/js_kanban_cards_config.md)              |
| [cardShape](/api/config/js_kanban_cardshape_config)                         | @getshort(../config/js_kanban_cardshape_config.md)          |
| [cardTemplate](/api/config/js_kanban_cardtemplate_config)                      | @getshort(../config/js_kanban_cardtemplate_config.md)       |
| [columnKey](/api/config/js_kanban_columnkey_config)                         | @getshort(../config/js_kanban_columnkey_config.md)          |
| [columns](/api/config/js_kanban_columns_config)                           | @getshort(../config/js_kanban_columns_config.md)            |
| [columnShape](/api/config/js_kanban_columnshape_config)                       | @getshort(../config/js_kanban_columnshape_config.md)        |
| [currentUser](/api/config/js_kanban_currentuser_config)                       | @getshort(../config/js_kanban_currentuser_config.md)        |
| [editor](/api/config/js_kanban_editor_config)                            | @getshort(../config/js_kanban_editor_config.md)             |
| [~~editorAutoSave~~](/api/config/js_kanban_editorautosave_config.md) | Deprecated! ~~Optional. Enables/disables an autosave mode~~ |
| [editorShape](/api/config/js_kanban_editorshape_config)                       | @getshort(../config/js_kanban_editorshape_config.md)        |
| [history](/api/config/js_kanban_history_config)                           | @getshort(../config/js_kanban_history_config.md)            |
| [links](/api/config/js_kanban_links_config)                             | @getshort(../config/js_kanban_links_config.md)              |
| [locale](/api/config/js_kanban_locale_config)                            | @getshort(../config/js_kanban_locale_config.md)             |
| [readonly](/api/config/js_kanban_readonly_config)                          | @getshort(../config/js_kanban_readonly_config.md)           |
| [renderType](/api/config/js_kanban_rendertype_config)                        | @getshort(../config/js_kanban_rendertype_config.md)         |
| [rowKey](/api/config/js_kanban_rowkey_config)                            | @getshort(../config/js_kanban_rowkey_config.md)             |
| [rows](/api/config/js_kanban_rows_config)                              | @getshort(../config/js_kanban_rows_config.md)               |
| [rowShape](/api/config/js_kanban_rowshape_config)                          | @getshort(../config/js_kanban_rowshape_config.md)           |
| [scrollType](/api/config/js_kanban_scrolltype_config)                        | @getshort(../config/js_kanban_scrolltype_config.md)         |
| [theme](/api/config/js_kanban_theme_config)                             | @getshort(../config/js_kanban_theme_config.md)              |

## Toolbar methods

| Name                                         | Description                                        |
| :------------------------------------------- | :------------------------------------------------- |
| [destructor()](/api/methods/toolbar_destructor_method) | @getshort(../methods/toolbar_destructor_method.md) |
| [setConfig()](/api/methods/toolbar_setconfig_method)  | @getshort(../methods/toolbar_setconfig_method.md)  |
| [setLocale()](/api/methods/toolbar_setlocale_method)  | @getshort(../methods/toolbar_setlocale_method.md)  |

## Toolbar properties

| Name                                    | Description                                   |
| :-------------------------------------- | :-------------------------------------------- |
| [api](/api/config/toolbar_api_config)    | @getshort(../config/toolbar_api_config.md)    |
| [items](/api/config/toolbar_items_config)  | @getshort(../config/toolbar_items_config.md)  |
| [locale](/api/config/toolbar_locale_config) | @getshort(../config/toolbar_locale_config.md) |
| [theme](/api/config/toolbar_theme_config)  | @getshort(../config/toolbar_theme_config.md)  |

## Common settings

| Name                                       | Description                                      |
| :----------------------------------------- | :----------------------------------------------- |
| [$meta](/api/common/js_kanban_meta_parameter) | @getshort(../common/js_kanban_meta_parameter.md) |

## RestDataProvider API

### RestDataProvider methods

| Name                                                         | Description                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| [getCards()](/api/provider/rest_methods/js_kanban_getcards_method)   | @getshort(../provider/rest_methods/js_kanban_getcards_method.md)   |
| [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method) | @getshort(../provider/rest_methods/js_kanban_getcolumns_method.md) |
| [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method)   | @getshort(../provider/rest_methods/js_kanban_getlinks_method.md)   |
| [getRows()](/api/provider/rest_methods/js_kanban_getrows_method)    | @getshort(../provider/rest_methods/js_kanban_getrows_method.md)    |
| [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method)   | @getshort(../provider/rest_methods/js_kanban_getusers_method.md)   |
| [send()](/api/provider/rest_methods/js_kanban_send_method)       | @getshort(../provider/rest_methods/js_kanban_send_method.md)       |

### RestDataProvider routes

| Name                                                                                                                           | Description                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [GET `/cards`](/api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md)                                              | @getshort(../provider/rest_routes/get_routes/js_kanban_get_cards_route.md)                |
| [GET `/columns`](/api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)                                          | @getshort(../provider/rest_routes/get_routes/js_kanban_get_columns_route.md)              |
| [GET `/links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)                                              | @getshort(../provider/rest_routes/get_routes/js_kanban_get_links_route.md)                |
| [GET `/rows`](/api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)                                                | @getshort(../provider/rest_routes/get_routes/js_kanban_get_rows_route.md)                 |
| [GET `/users`](/api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)                                              | @getshort(../provider/rest_routes/get_routes/js_kanban_get_users_route.md)                |
| [GET `/uploads`](/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)                                          | @getshort(../provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)              |
| [POST `/cards`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)                                           | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_route.md)              |
| [POST `/cards/{cardId}/comments`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md)                | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md)     |
| [POST `/cards/{cardId}/vote`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md)                       | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md)        |
| [POST `/columns`](/api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)                                       | @getshort(../provider/rest_routes/post_routes/js_kanban_post_columns_route.md)            |
| [POST `/links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)                                           | @getshort(../provider/rest_routes/post_routes/js_kanban_post_links_route.md)              |
| [POST `/rows`](/api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)                                             | @getshort(../provider/rest_routes/post_routes/js_kanban_post_rows_route.md)               |
| [POST `/uploads`](/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)                                       | @getshort(../provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)            |
| [PUT `/cards`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)                                              | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_route.md)                |
| [PUT `/cards/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)                               | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)           |
| [PUT `/cards/{cardId}/comments/{cardId}`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md)          | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md)       |
| [PUT `/columns`](/api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)                                          | @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_route.md)              |
| [PUT `/columns/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)                           | @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)         |
| [PUT `/rows`](/api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)                                                | @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_route.md)                 |
| [PUT `/rows/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)                                 | @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)            |
| [DELETE `/cards`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)                                     | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)          |
| [DELETE `/cards/{cardId}/comments/{cardId}`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) |
| [DELETE `/cards/{cardId}/vote`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md)                 | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md)    |
| [DELETE `/columns`](/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)                                 | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)        |
| [DELETE `/links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)                                     | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)          |
| [DELETE `/rows`](/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)                                       | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)           |
