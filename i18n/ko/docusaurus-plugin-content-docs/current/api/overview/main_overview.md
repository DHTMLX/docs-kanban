---
sidebar_label: API 개요
title: API 개요
description: DHTMLX JavaScript Kanban 라이브러리 문서에 포함된 JavaScript Kanban API의 일반 개요입니다. 개발자 가이드와 API 참조를 살펴보고, 코드 샘플과 라이브 데모를 실험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# API 개요

## Kanban 생성자

~~~js
new kanban.Kanban("#root", {
    // 구성 매개변수
});
~~~

**매개변수**:

- HTML 컨테이너 (컨테이너의 ID)
- 구성 매개변수를 포함하는 객체 ([자세한 내용](#kanban-속성))

## Toolbar 생성자

~~~js
new kanban.Toolbar("#toolbar", {
    // 구성 매개변수
});
~~~

**매개변수**:

- HTML 컨테이너 (컨테이너의 ID)
- 구성 설정을 포함하는 객체 ([자세한 내용](#toolbar-속성))

## Kanban 메서드

| 이름                                                      | 설명                                                |
| ----------------------------------------------------------| ---------------------------------------------------|
| [addCard()](../../methods/js_kanban_addcard_method/)               | @getshort(../methods/js_kanban_addcard_method.md)       |
| [addColumn()](../../methods/js_kanban_addcolumn_method/)             | @getshort(../methods/js_kanban_addcolumn_method.md)     |
| [addComment()](../../methods/js_kanban_addcomment_method/)            | @getshort(../methods/js_kanban_addcomment_method.md)    |
| [addLink()](../../methods/js_kanban_addlink_method/)               | @getshort(../methods/js_kanban_addlink_method.md)       |
| [addRow()](../../methods/js_kanban_addrow_method/)                | @getshort(../methods/js_kanban_addrow_method.md)        |
| [deleteCard()](../../methods/js_kanban_deletecard_method/)            | @getshort(../methods/js_kanban_deletecard_method.md)    |
| [deleteColumn()](../../methods/js_kanban_deletecolumn_method/)          | @getshort(../methods/js_kanban_deletecolumn_method.md)  |
| [deleteComment()](../../methods/js_kanban_deletecomment_method/)         | @getshort(../methods/js_kanban_deletecomment_method.md) |
| [deleteLink()](../../methods/js_kanban_deletelink_method/)            | @getshort(../methods/js_kanban_deletelink_method.md)    |
| [deleteRow()](../../methods/js_kanban_deleterow_method/)             | @getshort(../methods/js_kanban_deleterow_method.md)     |
| [destructor()](../../methods/js_kanban_destructor_method/)            | @getshort(../methods/js_kanban_destructor_method.md)    |
| [duplicateCard()](../../methods/js_kanban_duplicatecard_method/)         | @getshort(../methods/js_kanban_duplicatecard_method.md) |
| [getAreaCards()](../../methods/js_kanban_getareacards_method/)          | @getshort(../methods/js_kanban_getareacards_method.md)  |
| [getCard()](../../methods/js_kanban_getcard_method/)               | @getshort(../methods/js_kanban_getcard_method.md)       |
| [getSelection()](../../methods/js_kanban_getselection_method/)          | @getshort(../methods/js_kanban_getselection_method.md)  |
| [moveCard()](../../methods/js_kanban_movecard_method/)              | @getshort(../methods/js_kanban_movecard_method.md)      |
| [moveColumn()](../../methods/js_kanban_movecolumn_method/)            | @getshort(../methods/js_kanban_movecolumn_method.md)    |
| [moveRow()](../../methods/js_kanban_moverow_method/)               | @getshort(../methods/js_kanban_moverow_method.md)       |
| [parse()](../../methods/js_kanban_parse_method/)                 | @getshort(../methods/js_kanban_parse_method.md)         |
| [redo()](../../methods/js_kanban_redo_method/)                  | @getshort(../methods/js_kanban_redo_method.md)          |
| [scroll()](../../methods/js_kanban_scroll_method/)                | @getshort(../methods/js_kanban_scroll_method.md)        |
| [selectCard()](../../methods/js_kanban_selectcard_method/)            | @getshort(../methods/js_kanban_selectcard_method.md)    |
| [serialize()](../../methods/js_kanban_serialize_method/)             | @getshort(../methods/js_kanban_serialize_method.md)     |
| [setConfig()](../../methods/js_kanban_setconfig_method/)             | @getshort(../methods/js_kanban_setconfig_method.md)     |
| [setEdit()](../../methods/js_kanban_setedit_method/)               | @getshort(../methods/js_kanban_setedit_method.md)       |
| [setLocale()](../../methods/js_kanban_setlocale_method/)             | @getshort(../methods/js_kanban_setlocale_method.md)     |
| [setSearch()](../../methods/js_kanban_setsearch_method/)             | @getshort(../methods/js_kanban_setsearch_method.md)     |
| [setSort()](../../methods/js_kanban_setsort_method/)               | @getshort(../methods/js_kanban_setsort_method.md)       |
| [setTheme()](../../methods/js_kanban_settheme_method/)              | @getshort(../methods/js_kanban_settheme_method.md)      |
| [undo()](../../methods/js_kanban_undo_method/)                  | @getshort(../methods/js_kanban_undo_method.md)          |
| [unselectCard()](../../methods/js_kanban_unselectcard_method/)          | @getshort(../methods/js_kanban_unselectcard_method.md)  |
| [updateCard()](../../methods/js_kanban_updatecard_method/)            | @getshort(../methods/js_kanban_updatecard_method.md)    |
| [updateColumn()](../../methods/js_kanban_updatecolumn_method/)          | @getshort(../methods/js_kanban_updatecolumn_method.md)  |
| [updateComment()](../../methods/js_kanban_updatecomment_method/)         | @getshort(../methods/js_kanban_updatecomment_method.md) |
| [updateRow()](../../methods/js_kanban_updaterow_method/)             | @getshort(../methods/js_kanban_updaterow_method.md)     |

## Kanban 내부 API

### 이벤트 버스 메서드

| 이름                                                       | 설명                                                    |
| -----------------------------------------------------------| --------------------------------------------------------|
| [api.exec()](../../internal/js_kanban_exec_method/)                  | @getshort(../internal/js_kanban_exec_method.md)         |
| [api.intercept()](../../internal/js_kanban_intercept_method/)             | @getshort(../internal/js_kanban_intercept_method.md)    |
| [api.on()](../../internal/js_kanban_on_method/)                    | @getshort(../internal/js_kanban_on_method.md)           |
| [api.setNext()](../../internal/js_kanban_setnext_method/)               | @getshort(../internal/js_kanban_setnext_method.md)      |

### 내보내기 메서드

| 이름                                         | 설명                                                  |
| -------------------------------------------- | ----------------------------------------------------- |
| [export.json()](../../internal/js_kanban_json_method/)    | @getshort(../internal/js_kanban_json_method.md)       |

### 상태 메서드

| 이름                                                       | 설명                                                      |
| -----------------------------------------------------------| ---------------------------------------------------------- |
| [api.getReactiveState()](../../internal/js_kanban_getreactivestate_method/)      | @getshort(../internal/js_kanban_getreactivestate_method.md)  |
| [api.getState()](../../internal/js_kanban_getstate_method/)              | @getshort(../internal/js_kanban_getstate_method.md)         |
| [api.getStores()](../../internal/js_kanban_getstores_method/)             | @getshort(../internal/js_kanban_getstores_method.md)        |

## Kanban 이벤트

| 이름                                                      | 설명                                              |
| :-------------------------------------------------------- | :------------------------------------------------|
| [add-card](../../events/js_kanban_addcard_event/)                  | @getshort(../events/js_kanban_addcard_event.md)         |
| [add-column](../../events/js_kanban_addcolumn_event/)                | @getshort(../events/js_kanban_addcolumn_event.md)       |
| [add-comment](../../events/js_kanban_addcomment_event/)               | @getshort(../events/js_kanban_addcomment_event.md)      |
| [add-link](../../events/js_kanban_addlink_event/)                  | @getshort(../events/js_kanban_addlink_event.md)         |
| [add-row](../../events/js_kanban_addrow_event/)                   | @getshort(../events/js_kanban_addrow_event.md)          |
| [add-vote](../../events/js_kanban_addvote_event/)                  | @getshort(../events/js_kanban_addvote_event.md)         |
| [delete-card](../../events/js_kanban_deletecard_event/)               | @getshort(../events/js_kanban_deletecard_event.md)      |
| [delete-column](../../events/js_kanban_deletecolumn_event/)             | @getshort(../events/js_kanban_deletecolumn_event.md)    |
| [delete-comment](../../events/js_kanban_deletecomment_event/)            | @getshort(../events/js_kanban_deletecomment_event.md)   |
| [delete-link](../../events/js_kanban_deletelink_event/)               | @getshort(../events/js_kanban_deletelink_event.md)      |
| [delete-row](../../events/js_kanban_deleterow_event/)                | @getshort(../events/js_kanban_deleterow_event.md)       |
| [delete-vote](../../events/js_kanban_deletevote_event/)               | @getshort(../events/js_kanban_deletevote_event.md)      |
| [drag-card](../../events/js_kanban_dragcard_event/)                 | @getshort(../events/js_kanban_dragcard_event.md)        |
| [duplicate-card](../../events/js_kanban_duplicatecard_event/)            | @getshort(../events/js_kanban_duplicatecard_event.md)   |
| [end-drag-card](../../events/js_kanban_enddragcard_event/)              | @getshort(../events/js_kanban_enddragcard_event.md)     |
| [move-card](../../events/js_kanban_movecard_event/)                 | @getshort(../events/js_kanban_movecard_event.md)        |
| [move-column](../../events/js_kanban_movecolumn_event/)               | @getshort(../events/js_kanban_movecolumn_event.md)      |
| [move-row](../../events/js_kanban_moverow_event/)                  | @getshort(../events/js_kanban_moverow_event.md)         |
| [scroll](../../events/js_kanban_scroll_event/)                   | @getshort(../events/js_kanban_scroll_event.md)          |
| [select-card](../../events/js_kanban_selectcard_event/)               | @getshort(../events/js_kanban_selectcard_event.md)      |
| [set-edit](../../events/js_kanban_setedit_event/)                  | @getshort(../events/js_kanban_setedit_event.md)         |
| [set-search](../../events/js_kanban_setsearch_event/)                | @getshort(../events/js_kanban_setsearch_event.md)       |
| [set-sort](../../events/js_kanban_setsort_event/)                  | @getshort(../events/js_kanban_setsort_event.md)         |
| [start-drag-card](../../events/js_kanban_startdragcard_event/)            | @getshort(../events/js_kanban_startdragcard_event.md)   |
| [unselect-card](../../events/js_kanban_unselectcard_event/)             | @getshort(../events/js_kanban_unselectcard_event.md)    |
| [update-card](../../events/js_kanban_updatecard_event/)               | @getshort(../events/js_kanban_updatecard_event.md)      |
| [update-column](../../events/js_kanban_updatecolumn_event/)             | @getshort(../events/js_kanban_updatecolumn_event.md)    |
| [update-comment](../../events/js_kanban_updatecomment_event/)            | @getshort(../events/js_kanban_updatecomment_event.md)   |
| [update-row](../../events/js_kanban_updaterow_event/)                | @getshort(../events/js_kanban_updaterow_event.md)       |

## Kanban 속성

| 이름                                                      | 설명                                              |
| :-------------------------------------------------------- | :------------------------------------------------|
| [cardHeight](../../config/js_kanban_cardheight_config/)              | @getshort(../config/js_kanban_cardheight_config.md)     |
| [카드](../../config/js_kanban_cards_config/)                   | @getshort(../config/js_kanban_cards_config.md)          |
| [cardShape](../../config/js_kanban_cardshape_config/)               | @getshort(../config/js_kanban_cardshape_config.md)      |
| [cardTemplate](../../config/js_kanban_cardtemplate_config/)            | @getshort(../config/js_kanban_cardtemplate_config.md)   |
| [columnKey](../../config/js_kanban_columnkey_config/)               | @getshort(../config/js_kanban_columnkey_config.md)      |
| [columns](../../config/js_kanban_columns_config/)                 | @getshort(../config/js_kanban_columns_config.md)        |
| [columnShape](../../config/js_kanban_columnshape_config/)             | @getshort(../config/js_kanban_columnshape_config.md)    |
| [currentUser](../../config/js_kanban_currentuser_config/)             | @getshort(../config/js_kanban_currentuser_config.md)    |
| [editor](../../config/js_kanban_editor_config/)                  | @getshort(../config/js_kanban_editor_config.md)         |
| [~~editorAutoSave~~](/api/config/js_kanban_editorautosave_config.md) | 사용 중단! ~~선택 사항. 자동 저장 모드를 활성화/비활성화합니다~~ |
| [editorShape](../../config/js_kanban_editorshape_config/)             | @getshort(../config/js_kanban_editorshape_config.md)    |
| [history](../../config/js_kanban_history_config/)                 | @getshort(../config/js_kanban_history_config.md)        |
| [links](../../config/js_kanban_links_config/)                   | @getshort(../config/js_kanban_links_config.md)          |
| [locale](../../config/js_kanban_locale_config/)                  | @getshort(../config/js_kanban_locale_config.md)         |
| [readonly](../../config/js_kanban_readonly_config/)                | @getshort(../config/js_kanban_readonly_config.md)       |
| [renderType](../../config/js_kanban_rendertype_config/)              | @getshort(../config/js_kanban_rendertype_config.md)     |
| [rowKey](../../config/js_kanban_rowkey_config/)                  | @getshort(../config/js_kanban_rowkey_config.md)         |
| [rows](../../config/js_kanban_rows_config/)                    | @getshort(../config/js_kanban_rows_config.md)           |
| [rowShape](../../config/js_kanban_rowshape_config/)                | @getshort(../config/js_kanban_rowshape_config.md)       |
| [scrollType](../../config/js_kanban_scrolltype_config/)              | @getshort(../config/js_kanban_scrolltype_config.md)     |
| [테마](../../config/js_kanban_theme_config/)                   | @getshort(../config/js_kanban_theme_config.md)          |

## Toolbar 메서드

| 이름                                                      | 설명                                              |
| :---------------------------------------------------------| :------------------------------------------------|
| [destructor()](../../methods/toolbar_destructor_method/)               | @getshort(../methods/toolbar_destructor_method.md)      |
| [setConfig()](../../methods/toolbar_setconfig_method/)                | @getshort(../methods/toolbar_setconfig_method.md)       |
| [setLocale()](../../methods/toolbar_setlocale_method/)                | @getshort(../methods/toolbar_setlocale_method.md)       |

## Toolbar 속성

| 이름                                                      | 설명                                              |
| :---------------------------------------------------------| :------------------------------------------------|
| [api](../../config/toolbar_api_config/)                       | @getshort(../config/toolbar_api_config.md)              |
| [items](../../config/toolbar_items_config/)                     | @getshort(../config/toolbar_items_config.md)            |
| [locale](../../config/toolbar_locale_config/)                    | @getshort(../config/toolbar_locale_config.md)           |
| [theme](../../config/toolbar_theme_config/)                     | @getshort(../config/toolbar_theme_config.md)            |

## 공통 설정

| 이름                                        | 설명                                              |
| :------------------------------------------ | :------------------------------------------------|
| [$meta](../../common/js_kanban_meta_parameter/)   | @getshort(../common/js_kanban_meta_parameter.md)  |

## RestDataProvider API

### RestDataProvider 메서드

| 이름                                                           | 설명                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------|
| [getCards()](../../provider/rest_methods/js_kanban_getcards_method/)     | @getshort(../provider/rest_methods/js_kanban_getcards_method.md)   |
| [getColumns()](../../provider/rest_methods/js_kanban_getcolumns_method/)   | @getshort(../provider/rest_methods/js_kanban_getcolumns_method.md) |
| [getLinks()](../../provider/rest_methods/js_kanban_getlinks_method/)     | @getshort(../provider/rest_methods/js_kanban_getlinks_method.md)   |
| [getRows()](../../provider/rest_methods/js_kanban_getrows_method/)      | @getshort(../provider/rest_methods/js_kanban_getrows_method.md)    |
| [getUsers()](../../provider/rest_methods/js_kanban_getusers_method/)     | @getshort(../provider/rest_methods/js_kanban_getusers_method.md)   |
| [send()](../../provider/rest_methods/js_kanban_send_method/)         | @getshort(../provider/rest_methods/js_kanban_send_method.md)       |

### RestDataProvider 경로

| 이름                                                        | 설명                                               |
| ----------------------------------------------------------- | --------------------------------------------------|
| [GET `/cards`](/api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md) | @getshort(../provider/rest_routes/get_routes/js_kanban_get_cards_route.md) |
| [GET `/columns`](/api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_columns_route.md) |
| [GET `/links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_links_route.md) |
| [GET `/rows`](/api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_rows_route.md) |
| [GET `/users`](/api/provider/rest_routes/get_routes/js_kanban_get_users_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_users_route.md) |
| [GET `/uploads`](/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)| @getshort(../provider/rest_routes/get_routes/js_kanban_get_uploads_route.md) |
| [POST `/cards`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_route.md) |
| [POST `/cards/{cardId}/comments`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_comments_route.md) |
| [POST `/cards/{cardId}/vote`](/api/provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_cards_votes_route.md) |
| [POST `/columns`](/api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_columns_route.md) |
| [POST `/links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_links_route.md) |
| [POST `/rows`](/api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_rows_route.md) |
| [POST `/uploads`](/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)| @getshort(../provider/rest_routes/post_routes/js_kanban_post_uploads_route.md) |
| [PUT `/cards`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_route.md) |
| [PUT `/cards/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md) |
| [PUT `/cards/{cardId}/comments/{cardId}`](/api/provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_cards_comments_route.md) |
| [PUT `/columns`](/api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_route.md) |
| [PUT `/columns/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md) |
| [PUT `/rows`](/api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_route.md) |
| [PUT `/rows/{id}/move`](/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)| @getshort(../provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md) |
| [DELETE `/cards`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md) |
| [DELETE `/cards/{cardId}/comments/{cardId}`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_comments_route.md) |
| [DELETE `/cards/{cardId}/vote`](/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_cards_votes_route.md) |
| [DELETE `/columns`](/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md) |
| [DELETE `/links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_links_route.md) |
| [DELETE `/rows`](/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)| @getshort(../provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md) |
