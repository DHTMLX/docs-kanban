---
sidebar_label: Обзор API
title: Обзор API
description: Вы можете ознакомиться с обзором API JavaScript Kanban в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Обзор API

## Конструктор Kanban

~~~js
new kanban.Kanban("#root", {
    // параметры конфигурации
});
~~~

**Параметры**:

- HTML контейнер (ID HTML контейнера)
- объект параметров конфигурации ([см. здесь](#свойства-kanban))

## Конструктор Toolbar

~~~js
new kanban.Toolbar("#toolbar", {
    // параметры конфигурации
});
~~~

**Параметры**:

- HTML контейнер (ID HTML контейнера)
- объект параметров конфигурации ([см. здесь](#свойства-toolbar))

## Методы Kanban

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [](../methods/js_kanban_addcard_method.md)               | @getshort(../methods/js_kanban_addcard_method.md)     |
| [](../methods/js_kanban_addcolumn_method.md)             | @getshort(../methods/js_kanban_addcolumn_method.md)   |
| [](../methods/js_kanban_addcomment_method.md)            | @getshort(../methods/js_kanban_addcomment_method.md)  |
| [](../methods/js_kanban_addlink_method.md)               | @getshort(../methods/js_kanban_addlink_method.md)     |
| [](../methods/js_kanban_addrow_method.md)                | @getshort(../methods/js_kanban_addrow_method.md)      |
| [](../methods/js_kanban_deletecard_method.md)            | @getshort(../methods/js_kanban_deletecard_method.md)  |
| [](../methods/js_kanban_deletecolumn_method.md)          | @getshort(../methods/js_kanban_deletecolumn_method.md)|
| [](../methods/js_kanban_deletecomment_method.md)         | @getshort(../methods/js_kanban_deletecomment_method.md)|
| [](../methods/js_kanban_deletelink_method.md)            | @getshort(../methods/js_kanban_deletelink_method.md)  |
| [](../methods/js_kanban_deleterow_method.md)             | @getshort(../methods/js_kanban_deleterow_method.md)   |
| [](../methods/js_kanban_destructor_method.md)            | @getshort(../methods/js_kanban_destructor_method.md)  |
| [](../methods/js_kanban_duplicatecard_method.md)         | @getshort(../methods/js_kanban_duplicatecard_method.md)|
| [](../methods/js_kanban_getareacards_method.md)          | @getshort(../methods/js_kanban_getareacards_method.md)|
| [](../methods/js_kanban_getcard_method.md)               | @getshort(../methods/js_kanban_getcard_method.md)     |
| [](../methods/js_kanban_getcolumncards_method.md)        | @getshort(../methods/js_kanban_getcolumncards_method.md)|
| [](../methods/js_kanban_getselection_method.md)          | @getshort(../methods/js_kanban_getselection_method.md)|
| [](../methods/js_kanban_movecard_method.md)              | @getshort(../methods/js_kanban_movecard_method.md)    |
| [](../methods/js_kanban_movecolumn_method.md)            | @getshort(../methods/js_kanban_movecolumn_method.md)  |
| [](../methods/js_kanban_moverow_method.md)               | @getshort(../methods/js_kanban_moverow_method.md)     |
| [](../methods/js_kanban_parse_method.md)                 | @getshort(../methods/js_kanban_parse_method.md)       |
| [](../methods/js_kanban_redo_method.md)                  | @getshort(../methods/js_kanban_redo_method.md)        |
| [](../methods/js_kanban_scroll_method.md)                | @getshort(../methods/js_kanban_scroll_method.md)      |
| [](../methods/js_kanban_selectcard_method.md)            | @getshort(../methods/js_kanban_selectcard_method.md)  |
| [](../methods/js_kanban_serialize_method.md)             | @getshort(../methods/js_kanban_serialize_method.md)   |
| [](../methods/js_kanban_setconfig_method.md)             | @getshort(../methods/js_kanban_setconfig_method.md)   |
| [](../methods/js_kanban_setedit_method.md)               | @getshort(../methods/js_kanban_setedit_method.md)     |
| [](../methods/js_kanban_setlocale_method.md)             | @getshort(../methods/js_kanban_setlocale_method.md)   |
| [](../methods/js_kanban_setsearch_method.md)             | @getshort(../methods/js_kanban_setsearch_method.md)   |
| [](../methods/js_kanban_setsort_method.md)               | @getshort(../methods/js_kanban_setsort_method.md)     |
| [](../methods/js_kanban_undo_method.md)                  | @getshort(../methods/js_kanban_undo_method.md)        |
| [](../methods/js_kanban_unselectcard_method.md)          | @getshort(../methods/js_kanban_unselectcard_method.md)|
| [](../methods/js_kanban_updatecard_method.md)            | @getshort(../methods/js_kanban_updatecard_method.md)  |
| [](../methods/js_kanban_updatecolumn_method.md)          | @getshort(../methods/js_kanban_updatecolumn_method.md)|
| [](../methods/js_kanban_updatecomment_method.md)         | @getshort(../methods/js_kanban_updatecomment_method.md)|
| [](../methods/js_kanban_updaterow_method.md)             | @getshort(../methods/js_kanban_updaterow_method.md)   |

## Внутренний API Kanban

### Методы Event Bus

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [](../internal/js_kanban_detach_method.md)                | @getshort(../internal/js_kanban_detach_method.md)     |
| [](../internal/js_kanban_exec_method.md)                  | @getshort(../internal/js_kanban_exec_method.md)       |
| [](../internal/js_kanban_intercept_method.md)             | @getshort(../internal/js_kanban_intercept_method.md)  |
| [](../internal/js_kanban_on_method.md)                    | @getshort(../internal/js_kanban_on_method.md)         |
| [](../internal/js_kanban_setnext_method.md)               | @getshort(../internal/js_kanban_setnext_method.md)    |

### Методы экспорта

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [](../internal/js_kanban_json_method.md)                 | @getshort(../internal/js_kanban_json_method.md)       |

### Методы состояния

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [](../internal/js_kanban_getreactivestate_method.md)      | @getshort(../internal/js_kanban_getreactivestate_method.md) |
| [](../internal/js_kanban_getstate_method.md)              | @getshort(../internal/js_kanban_getstate_method.md)  |
| [](../internal/js_kanban_getstores_method.md)             | @getshort(../internal/js_kanban_getstores_method.md) |

## События Kanban

| Название                                                  | Описание                                               |
| :--------------------------------------------------------| :-----------------------------------------------------|
| [](../events/js_kanban_addcard_event.md)                  | @getshort(../events/js_kanban_addcard_event.md)       |
| [](../events/js_kanban_addcolumn_event.md)                | @getshort(../events/js_kanban_addcolumn_event.md)     |
| [](../events/js_kanban_addcomment_event.md)               | @getshort(../events/js_kanban_addcomment_event.md)    |
| [](../events/js_kanban_addlink_event.md)                  | @getshort(../events/js_kanban_addlink_event.md)       |
| [](../events/js_kanban_addrow_event.md)                   | @getshort(../events/js_kanban_addrow_event.md)        |
| [](../events/js_kanban_addvote_event.md)                  | @getshort(../events/js_kanban_addvote_event.md)       |
| [](../events/js_kanban_deletecard_event.md)               | @getshort(../events/js_kanban_deletecard_event.md)    |
| [](../events/js_kanban_deletecolumn_event.md)             | @getshort(../events/js_kanban_deletecolumn_event.md)  |
| [](../events/js_kanban_deletecomment_event.md)            | @getshort(../events/js_kanban_deletecomment_event.md) |
| [](../events/js_kanban_deletelink_event.md)               | @getshort(../events/js_kanban_deletelink_event.md)    |
| [](../events/js_kanban_deleterow_event.md)                | @getshort(../events/js_kanban_deleterow_event.md)     |
| [](../events/js_kanban_deletevote_event.md)               | @getshort(../events/js_kanban_deletevote_event.md)    |
| [](../events/js_kanban_dragcard_event.md)                 | @getshort(../events/js_kanban_dragcard_event.md)      |
| [](../events/js_kanban_duplicatecard_event.md)            | @getshort(../events/js_kanban_duplicatecard_event.md) |
| [](../events/js_kanban_enddragcard_event.md)              | @getshort(../events/js_kanban_enddragcard_event.md)   |
| [](../events/js_kanban_movecard_event.md)                 | @getshort(../events/js_kanban_movecard_event.md)      |
| [](../events/js_kanban_movecolumn_event.md)               | @getshort(../events/js_kanban_movecolumn_event.md)    |
| [](../events/js_kanban_moverow_event.md)                  | @getshort(../events/js_kanban_moverow_event.md)       |
| [](../events/js_kanban_redo_event.md)                     | @getshort(../events/js_kanban_redo_event.md)          |
| [](../events/js_kanban_scroll_event.md)                   | @getshort(../events/js_kanban_scroll_event.md)        |
| [](../events/js_kanban_selectcard_event.md)               | @getshort(../events/js_kanban_selectcard_event.md)    |
| [](../events/js_kanban_setedit_event.md)                  | @getshort(../events/js_kanban_setedit_event.md)       |
| [](../events/js_kanban_setsearch_event.md)                | @getshort(../events/js_kanban_setsearch_event.md)     |
| [](../events/js_kanban_setsort_event.md)                  | @getshort(../events/js_kanban_setsort_event.md)       |
| [](../events/js_kanban_startdragcard_event.md)            | @getshort(../events/js_kanban_startdragcard_event.md) |
| [](../events/js_kanban_undo_event.md)                     | @getshort(../events/js_kanban_undo_event.md)          |
| [](../events/js_kanban_unselectcard_event.md)             | @getshort(../events/js_kanban_unselectcard_event.md)  |
| [](../events/js_kanban_updatecard_event.md)               | @getshort(../events/js_kanban_updatecard_event.md)    |
| [](../events/js_kanban_updatecolumn_event.md)             | @getshort(../events/js_kanban_updatecolumn_event.md)  |
| [](../events/js_kanban_updatecomment_event.md)            | @getshort(../events/js_kanban_updatecomment_event.md) |
| [](../events/js_kanban_updaterow_event.md)                | @getshort(../events/js_kanban_updaterow_event.md)     |

## Свойства Kanban

| Название                                                  | Описание                                               |
| :--------------------------------------------------------| :-----------------------------------------------------|
| [](../config/js_kanban_cardheight_config.md)              | @getshort(../config/js_kanban_cardheight_config.md)   |
| [](../config/js_kanban_cards_config.md)                   | @getshort(../config/js_kanban_cards_config.md)        |
| [](../config/js_kanban_cardshape_config.md)               | @getshort(../config/js_kanban_cardshape_config.md)    |
| [](../config/js_kanban_cardtemplate_config.md)            | @getshort(../config/js_kanban_cardtemplate_config.md) |
| [](../config/js_kanban_columnkey_config.md)               | @getshort(../config/js_kanban_columnkey_config.md)    |
| [](../config/js_kanban_columns_config.md)                 | @getshort(../config/js_kanban_columns_config.md)      |
| [](../config/js_kanban_columnshape_config.md)             | @getshort(../config/js_kanban_columnshape_config.md)  |
| [](../config/js_kanban_currentuser_config.md)             | @getshort(../config/js_kanban_currentuser_config.md)  |
| [](../config/js_kanban_editor_config.md)                  | @getshort(../config/js_kanban_editor_config.md)       |
| [](../config/js_kanban_editorshape_config.md)             | @getshort(../config/js_kanban_editorshape_config.md)  |
| [](../config/js_kanban_history_config.md)                 | @getshort(../config/js_kanban_history_config.md)      |
| [](../config/js_kanban_links_config.md)                   | @getshort(../config/js_kanban_links_config.md)        |
| [](../config/js_kanban_locale_config.md)                  | @getshort(../config/js_kanban_locale_config.md)       |
| [](../config/js_kanban_readonly_config.md)                | @getshort(../config/js_kanban_readonly_config.md)     |
| [](../config/js_kanban_rendertype_config.md)              | @getshort(../config/js_kanban_rendertype_config.md)   |
| [](../config/js_kanban_rowkey_config.md)                  | @getshort(../config/js_kanban_rowkey_config.md)       |
| [](../config/js_kanban_rows_config.md)                    | @getshort(../config/js_kanban_rows_config.md)         |
| [](../config/js_kanban_rowshape_config.md)                | @getshort(../config/js_kanban_rowshape_config.md)     |
| [](../config/js_kanban_scrolltype_config.md)              | @getshort(../config/js_kanban_scrolltype_config.md)   |

## Методы Toolbar

| Название                                                  | Описание                                               |
| :--------------------------------------------------------| :-----------------------------------------------------|
| [](../methods/toolbar_destructor_method.md)               | @getshort(../methods/toolbar_destructor_method.md)    |
| [](../methods/toolbar_setconfig_method.md)                | @getshort(../methods/toolbar_setconfig_method.md)     |
| [](../methods/toolbar_setlocale_method.md)                | @getshort(../methods/toolbar_setlocale_method.md)     |

## Свойства Toolbar

| Название                                                  | Описание                                               |
| :--------------------------------------------------------| :-----------------------------------------------------|
| [](../config/toolbar_api_config.md)                       | @getshort(../config/toolbar_api_config.md)             |
| [](../config/toolbar_items_config.md)                     | @getshort(../config/toolbar_items_config.md)           |
| [](../config/toolbar_locale_config.md)                    | @getshort(../config/toolbar_locale_config.md)          |

## Общие настройки

| Название                                                  | Описание                                               |
| :--------------------------------------------------------| :-----------------------------------------------------|
| [](../common/js_kanban_meta_parameter.md)                 | @getshort(../common/js_kanban_meta_parameter.md)       |

## API RestDataProvider

### Методы RestDataProvider

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [](../provider/rest_methods/js_kanban_getcards_method.md) | @getshort(../provider/rest_methods/js_kanban_getcards_method.md)   |
| [](../provider/rest_methods/js_kanban_getcolumns_method.md) | @getshort(../provider/rest_methods/js_kanban_getcolumns_method.md) |
| [](../provider/rest_methods/js_kanban_getlinks_method.md) | @getshort(../provider/rest_methods/js_kanban_getlinks_method.md)   |
| [](../provider/rest_methods/js_kanban_getrows_method.md)  | @getshort(../provider/rest_methods/js_kanban_getrows_method.md)    |
| [](../provider/rest_methods/js_kanban_getusers_method.md) | @getshort(../provider/rest_methods/js_kanban_getusers_method.md)   |
| [](../provider/rest_methods/js_kanban_send_method.md)     | @getshort(../provider/rest_methods/js_kanban_send_method.md)       |

### Маршруты RestDataProvider

| Название                                                  | Описание                                               |
| ---------------------------------------------------------| ------------------------------------------------------|
| [GET `/cards`](api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md)           | @getshort(../provider/rest_routes/get_routes/js_kanban_get_cards_route.md)         |
| [GET `/columns`](api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)       | @getshort(../provider/rest_routes/get_routes/js_kanban_get_columns_route.md)       |
| [GET `/links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)           | @getshort(../provider/rest_routes/get_routes/js_kanban_get_links_route.md)         |
| [GET `/rows`](api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)             | @getshort(../provider/rest_routes/get_routes/js_kanban_get_rows_route.md)          |
| [GET `/users`](api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)           | @getshort(../provider/rest_routes/get_routes/js_kanban_get_users_route.md)         |
| [GET `/uploads`](api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)       | @getshort(../provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)       |
| [POST `/cards`](api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)        | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_route.md)       |
| [POST `/cards/{cardId}/comments`](api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md) | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md) |
| [POST `/cards/{cardId}/vote`](api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md) | @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md) |
| [POST `/columns`](api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)    | @getshort(../provider/rest_routes/post_routes/js_kanban_post_columns_route.md)     |
| [POST `/links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)       | @getshort(../provider/rest_routes/post_routes/js_kanban_post_links_route.md)       |
| [POST `/rows`](api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)          | @getshort(../provider/rest_routes/post_routes/js_kanban_post_rows_route.md)        |
| [POST `/uploads`](api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)   | @getshort(../provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)     |
| [PUT `/cards`](api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)           | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_route.md)         |
| [PUT `/cards/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md) | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)   |
| [PUT `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md) | @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md) |
| [PUT `/columns`](api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)       | @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_route.md)       |
| [PUT `/columns/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md) | @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md) |
| [PUT `/rows`](api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)             | @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_route.md)          |
| [PUT `/rows/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md) | @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)     |
| [DELETE `/cards`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)  | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)    |
| [DELETE `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) |
| [DELETE `/cards/{cardId}/vote`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md) | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md) |
| [DELETE `/columns`](api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md) | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)  |
| [DELETE `/links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)  | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)    |
| [DELETE `/rows`](api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)    | @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)     |