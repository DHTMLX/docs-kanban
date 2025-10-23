---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: DHTMLX JavaScript Kanban 라이브러리의 How-tos 페이지를 문서에서 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 체험해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# How-tos

이 페이지에서는 JavaScript Kanban을 초기화, 구성, 커스터마이즈 및 사용하는 방법에 대한 완벽한 레퍼런스를 제공합니다.

## 기본 원칙

이 섹션에서는 Kanban을 사용하는 기본 원칙을 확인할 수 있습니다.

| 주제                                         | 설명                                              |
| --------------------------------------------- | --------------------------------------------------|
| [](guides/initialization.md)                  | Kanban을 초기화하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [](guides/configuration.md)                   | Kanban을 구성하는 방법을 알아보세요                |
| [](guides/customization.md)                   | Kanban을 커스터마이즈하는 방법을 알아보세요        |
| [](guides/stylization.md)                     | Kanban을 스타일링하는 방법을 알아보세요            |
| [](guides/localization.md)                    | Kanban을 현지화하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API 레퍼런스

이 섹션에서는 Kanban API에 대한 관련 레퍼런스를 확인할 수 있습니다.

| 주제                                                 | 설명                                              |
| ----------------------------------------------------- | --------------------------------------------------|
| [Kanban events](api/overview/events_overview.md)      | Kanban 이벤트를 다루는 방법을 알아보세요           |
| [Kanban methods](api/overview/methods_overview.md)    | Kanban 메서드를 사용하는 방법을 알아보세요         |
| [Kanban properties](api/overview/properties_overview.md)| Kanban 속성을 사용하는 방법을 알아보세요         |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| Event Bus 메서드를 사용하는 방법을 알아보세요 |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| RestDataProvider 메서드를 사용하는 방법을 알아보세요|
| [State methods](api/overview/internal_state_overview.md)| State 메서드를 사용하는 방법을 알아보세요         |
| [Toolbar methods](api/overview/toolbar_methods_overview.md)| Toolbar 메서드를 사용하는 방법을 알아보세요    |
| [Toolbar properties](api/overview/toolbar_properties_overview.md)| Toolbar 속성을 사용하는 방법을 알아보세요 |

## 카드 작업 방법

이 섹션에서는 카드에 대한 작업 수행, 카드 데이터 관리 및 카드 설정 방법을 확인할 수 있습니다.

### 카드 작업 수행

| 주제                                                        | 설명                                   |
| ------------------------------------------------------------ | ---------------------------------------|
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | 새 카드를 추가하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | 카드를 삭제하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | 카드를 이동하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Scrolling to the desired cards](api/methods/js_kanban_scroll_method.md)| 원하는 카드로 Kanban을 스크롤하는 방법을 알아보세요|
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| 카드를 검색하는 방법을 알아보세요            |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| 카드를 선택하는 방법을 알아보세요           |
| [Sorting cards](api/methods/js_kanban_setsort_method.md)     | 카드를 정렬하는 방법을 알아보세요           |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| 카드 선택 해제 방법을 알아보세요         |
| [Adding links between cards](api/config/js_kanban_links_config.md)| 카드 간 링크를 추가하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### 카드 데이터 작업

| 주제                                                        | 설명                                         |
| ------------------------------------------------------------ | --------------------------------------------|
| [Getting card data](api/methods/js_kanban_getcard_method.md) | 카드 데이터를 가져오는 방법을 알아보세요     |
| [Getting cards state](api/internal/js_kanban_getstate_method.md) | 카드 상태를 가져오는 방법을 알아보세요    |
| [Getting cards reactive state](api/internal/js_kanban_getreactivestate_method.md) | 카드의 반응형 상태를 가져오는 방법을 알아보세요 |
| [Loading card data](api/config/js_kanban_cards_config.md)    | 초기 카드 데이터를 불러오는 방법을 알아보세요|
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | 카드 데이터를 파싱하는 방법을 알아보세요     |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| 카드 데이터를 직렬화하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| 카드 데이터를 업데이트하는 방법을 알아보세요 |

### 카드 설정

| 주제                                                        | 설명                                         |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | 새 카드 추가 가능/불가 설정 방법을 알아보세요|
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | 카드를 컬럼에 바인딩하는 방법을 알아보세요 |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | 카드를 행에 바인딩하는 방법을 알아보세요   |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| 카드의 외관을 설정하는 방법을 알아보세요|
| [Configuring a cards menu](api/config/js_kanban_cardshape_config.md)| 카드 컨텍스트 메뉴를 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| 템플릿을 사용하여 카드 외관을 커스터마이즈하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | 카드 드래그 앤 드롭 가능/불가 설정 방법을 알아보세요|
| [Editing cards](api/config/js_kanban_readonly_config.md)     | 카드 편집 가능/불가 설정 방법을 알아보세요     |
| [Lazy rendering](api/config/js_kanban_rendertype_config.md)| 많은 카드의 **lazy rendering**을 활성화/비활성화하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](api/config/js_kanban_columns_config.md)     | 컬럼 및 스윔레인별 카드 개수 제한 (**WIP 검증**) 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | 카드 선택 가능/불가 설정 방법을 알아보세요     |
| [Setting a fix height of cards](api/config/js_kanban_cardheight_config.md)| 카드의 고정 높이 설정 방법을 알아보세요   |
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| 카드 설정을 업데이트하는 방법을 알아보세요  |

## 카드 에디터 사용 방법

이 섹션에서는 카드 에디터를 사용하는 방법을 확인할 수 있습니다.

| 주제                                                        | 설명                                            |
| ------------------------------------------------------------ | -----------------------------------------------|
| [Autosaving mode](api/config/js_kanban_editorautosave_config.md)| 에디터 자동 저장 모드 활성화/비활성화 방법을 알아보세요 |
| [Configuring editor fields](guides/configuration.md#editor)| 에디터 필드 설정 방법을 알아보세요                 |
| [Configuring the editor](guides/configuration.md#configuring-the-editor)| 에디터 설정 방법을 알아보세요           |
| [Updating editor settings](api/methods/js_kanban_setconfig_method.md)| 에디터 설정을 업데이트하는 방법을 알아보세요 |

## 컬럼 작업 방법

이 섹션에서는 컬럼에 대한 작업 수행 및 컬럼 데이터 작업 방법을 확인할 수 있습니다.

### 컬럼 작업 수행

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | --------------------------------------------|
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | 새 컬럼을 추가하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](api/config/js_kanban_columnshape_config.md)| 컬럼 컨텍스트 메뉴를 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| 컬럼을 삭제하는 방법을 알아보세요             |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | 컬럼을 이동하는 방법을 알아보세요             |
| [Scrolling to the desired columns](api/methods/js_kanban_scroll_method.md)| 원하는 컬럼으로 Kanban을 스크롤하는 방법을 알아보세요 |
| [Separate scrolling for columns](api/config/js_kanban_scrolltype_config.md)| 각 컬럼별로 별도의 스크롤을 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### 컬럼 데이터 작업

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | --------------------------------------------|
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| 컬럼의 카드 데이터를 가져오는 방법을 알아보세요 |
| [Getting columns state](api/internal/js_kanban_getstate_method.md) | 컬럼 상태를 가져오는 방법을 알아보세요      |
| [Getting columns reactive state](api/internal/js_kanban_getreactivestate_method.md) | 컬럼의 반응형 상태를 가져오는 방법을 알아보세요 |
| [Loading column data](api/config/js_kanban_columns_config.md)    | 초기 컬럼 데이터를 불러오는 방법을 알아보세요|
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | 컬럼 데이터를 파싱하는 방법을 알아보세요     |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| 컬럼 데이터를 직렬화하는 방법을 알아보세요|
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| 컬럼 데이터를 업데이트하는 방법을 알아보세요 |

## 행(스윔레인) 작업 방법

이 섹션에서는 행(스윔레인)에 대한 작업 수행 및 행 데이터 작업 방법을 확인할 수 있습니다.

### 행(스윔레인) 작업 수행

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | --------------------------------------------|
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | 새 행(스윔레인)을 추가하는 방법을 알아보세요 |
| [Configuring a rows menu](api/config/js_kanban_rowshape_config.md)| 행(스윔레인) 컨텍스트 메뉴를 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | 행(스윔레인)을 삭제하는 방법을 알아보세요    |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | 행(스윔레인)을 이동하는 방법을 알아보세요    |
| [Scrolling to the desired row](api/methods/js_kanban_scroll_method.md)| 원하는 행(스윔레인)으로 Kanban을 스크롤하는 방법을 알아보세요|

### 행(스윔레인) 데이터 작업

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | --------------------------------------------|
| [Getting card data of the column and row](api/methods/js_kanban_getareacards_method.md)| 컬럼과 행의 카드 데이터를 가져오는 방법을 알아보세요 |
| [Getting rows state](api/internal/js_kanban_getstate_method.md) | 행 상태를 가져오는 방법을 알아보세요         |
| [Getting rows reactive state](api/internal/js_kanban_getreactivestate_method.md) | 행의 반응형 상태를 가져오는 방법을 알아보세요 |
| [Loading row data](api/config/js_kanban_rows_config.md)         | 초기 행 데이터를 불러오는 방법을 알아보세요  |
| [Parsing row data](api/methods/js_kanban_parse_method.md)       | 행 데이터를 파싱하는 방법을 알아보세요       |
| [Serializing row data](api/methods/js_kanban_serialize_method.md)| 행 데이터를 직렬화하는 방법을 알아보세요   |
| [Updating row data](api/methods/js_kanban_updaterow_method.md)  | 행 데이터를 업데이트하는 방법을 알아보세요   |

## 이벤트 작업 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | -------------------------------------------|
| [Executing events](api/internal/js_kanban_exec_method.md)   | 내부 이벤트를 실행하는 방법을 알아보세요    |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| 내부 이벤트를 가로채는 방법을 알아보세요|
| [List of inner events](api/overview/events_overview.md)     | Kanban 내부 이벤트 목록을 확인하세요        |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| 내부 이벤트를 Event Bus 순서에 추가하는 방법을 알아보세요 |
| [Subscribing on events](api/internal/js_kanban_on_method.md)| 내부 이벤트를 구독하는 방법을 알아보세요    |

## Kanban REST API 사용 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | -------------------------------------------|
| [Loading server data for cards](api/provider/rest_methods/js_kanban_getcards_method.md)| 카드의 서버 데이터를 불러오는 방법을 알아보세요 |
| [Loading server data for columns](api/provider/rest_methods/js_kanban_getcolumns_method.md)| 컬럼의 서버 데이터를 불러오는 방법을 알아보세요 |
| [Loading server data for rows](api/provider/rest_methods/js_kanban_getrows_method.md)| 행의 서버 데이터를 불러오는 방법을 알아보세요 |
| [Working with server](guides/working_with_server.md)        | REST API를 통해 서버와 연동하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Kanban 상태 작업 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | -------------------------------------------|
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| StateStore 및 DataStore 객체를 가져오는 방법을 알아보세요 |
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| StateStore 속성 객체를 가져오는 방법을 알아보세요 |
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| StateStore의 반응형 속성 객체를 가져오는 방법을 알아보세요 |

## Toolbar 작업 방법

| 주제                                                       | 설명                                           |
| ----------------------------------------------------------- | ----------------------------------------------|
| [Configuring a searchbar on Toolbar](api/config/toolbar_items_config.md) | Toolbar에 검색바를 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](api/config/toolbar_items_config.md) | Toolbar에 정렬 컨트롤을 설정하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| Toolbar 컨트롤을 구성, 커스터마이즈 및 순서 변경하는 방법을 알아보세요 ([예제](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Including Kanban API in Toolbar](api/config/toolbar_api_config.md) | Toolbar에서 Kanban API를 포함하고 사용하는 방법을 알아보세요 |
| [Localizing Toolbar](api/config/toolbar_locale_config.md) | Toolbar를 현지화하는 방법을 알아보세요 |

## TypeScript 사용 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | -------------------------------------------|
| [Working with TypeScript](guides/typescript_support.md)     | TypeScript와 함께 사용하는 방법을 알아보세요|

## 추가 질문이 있으신가요?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">커뮤니티에 질문하기</a> </button>

:::info
아래 댓글에 질문을 남기실 수도 있습니다!
:::