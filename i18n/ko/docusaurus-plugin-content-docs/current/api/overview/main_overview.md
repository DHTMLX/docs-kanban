---
sidebar_label: API 개요
title: API 개요
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 JavaScript Kanban의 API 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# API 개요

## Kanban 생성자

~~~js
new kanban.Kanban("#root", {
    // 구성 매개변수
});
~~~

**매개변수**:

- HTML 컨테이너 (HTML 컨테이너의 ID)
- 구성 매개변수 객체 ([여기서 확인](#kanban-properties))

## Toolbar 생성자

~~~js
new kanban.Toolbar("#toolbar", {
    // 구성 매개변수
});
~~~

**매개변수**:

- HTML 컨테이너 (HTML 컨테이너의 ID)
- 구성 매개변수 객체 ([여기서 확인](#toolbar-properties))

## Kanban 메서드

| 이름                                                       | 설명                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| [](api/methods/js_kanban_addcard_method.md)                 | @getshort(api/methods/js_kanban_addcard_method.md)       |
| [](api/methods/js_kanban_addcolumn_method.md)               | @getshort(api/methods/js_kanban_addcolumn_method.md)     |
| [](api/methods/js_kanban_addcomment_method.md)              | @getshort(api/methods/js_kanban_addcomment_method.md)    |
| [](api/methods/js_kanban_addlink_method.md)                 | @getshort(api/methods/js_kanban_addlink_method.md)       |
| [](api/methods/js_kanban_addrow_method.md)                  | @getshort(api/methods/js_kanban_addrow_method.md)        |
| [](api/methods/js_kanban_deletecard_method.md)              | @getshort(api/methods/js_kanban_deletecard_method.md)    |
| [](api/methods/js_kanban_deletecolumn_method.md)            | @getshort(api/methods/js_kanban_deletecolumn_method.md)  |
| [](api/methods/js_kanban_deletecomment_method.md)           | @getshort(api/methods/js_kanban_deletecomment_method.md) |
| [](api/methods/js_kanban_deletelink_method.md)              | @getshort(api/methods/js_kanban_deletelink_method.md)    |
| [](api/methods/js_kanban_deleterow_method.md)               | @getshort(api/methods/js_kanban_deleterow_method.md)     |
| [](api/methods/js_kanban_destructor_method.md)              | @getshort(api/methods/js_kanban_destructor_method.md)    |
| [](api/methods/js_kanban_duplicatecard_method.md)           | @getshort(api/methods/js_kanban_duplicatecard_method.md) |
| [](api/methods/js_kanban_getareacards_method.md)            | @getshort(api/methods/js_kanban_getareacards_method.md)  |
| [](api/methods/js_kanban_getcard_method.md)                 | @getshort(api/methods/js_kanban_getcard_method.md)       |
| [](api/methods/js_kanban_getcolumncards_method.md)          | @getshort(api/methods/js_kanban_getcolumncards_method.md)|
| [](api/methods/js_kanban_getselection_method.md)            | @getshort(api/methods/js_kanban_getselection_method.md)  |
| [](api/methods/js_kanban_movecard_method.md)                | @getshort(api/methods/js_kanban_movecard_method.md)      |
| [](api/methods/js_kanban_movecolumn_method.md)              | @getshort(api/methods/js_kanban_movecolumn_method.md)    |
| [](api/methods/js_kanban_moverow_method.md)                 | @getshort(api/methods/js_kanban_moverow_method.md)       |
| [](api/methods/js_kanban_parse_method.md)                   | @getshort(api/methods/js_kanban_parse_method.md)         |
| [](api/methods/js_kanban_redo_method.md)                    | @getshort(api/methods/js_kanban_redo_method.md)          |
| [](api/methods/js_kanban_scroll_method.md)                  | @getshort(api/methods/js_kanban_scroll_method.md)        |
| [](api/methods/js_kanban_selectcard_method.md)              | @getshort(api/methods/js_kanban_selectcard_method.md)    |
| [](api/methods/js_kanban_serialize_method.md)               | @getshort(api/methods/js_kanban_serialize_method.md)     |
| [](api/methods/js_kanban_setconfig_method.md)               | @getshort(api/methods/js_kanban_setconfig_method.md)     |
| [](api/methods/js_kanban_setedit_method.md)                 | @getshort(api/methods/js_kanban_setedit_method.md)       |
| [](api/methods/js_kanban_setlocale_method.md)               | @getshort(api/methods/js_kanban_setlocale_method.md)     |
| [](api/methods/js_kanban_setsearch_method.md)               | @getshort(api/methods/js_kanban_setsearch_method.md)     |
| [](api/methods/js_kanban_setsort_method.md)                 | @getshort(api/methods/js_kanban_setsort_method.md)       |
| [](api/methods/js_kanban_undo_method.md)                    | @getshort(api/methods/js_kanban_undo_method.md)          |
| [](api/methods/js_kanban_unselectcard_method.md)            | @getshort(api/methods/js_kanban_unselectcard_method.md)  |
| [](api/methods/js_kanban_updatecard_method.md)              | @getshort(api/methods/js_kanban_updatecard_method.md)    |
| [](api/methods/js_kanban_updatecolumn_method.md)            | @getshort(api/methods/js_kanban_updatecolumn_method.md)  |
| [](api/methods/js_kanban_updatecomment_method.md)           | @getshort(api/methods/js_kanban_updatecomment_method.md) |
| [](api/methods/js_kanban_updaterow_method.md)               | @getshort(api/methods/js_kanban_updaterow_method.md)     |

## Kanban 내부 API

### 이벤트 버스 메서드 {#event-bus-methods}

| 이름                                                       | 설명                                                       |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| [](api/internal/js_kanban_detach_method.md)                 | @getshort(api/internal/js_kanban_detach_method.md)          |
| [](api/internal/js_kanban_exec_method.md)                   | @getshort(api/internal/js_kanban_exec_method.md)            |
| [](api/internal/js_kanban_intercept_method.md)              | @getshort(api/internal/js_kanban_intercept_method.md)       |
| [](api/internal/js_kanban_on_method.md)                     | @getshort(api/internal/js_kanban_on_method.md)              |
| [](api/internal/js_kanban_setnext_method.md)                | @getshort(api/internal/js_kanban_setnext_method.md)         |

### 내보내기 메서드

| 이름                                                      | 설명                                                      |
| --------------------------------------------------------- | --------------------------------------------------------- |
| [](api/internal/js_kanban_json_method.md)                  | @getshort(api/internal/js_kanban_json_method.md)           |

### 상태 메서드

| 이름                                                       | 설명                                                        |
| ---------------------------------------------------------- | ----------------------------------------------------------- |
| [](api/internal/js_kanban_getreactivestate_method.md)       | @getshort(api/internal/js_kanban_getreactivestate_method.md) |
| [](api/internal/js_kanban_getstate_method.md)               | @getshort(api/internal/js_kanban_getstate_method.md)         |
| [](api/internal/js_kanban_getstores_method.md)              | @getshort(api/internal/js_kanban_getstores_method.md)        |

## Kanban 이벤트 {#kanban-events}

| 이름                                                       | 설명                                                      |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| [](api/events/js_kanban_addcard_event.md)                   | @getshort(api/events/js_kanban_addcard_event.md)            |
| [](api/events/js_kanban_addcolumn_event.md)                 | @getshort(api/events/js_kanban_addcolumn_event.md)          |
| [](api/events/js_kanban_addcomment_event.md)                | @getshort(api/events/js_kanban_addcomment_event.md)         |
| [](api/events/js_kanban_addlink_event.md)                   | @getshort(api/events/js_kanban_addlink_event.md)            |
| [](api/events/js_kanban_addrow_event.md)                    | @getshort(api/events/js_kanban_addrow_event.md)             |
| [](api/events/js_kanban_addvote_event.md)                   | @getshort(api/events/js_kanban_addvote_event.md)            |
| [](api/events/js_kanban_deletecard_event.md)                | @getshort(api/events/js_kanban_deletecard_event.md)         |
| [](api/events/js_kanban_deletecolumn_event.md)              | @getshort(api/events/js_kanban_deletecolumn_event.md)       |
| [](api/events/js_kanban_deletecomment_event.md)             | @getshort(api/events/js_kanban_deletecomment_event.md)      |
| [](api/events/js_kanban_deletelink_event.md)                | @getshort(api/events/js_kanban_deletelink_event.md)         |
| [](api/events/js_kanban_deleterow_event.md)                 | @getshort(api/events/js_kanban_deleterow_event.md)          |
| [](api/events/js_kanban_deletevote_event.md)                | @getshort(api/events/js_kanban_deletevote_event.md)         |
| [](api/events/js_kanban_dragcard_event.md)                  | @getshort(api/events/js_kanban_dragcard_event.md)           |
| [](api/events/js_kanban_duplicatecard_event.md)             | @getshort(api/events/js_kanban_duplicatecard_event.md)      |
| [](api/events/js_kanban_enddragcard_event.md)               | @getshort(api/events/js_kanban_enddragcard_event.md)        |
| [](api/events/js_kanban_movecard_event.md)                  | @getshort(api/events/js_kanban_movecard_event.md)           |
| [](api/events/js_kanban_movecolumn_event.md)                | @getshort(api/events/js_kanban_movecolumn_event.md)         |
| [](api/events/js_kanban_moverow_event.md)                   | @getshort(api/events/js_kanban_moverow_event.md)            |
| [](api/events/js_kanban_redo_event.md)                      | @getshort(api/events/js_kanban_redo_event.md)               |
| [](api/events/js_kanban_scroll_event.md)                    | @getshort(api/events/js_kanban_scroll_event.md)             |
| [](api/events/js_kanban_selectcard_event.md)                | @getshort(api/events/js_kanban_selectcard_event.md)         |
| [](api/events/js_kanban_setedit_event.md)                   | @getshort(api/events/js_kanban_setedit_event.md)            |
| [](api/events/js_kanban_setsearch_event.md)                 | @getshort(api/events/js_kanban_setsearch_event.md)          |
| [](api/events/js_kanban_setsort_event.md)                   | @getshort(api/events/js_kanban_setsort_event.md)            |
| [](api/events/js_kanban_startdragcard_event.md)             | @getshort(api/events/js_kanban_startdragcard_event.md)      |
| [](api/events/js_kanban_undo_event.md)                      | @getshort(api/events/js_kanban_undo_event.md)               |
| [](api/events/js_kanban_unselectcard_event.md)              | @getshort(api/events/js_kanban_unselectcard_event.md)       |
| [](api/events/js_kanban_updatecard_event.md)                | @getshort(api/events/js_kanban_updatecard_event.md)         |
| [](api/events/js_kanban_updatecolumn_event.md)              | @getshort(api/events/js_kanban_updatecolumn_event.md)       |
| [](api/events/js_kanban_updatecomment_event.md)             | @getshort(api/events/js_kanban_updatecomment_event.md)      |
| [](api/events/js_kanban_updaterow_event.md)                 | @getshort(api/events/js_kanban_updaterow_event.md)          |

## Kanban 속성 {#kanban-properties}

| 이름                                                       | 설명                                                    |
| :--------------------------------------------------------- | :------------------------------------------------------- |
| [](api/config/js_kanban_cardheight_config.md)               | @getshort(api/config/js_kanban_cardheight_config.md)      |
| [](api/config/js_kanban_cards_config.md)                    | @getshort(api/config/js_kanban_cards_config.md)           |
| [](api/config/js_kanban_cardshape_config.md)                | @getshort(api/config/js_kanban_cardshape_config.md)       |
| [](api/config/js_kanban_cardtemplate_config.md)             | @getshort(api/config/js_kanban_cardtemplate_config.md)    |
| [](api/config/js_kanban_columnkey_config.md)                | @getshort(api/config/js_kanban_columnkey_config.md)       |
| [](api/config/js_kanban_columns_config.md)                  | @getshort(api/config/js_kanban_columns_config.md)         |
| [](api/config/js_kanban_columnshape_config.md)              | @getshort(api/config/js_kanban_columnshape_config.md)     |
| [](api/config/js_kanban_currentuser_config.md)              | @getshort(api/config/js_kanban_currentuser_config.md)     |
| [](api/config/js_kanban_editor_config.md)                   | @getshort(api/config/js_kanban_editor_config.md)          |
| [](api/config/js_kanban_editorshape_config.md)              | @getshort(api/config/js_kanban_editorshape_config.md)     |
| [](api/config/js_kanban_history_config.md)                  | @getshort(api/config/js_kanban_history_config.md)         |
| [](api/config/js_kanban_links_config.md)                    | @getshort(api/config/js_kanban_links_config.md)           |
| [](api/config/js_kanban_locale_config.md)                   | @getshort(api/config/js_kanban_locale_config.md)          |
| [](api/config/js_kanban_readonly_config.md)                 | @getshort(api/config/js_kanban_readonly_config.md)        |
| [](api/config/js_kanban_rendertype_config.md)               | @getshort(api/config/js_kanban_rendertype_config.md)      |
| [](api/config/js_kanban_rowkey_config.md)                   | @getshort(api/config/js_kanban_rowkey_config.md)          |
| [](api/config/js_kanban_rows_config.md)                     | @getshort(api/config/js_kanban_rows_config.md)            |
| [](api/config/js_kanban_rowshape_config.md)                 | @getshort(api/config/js_kanban_rowshape_config.md)        |
| [](api/config/js_kanban_scrolltype_config.md)               | @getshort(api/config/js_kanban_scrolltype_config.md)      |

## Toolbar 메서드

| 이름                                                       | 설명                                                    |
| :--------------------------------------------------------- | :------------------------------------------------------- |
| [](api/methods/toolbar_destructor_method.md)                | @getshort(api/methods/toolbar_destructor_method.md)      |
| [](api/methods/toolbar_setconfig_method.md)                 | @getshort(api/methods/toolbar_setconfig_method.md)       |
| [](api/methods/toolbar_setlocale_method.md)                 | @getshort(api/methods/toolbar_setlocale_method.md)       |

## Toolbar 속성 {#toolbar-properties}

| 이름                                                       | 설명                                                    |
| :--------------------------------------------------------- | :------------------------------------------------------- |
| [](api/config/toolbar_api_config.md)                        | @getshort(api/config/toolbar_api_config.md)              |
| [](api/config/toolbar_items_config.md)                      | @getshort(api/config/toolbar_items_config.md)            |
| [](api/config/toolbar_locale_config.md)                     | @getshort(api/config/toolbar_locale_config.md)           |

## 공통 설정

| 이름                                                       | 설명                                                    |
| :--------------------------------------------------------- | :------------------------------------------------------- |
| [](api/common/js_kanban_meta_parameter.md)                  | @getshort(api/common/js_kanban_meta_parameter.md)        |

## RestDataProvider API

### RestDataProvider 메서드

| 이름                                                        | 설명                                                       |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| [](api/provider/rest_methods/js_kanban_getcards_method.md)   | @getshort(api/provider/rest_methods/js_kanban_getcards_method.md)   |
| [](api/provider/rest_methods/js_kanban_getcolumns_method.md) | @getshort(api/provider/rest_methods/js_kanban_getcolumns_method.md) |
| [](api/provider/rest_methods/js_kanban_getlinks_method.md)   | @getshort(api/provider/rest_methods/js_kanban_getlinks_method.md)   |
| [](api/provider/rest_methods/js_kanban_getrows_method.md)    | @getshort(api/provider/rest_methods/js_kanban_getrows_method.md)    |
| [](api/provider/rest_methods/js_kanban_getusers_method.md)   | @getshort(api/provider/rest_methods/js_kanban_getusers_method.md)   |
| [](api/provider/rest_methods/js_kanban_send_method.md)       | @getshort(api/provider/rest_methods/js_kanban_send_method.md)       |

### RestDataProvider 라우트

| 이름                                                        | 설명                                                       |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| [GET `/cards`](api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md)                    | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md)                    |
| [GET `/columns`](api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)                | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)                  |
| [GET `/links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)                    | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)                    |
| [GET `/rows`](api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)                      | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)                     |
| [GET `/users`](api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)                    | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)                    |
| [GET `/uploads`](api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)                | @getshort(api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)                  |
| [POST `/cards`](api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)                  | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)                  |
| [POST `/cards/{cardId}/comments`](api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md) | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md)        |
| [POST `/cards/{cardId}/vote`](api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md) | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md)            |
| [POST `/columns`](api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)              | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)                |
| [POST `/links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)                  | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)                  |
| [POST `/rows`](api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)                    | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)                  |
| [POST `/uploads`](api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)              | @getshort(api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)                |
| [PUT `/cards`](api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)                     | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)                   |
| [PUT `/cards/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)      | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)              |
| [PUT `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md) | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md)          |
| [PUT `/columns`](api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)                 | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)                |
| [PUT `/columns/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)  | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)            |
| [PUT `/rows`](api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)                       | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)                   |
| [PUT `/rows/{id}/move`](api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)        | @getshort(api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)              |
| [DELETE `/cards`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)            | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)            |
| [DELETE `/cards/{cardId}/comments/{cardId}`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md)   |
| [DELETE `/cards/{cardId}/vote`](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md) | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md)      |
| [DELETE `/columns`](api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)        | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)          |
| [DELETE `/links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)            | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)            |
| [DELETE `/rows`](api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)              | @getshort(api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)             |