---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: DHTMLX JavaScript Kanban 라이브러리의 How-tos 페이지를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# How-tos

이 페이지는 JavaScript Kanban을 시작하고, 설정하고, 조정하며, 관리하는 데 필요한 완벽한 참조 자료입니다.

## 기본 원칙

Kanban을 사용할 때 알아야 할 주요 사항은 다음과 같습니다.

| 주제                                         | 설명                                              |
| --------------------------------------------- | ---------------------------------------------------------|
| [초기화](/guides/initialization)                  | Kanban 설정 방법 ([Example](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [구성](/guides/configuration)                   | Kanban 구성 방법                            |
| [사용자 정의](/guides/customization)                   | Kanban 커스터마이즈 단계                            |
| [스타일링](/guides/stylization)                     | Kanban 스타일링 옵션                              |
| [로컬라이제이션](/guides/localization)                    | Kanban 로컬라이즈 방법 ([Example](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API 참조

아래는 Kanban 작업 시 참고할 수 있는 API 문서입니다.

| 주제                                                 | 설명                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban events](/api/overview/events_overview.md)      | Kanban 이벤트 사용하기                     |
| [Kanban methods](/api/overview/methods_overview.md)    | Kanban 메서드 사용하기                    |
| [Kanban properties](/api/overview/properties_overview.md)| Kanban 속성 접근하기               |
| [Event Bus methods](/api/overview/internal_eventbus_overview.md)| Event Bus 메서드        |
| [RestDataProvider methods](/api/overview/internal_rest_overview.md)| RestDataProvider 메서드|
| [State methods](/api/overview/internal_state_overview.md)| State 메서드                   |
| [Toolbar methods](/api/overview/toolbar_methods_overview.md)| Toolbar 메서드              |
| [Toolbar properties](/api/overview/toolbar_properties_overview.md)| Toolbar 속성     |

## 카드 작업 방법

이 섹션에서는 카드를 관리하고, 카드 데이터를 다루며, 카드를 원하는 대로 설정하는 방법을 안내합니다.

### 카드 작업 수행

| 주제                                                        | 설명                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](/api/methods/js_kanban_addcard_method.md)  | 새 카드 추가 방법 ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](/api/methods/js_kanban_deletecard_method.md) | 카드 삭제 방법 ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](/api/methods/js_kanban_movecard_method.md)     | 카드 이동 방법 ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Scrolling to the desired cards](/api/methods/js_kanban_scroll_method.md)| 특정 카드로 스크롤하는 방법|
| [Searching for cards](/api/methods/js_kanban_setsearch_method.md)| 카드 검색 방법            |
| [Selecting cards](/api/methods/js_kanban_selectcard_method.md)| 카드 선택 방법                   |
| [Sorting cards](/api/methods/js_kanban_setsort_method.md)     | 카드 정렬 방법                     |
| [Unselecting cards](/api/methods/js_kanban_unselectcard_method.md)| 카드 선택 해제 방법             |
| [Adding links between cards](/api/config/js_kanban_links_config.md)| 카드 간 링크 추가 방법 ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### 카드 데이터 다루기

| 주제                                                        | 설명                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](/api/methods/js_kanban_getcard_method.md) | 카드 데이터 가져오는 방법                      |
| [Getting cards state](/api/internal/js_kanban_getstate_method.md) | 카드 상태 가져오는 방법                 |
| [Getting cards reactive state](/api/internal/js_kanban_getreactivestate_method.md) | 카드 반응형 상태 가져오기 |
| [Loading card data](/api/config/js_kanban_cards_config.md)    | 초기 카드 데이터 로드 방법             |
| [Parsing card data](/api/methods/js_kanban_parse_method.md)   | 카드 데이터 파싱 방법                    |
| [Serializing card data](/api/methods/js_kanban_serialize_method.md)| 카드 데이터 직렬화 방법 ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](/api/methods/js_kanban_updatecard_method.md)| 카드 데이터 업데이트 방법                |

### 카드 설정

| 주제                                                        | 설명                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](/api/config/js_kanban_readonly_config.md)  | 새 카드 추가 옵션 활성화/비활성화|
| [Binding cards into columns](/api/config/js_kanban_columnkey_config.md) | 카드를 컬럼에 연결하는 방법      |
| [Binding cards into rows](/api/config/js_kanban_rowkey_config.md) | 카드를 행에 연결하는 방법               |
| [Configuring a card appearance](/api/config/js_kanban_cardshape_config.md)| 카드 모양 설정 방법|
| [Configuring a cards menu](/api/config/js_kanban_cardshape_config.md)| 카드 컨텍스트 메뉴 설정 방법 ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](/api/config/js_kanban_cardtemplate_config.md)| 템플릿을 활용해 카드 모양 커스터마이즈 하는 방법 ([Example](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](/api/config/js_kanban_readonly_config.md)    | 카드 드래그 앤 드롭 활성화/비활성화|
| [Editing cards](/api/config/js_kanban_readonly_config.md)     | 카드 편집 활성화/비활성화|
| [Lazy rendering](/api/config/js_kanban_rendertype_config.md)| 다수의 카드에 대해 **lazy rendering** 활성화/비활성화 ([Example](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](/api/config/js_kanban_columns_config.md)     | 컬럼 및 스윔레인 제한 설정 (**WIP validation**) ([Example](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](/api/config/js_kanban_readonly_config.md)   | 카드 선택 활성화/비활성화|
| [Setting a fix height of cards](/api/config/js_kanban_cardheight_config.md)| 카드에 고정 높이 설정 방법   |
| [Updating card settings](/api/methods/js_kanban_setconfig_method.md)| 카드 설정 업데이트 방법               |

## 카드 에디터 사용 방법

카드 에디터 사용에 대한 자세한 내용은 아래를 확인하세요.

| 주제                                                        | 설명                                            |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosaving mode](/api/config/js_kanban_editorautosave_config.md)| 에디터 자동 저장 모드 활성화/비활성화 |
| [Configuring editor fields](/guides/configuration/#편집기)| 에디터 필드 설정 방법         |
| [Configuring the editor](/guides/configuration/#편집기-동작-설정)| 에디터 설정 방법 |
| [Updating editor settings](/api/methods/js_kanban_setconfig_method.md)| 에디터 설정 업데이트 방법            |

## 컬럼 작업 방법

컬럼을 관리하고 컬럼 데이터를 다루는 방법입니다.

### 컬럼 작업 수행

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new columns](/api/methods/js_kanban_addcolumn_method.md) | 새 컬럼 추가 방법 ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](/api/config/js_kanban_columnshape_config.md)| 컬럼 컨텍스트 메뉴 설정 방법 ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](/api/methods/js_kanban_deletecolumn_method.md)| 컬럼 삭제 방법                         |
| [Moving columns](/api/methods/js_kanban_movecolumn_method.md)    | 컬럼 이동 방법                           |
| [Scrolling to the desired columns](/api/methods/js_kanban_scroll_method.md)| 특정 컬럼으로 스크롤하는 방법 |
| [Separate scrolling for columns](/api/config/js_kanban_scrolltype_config.md)| 각 컬럼에 개별 스크롤 적용 방법 ([Example](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### 컬럼 데이터 다루기

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](/api/methods/js_kanban_getareacards_method.md)| 컬럼의 카드 데이터 가져오는 방법 |
| [Getting columns state](/api/internal/js_kanban_getstate_method.md) | 컬럼 상태 가져오는 방법               |
| [Getting columns reactive state](/api/internal/js_kanban_getreactivestate_method.md) | 컬럼 반응형 상태 가져오기 |
| [Loading column data](/api/config/js_kanban_columns_config.md)    | 초기 컬럼 데이터 로드 방법          |
| [Parsing column data](/api/methods/js_kanban_parse_method.md)     | 컬럼 데이터 파싱 방법                 |
| [Serializing column data](/api/methods/js_kanban_serialize_method.md)| 컬럼 데이터 직렬화 방법          |
| [Updating column data](/api/methods/js_kanban_updatecolumn_method.md)| 컬럼 데이터 업데이트 방법             |

## 행(스윔레인) 작업 방법

이 섹션은 행(스윔레인) 관리 및 데이터 다루는 방법을 안내합니다.

### 행(스윔레인) 작업 수행

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](/api/methods/js_kanban_addrow_method.md)       | 새 행(스윔레인) 추가 방법               |
| [Configuring a rows menu](/api/config/js_kanban_rowshape_config.md)| 행(스윔레인) 컨텍스트 메뉴 설정 방법 ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](/api/methods/js_kanban_deleterow_method.md)      | 행(스윔레인) 삭제 방법                |
| [Moving rows](/api/methods/js_kanban_moverow_method.md)          | 행(스윔레인) 이동 방법                  |
| [Scrolling to the desired row](/api/methods/js_kanban_scroll_method.md)| 특정 행(스윔레인)으로 스크롤하는 방법|

### 행(스윔레인) 데이터 다루기

| 주제                                                           | 설명                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column and row](/api/methods/js_kanban_getareacards_method.md)| 컬럼과 행의 카드 데이터 가져오는 방법 |
| [Getting rows state](/api/internal/js_kanban_getstate_method.md) | 행 상태 가져오는 방법                     |
| [Getting rows reactive state](/api/internal/js_kanban_getreactivestate_method.md) | 행 반응형 상태 가져오기 |
| [Loading row data](/api/config/js_kanban_rows_config.md)         | 초기 행 데이터 로드 방법              |
| [Parsing row data](/api/methods/js_kanban_parse_method.md)       | 행 데이터 파싱 방법                     |
| [Serializing row data](/api/methods/js_kanban_serialize_method.md)| 행 데이터 직렬화 방법                |
| [Updating row data](/api/methods/js_kanban_updaterow_method.md)  | 행 데이터 업데이트 방법                    |

## 이벤트 작업 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Executing events](/api/internal/js_kanban_exec_method.md)   | 내부 이벤트 실행 방법               |
| [Intercepting events](/api/internal/js_kanban_intercept_method.md)| 내부 이벤트 가로채는 방법        |
| [List of inner events](/api/overview/events_overview.md)     | Kanban 내부 이벤트 목록                |
| [Reordering events](/api/internal/js_kanban_setnext_method.md)| 내부 이벤트의 Event Bus 순서 변경 방법 |
| [Subscribing on events](/api/internal/js_kanban_on_method.md)| 내부 이벤트 구독 방법          |

## Kanban REST API 사용 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Loading server data for cards](/api/provider/rest_methods/js_kanban_getcards_method.md)| 서버에서 카드 데이터 로드 방법 |
| [Loading server data for columns](/api/provider/rest_methods/js_kanban_getcolumns_method.md)| 서버에서 컬럼 데이터 로드 방법 |
| [Loading server data for rows](/api/provider/rest_methods/js_kanban_getrows_method.md)| 서버에서 행 데이터 로드 방법 |
| [Working with server](/guides/working_with_server.md)        | REST API를 통한 서버 연동 ([Example](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Kanban 상태 관리 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore and DataStore](/api/internal/js_kanban_getstores_method.md)| StateStore와 DataStore 객체 가져오기 |
| [Getting StateStore properties](/api/internal/js_kanban_getstate_method.md)| StateStore 속성 객체 가져오기 |
| [Getting StateStore reactive properties](/api/internal/js_kanban_getreactivestate_method.md)| StateStore 반응형 속성 객체 가져오기 |

## Toolbar 작업 방법

| 주제                                                       | 설명                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Configuring a searchbar on Toolbar](/api/config/toolbar_items_config.md) | Toolbar에서 검색바 설정 방법 ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](/api/config/toolbar_items_config.md) | Toolbar에서 정렬 컨트롤 설정 방법 ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](/api/config/toolbar_items_config.md)| Toolbar 컨트롤 설정, 커스터마이즈, 순서 변경 방법 ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Including Kanban API in Toolbar](/api/config/toolbar_api_config.md) | Toolbar에서 Kanban API 포함 및 사용 방법 |
| [Localizing Toolbar](/api/config/toolbar_locale_config.md) | Toolbar 로컬라이즈 방법 |

## TypeScript 사용 방법

| 주제                                                       | 설명                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](/guides/typescript_support.md)     | Kanban에서 TypeScript 사용하는 방법                  |

## 추가 문의 사항이 있으신가요?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
질문이 있으시면 아래 댓글로 남겨주세요!
:::
