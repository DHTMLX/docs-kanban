---
sidebar_label: 새로운 소식
title: 새로운 소식
description: DHTMLX Kanban의 최신 기능과 업데이트, 릴리스 이력, 개발자 가이드 및 API 상세 정보, 코드 샘플과 라이브 데모를 확인하고, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 새로운 소식

Kanban을 이전 버전에서 업데이트할 때는 [새 버전으로 마이그레이션](/news/migration.md)을 참고하는 것이 좋습니다.

## 버전 1.6.3

2025년 4월 8일 릴리스

### 수정 사항

- 컬럼 제한이 전체 컬럼에 잘못 적용되는 경우가 있음
- 카드를 이동하고 모달 에디터를 닫은 후 오류 발생
- 삭제 확인 창이 모달 에디터 뒤에 표시됨
- 툴바의 "더보기" 아이콘이 창 크기 조정 시 깜빡임
- `delete-card` 이벤트가 항상 에디터를 닫음
- 우선순위가 옵션에 없는 ID로 설정된 경우 에디터를 열 수 없음

## 버전 1.6.2

2025년 2월 14일 릴리스

### 수정 사항

- 평가판에서 잘못된 만료 날짜 표시
- 터치 기기에서 드래그 앤 드롭 시 경고 표시
- readonly 설정에서 `add: false`로 해도 컬럼 메뉴의 **추가** 옵션이 사라지지 않음
- 카드 ID가 문자열인 경우 에디터가 로드되지 않음
- 패키지 내 샘플 링크가 오래됨
- 컬럼 스크롤과 lazy 렌더링이 함께 사용될 때 드래그 앤 드롭 문제 발생
- `setConfig()` 메소드가 컬럼 헤더의 고정 상태를 업데이트하지 않음

## 버전 1.6.1

2024년 11월 29일 릴리스

### 수정 사항

- 좁은 화면에서 툴바의 "더보기" 아이콘 정렬이 잘못됨
- `RestDataProvider`가 `setHeaders()`로 설정된 헤더를 사용하지 않음
- `RestDataProvider.getIDResolver`가 함수가 아니라는 오류 발생

## 버전 1.6

2024년 11월 13일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### 신규 기능

- 카드에 할당된 사용자 수 표시 개수를 [`cardShape.users.maxCount`](/api/config/js_kanban_cardshape_config)로 설정 가능 ([**예제**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban) 참고)
- 컬럼 헤더 내용을 [`columnShape`](/api/config/js_kanban_columnshape_config)로 커스터마이즈 가능 ([**예제**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban) 참고)
- 툴바 검색 컨트롤의 검색 결과 뷰를 [`items.searchResult`](/api/config/toolbar_items_config)로 커스터마이즈 가능 ([**예제**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban) 참고)
- 에디터를 모달 창으로 열기 [`editor.placement`](/api/config/js_kanban_editor_config) ([**예제**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban) 참고)
- 카드에서 [`cardShape.votes.clickable`](/api/config/js_kanban_cardshape_config)로 투표 아이콘 클릭 지원 ([**예제**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban) 참고)
- [`setTheme()`](/api/methods/js_kanban_settheme_method)로 테마 적용 가능

### 업데이트

- #### 속성

    - [`cardShape`](/api/config/js_kanban_cardshape_config)에 ***users.maxCount*** 및 ***votes.clickable*** 추가
    - [`columnShape`](/api/config/js_kanban_columnshape_config)에 ***headerTemplate*** 및 ***collapsedTemplate*** 추가
    - [`editor`](/api/config/js_kanban_editor_config)에 ***placement*** 옵션 추가
    - 툴바의 [`items`](/api/config/toolbar_items_config)의 **search**에 ***searchResult*** 추가

- #### 이벤트

    - [`set-edit`](/api/events/js_kanban_setedit_event)에 ***eventSource*** 파라미터 추가 ([**예제**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban) 참고)

- #### 메소드

    - [`setConfig()`](/api/methods/js_kanban_setconfig_method) 동작 변경:
        - history는 변경되지 않음 (해당 방식으로 history 변경 불가)
        - 테마는 이 메소드로 변경되지 않음 (`setTheme()`을 사용)
        - Kanban 데이터스토어는 파괴되지 않으므로, 이벤트 리스너나 툴바를 다시 붙일 필요 없음

    - [`setLocale()`](/api/methods/js_kanban_setlocale_method)도 데이터스토어를 파괴하지 않으므로, 이벤트 리스너와 툴바가 유지됨
    - 툴바 [`setLocale()`](/api/methods/toolbar_setlocale_method) 메소드의 `api` 파라미터는 deprecated됨

### 수정 사항

- 댓글 편집 중 삭제 시 댓글 영역이 사라질 수 있음
- 일부 현지화 문자열 누락
- [`scrollType: "column"`](/api/config/js_kanban_scrolltype_config)과 [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config)를 동시에 설정하면 드래그 앤 드롭이 작동하지 않음
- 에디터의 닫기 아이콘으로 에디터가 닫히지 않음
- Willow 스킨에서 에디터의 오른쪽이 진행률 바 배경색과 동일하게 표시됨

## 버전 1.5.13

2024년 9월 12일 릴리스

### 수정 사항

- 파일 확장자가 대문자인 경우 "커버로 지정" 버튼이 보이지 않음
- 비활성화된 Multiselect 클릭 시 오류 발생
- [`addCard()`](/api/methods/js_kanban_addcard_method) 사용 후 컬럼 스크롤과 lazy 렌더링이 활성화되면 스크롤 시 오류 발생
- 댓글이 없을 때 빈 문자열로 저장됨 (빈 배열이어야 함)
- 에디터 스타일이 동일한 클래스명을 가진 전역 스타일에 의해 덮어써질 수 있음. [마이그레이션 참고](/news/migration.md/#1512---1513)

## 버전 1.5.12

2024년 5월 2일 릴리스

### 수정 사항

- Intercept regression: `false`를 반환해도 내부 이벤트가 차단되지 않음
- 비활성화된 파일에 파일 업로드가 가능함

## 버전 1.5.11

2024년 3월 25일 릴리스

### 수정 사항

- *Dark willow* 스킨에서 Kanban CSS 변수가 툴바와 포털에 누락됨
- 자동 저장이 꺼진 상태에서 댓글과 투표 변경 사항이 폼 값에 저장되지 않음
- 커스텀 컬럼 하위메뉴의 **onClick** 함수가 `null` 인자를 받음
- 에디터에서 Datepickers를 편집 가능하게 설정할 수 없음
- Kanban 예제에서 콘솔 경고 발생

## 버전 1.5.10

2024년 2월 29일 릴리스

### 수정 사항

- npm 빌드 오류
- [`duplicate-card`](/api/events/js_kanban_duplicatecard_event) 이벤트와 [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method) 메소드에 `select` 파라미터 추가
- 에디터의 댓글 필드 스타일이 올바르지 않음
- 테마 변경 시 회귀 이슈 발생

## 버전 1.5.9

2024년 2월 20일 릴리스

### 수정 사항

- Kanban 스타일이 다른 위젯에 영향을 줌
- `disabled: true`가 설정된 커스텀 컬럼 하위메뉴 항목이 여전히 클릭 가능함
- **Uploader** 컨트롤에 커스텀 업로드 함수 설정 불가

## 버전 1.5.8

2023년 11월 28일 릴리스

### 수정 사항

- **currentUser** TS 정의가 **IKanbanConfig**에서 누락됨

## 버전 1.5.7

2023년 11월 14일 릴리스

### 업데이트

- 툴바 [`setLocale()`](/api/methods/toolbar_setlocale_method) 메소드에 ***api*** 파라미터 추가

### 수정 사항

- 카드 메뉴 항목에서 `disabled: true`가 동작하지 않음
- Kanban 예제에서 불필요한 콘솔 경고 표시
- 작업 우선순위 재설정 불가
- 에디터 내 드롭다운 컨트롤이 외부 클릭 시 닫히지 않음

## 버전 1.5.6

2023년 9월 13일 릴리스

### 업데이트

- Kanban을 ES 모듈로 import 가능

### 수정 사항

- npm 패키지 회귀 이슈

## 버전 1.5.4

2023년 8월 9일 릴리스

### 수정 사항

- 다른 카드로 전환 시 업로드된 파일이 폼에 남아있음
- 드래그 앤 드롭으로 파일 업로드가 동작하지 않음
- 폼이 열린 상태에서 Delete 키로 카드 삭제 가능
- 검색에서 카드를 선택하면 "Search in" 드롭다운이 비어있게 됨
- 링크 추가 후 undo 시 백엔드에서 링크가 삭제되지 않음

## 버전 1.5.1

### 수정 사항

- 올바른 TypeScript 정의가 생성됨

## 버전 1.5

2023년 6월 15일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### 신규 기능

- 런타임에 카드 간 링크 생성 및 삭제 가능
- 카드 간 링크를 서버에서 관리 가능
- 컬럼 헤더 고정 지원 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)

### 신규 API

- #### 메소드

    - [`addLink()`](/api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](/api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method)

- #### 라우트

    - [`DELETE /links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### 업데이트

- #### 속성

    - [`columnShape`](/api/config/js_kanban_columnshape_config)에 ***fixedHeaders*** 파라미터 추가

### 수정 사항

- 런타임에 링크를 파싱, 내보내기, 직렬화할 수 없음
- 사용자 섹션이 활성화되어 있지 않은 경우 댓글 섹션 생성 실패
- 저장소의 링크가 원본 데이터를 변경하거나 제대로 저장되지 않음
- lazy 렌더링일 때 축소된 컬럼의 hover 스타일이 깨짐
- 카드를 새 컬럼으로 이동하면 사라짐
- 새 댓글 입력창이 편집 중일 때 닫히지 않음

## 버전 1.4.2

2023년 4월 13일 릴리스

### 수정 사항

- 백엔드 ID가 카드/컬럼/행 데이터에 추가 후 로컬에 저장되지 않음
- 일부 TS 정의 누락
- 다크 스킨 스타일이 다른 요소에 영향을 줌

## 버전 1.4.1

2023년 3월 29일 릴리스

### 수정 사항

- 정렬 유지가 제대로 동작하지 않음
- **cardShape**, **columnShape**, **rowShape**에서 컨텍스트 메뉴 비활성화가 제대로 동작하지 않음
- 에디터에서 링크 데이터 없이 링크 추가 시 동작하지 않음
- 컬럼 메뉴가 카드 메뉴와 겹치거나 표시되지 않을 수 있음
- 동시에 두 개의 작업을 드래그할 수 있음

## 버전 1.4

2023년 3월 21일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### 신규 기능

- 댓글 추가 가능 ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)
- **material**, **willow**, **willow-dark** 테마 제공 ([**예제**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban) 참고)
- 사용자 제한 기능 제공 ([**예제**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban) 참고)
- 카드 간 링크 설정 ([**예제**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban) 참고)
- 카드 투표 기능 ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)

### 신규 API

- #### 이벤트

    - [`add-comment`](/api/events/js_kanban_addcomment_event)
    - [`add-link`](/api/events/js_kanban_addlink_event)
    - [`delete-comment`](/api/events/js_kanban_deletecomment_event)
    - [`delete-link`](/api/events/js_kanban_deletelink_event)
    - [`drag-card`](/api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](/api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](/api/events/js_kanban_startdragcard_event)
    - [`update-comment`](/api/events/js_kanban_updatecomment_event)

- #### 메소드

    - [`addComment()`](/api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](/api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](/api/methods/js_kanban_updatecomment_method)

- #### 속성

    - [`currentUser`](/api/config/js_kanban_currentuser_config)
    - [`links`](/api/config/js_kanban_links_config)
    - [`theme`](/api/config/js_kanban_theme_config) (Kanban)
    - [`theme`](/api/config/toolbar_items_config) (툴바)

### 업데이트

- #### 메소드

    - [`api.getState()`](/api/internal/js_kanban_getstate_method) 업데이트

- #### 속성

    - [`cards`](/api/config/js_kanban_cards_config)에 ***css***, ***comments***, ***votes*** 지원
    - [`cardShape`](/api/config/js_kanban_cardshape_config)에 ***comments***, ***votes*** ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)), ***css*** ([**예제**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)) 추가
    - [`cardTemplate`](/api/config/js_kanban_cardtemplate_config)에서 컨텍스트 메뉴 표시 가능
    - [`columns`](/api/config/js_kanban_columns_config)에 ***css*** ([**예제**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)), ***overlay*** ([**예제**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)) 추가
    - [`columnShape`](/api/config/js_kanban_columnshape_config)에 ***css*** ([**예제**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) 추가
    - [`editorShape`](/api/config/js_kanban_editorshape_config)에 [***comments***](/guides/configuration/#comments-타입), [***links***](/guides/configuration/#links-타입), 날짜/날짜범위 형식에 ***format*** 추가
    - [`rows`](/api/config/js_kanban_rows_config)에 ***css*** ([**예제**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)) 추가
    - [`rowShape`](/api/config/js_kanban_rowshape_config)에 ***css*** ([**예제**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)) 추가

### 폐기 예정 API

- #### 속성

    - `cardShape.menu.items`, `columnShape.menu.items`, `rowShape.menu.items`의 메뉴 항목 객체 내 label은 폐기 예정

### 수정 사항

- Kanban이 margin이 있는 컨테이너에 있을 때 메뉴 위치가 어긋남
- 컬럼이 축소된 경우 컬럼 너비가 커스텀일 때 위치가 올바르지 않음
- 축소된 컬럼에 카드를 드롭하면 카드가 사라짐
- 컬럼 너비가 커스텀일 때 축소된 컬럼 위치가 올바르지 않음
- swimlane에서 카드 컨텍스트 메뉴가 편집 패널에 가려져 카드 삭제가 어려움

## 버전 1.3

2022년 9월 29일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### 신규 기능

- API, 3점 컨텍스트 메뉴, `Ctrl (Command)` + `D`(여러 카드 동시 지원)로 카드 복제 가능
- Kanban 데이터를 JSON 파일로 내보내기 가능
- Kanban 이력 관리:
    - 툴바에서 Undo, Redo 컨트롤
    - 단축키:
        - `Ctrl (Command)`+`Z`: undo
        - `Ctrl (Command)`+`Y` 또는 `Ctrl (Command)`+`Shift`+`Z`: redo
    - API를 통한 관리

### 신규 API

- **이벤트:**
    [`duplicate-card`](/api/events/js_kanban_duplicatecard_event)

- **메소드:**
    [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](/api/internal/js_kanban_json_method),
    [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](/api/methods/js_kanban_redo_method),
    [`undo()`](/api/methods/js_kanban_undo_method)

- **속성:**
    [`editor`](/api/config/js_kanban_editor_config),
    [`history`](/api/config/js_kanban_history_config)

- **공통 설정:**
    [`$meta`](/api/common/js_kanban_meta_parameter)

### 폐기 예정 API

- **속성:**
    [`editorAutoSave`](/api/config/js_kanban_editorautosave_config)

### 업데이트

- #### 이벤트

    - [`update-card`](/api/events/js_kanban_updatecard_event) 이벤트 업데이트
    - [`update-column`](/api/events/js_kanban_updatecolumn_event) 이벤트 업데이트
    - [`update-row`](/api/events/js_kanban_updaterow_event) 이벤트 업데이트

- #### 메소드

    - [`updateCard()`](/api/methods/js_kanban_updatecard_method) 업데이트
    - [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) 업데이트
    - [`updateRow()`](/api/methods/js_kanban_updaterow_method) 업데이트

- #### 속성

    - 툴바 [`items`](/api/config/toolbar_items_config)에 ***"undo"***, ***"redo"*** 컨트롤 추가
    - [`editorShape`](/api/config/js_kanban_editorshape_config)에 ***dateRange*** 타입 추가

## 버전 1.2.2

2022년 8월 30일 릴리스

### 수정 사항

- 메뉴 및 툴바에 아이콘이 중복 표시됨

## 버전 1.2.1

2022년 7월 28일 릴리스

### 수정 사항

- `cardHeight`가 `scrollType:"column"` 활성화 시 동작하지 않음
- 업로더에서 카드 에디터에 업로드된 파일이 표시되지 않음
- 에디터의 "combo" 및 "progress" 필드에 현지화가 적용되지 않음

## 버전 1.2

2022년 6월 29일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### 신규 기능 

- 컬럼 메뉴에서 새 카드 추가 가능 ([**예제**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban) 참고)
- lazy 렌더링 지원 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)
- 각 컬럼별 개별 스크롤 지원 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)
- Kanban이 새 카드, 컬럼, 행 생성 시 자동 스크롤 (API, UI) ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)
- 카드 정렬 지원 (API, UI) ([**예제**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban) 참고)

### 신규 API

- **이벤트:**
    [`scroll`](/api/events/js_kanban_scroll_event),
    [`set-edit`](/api/events/js_kanban_setedit_event),
    [`set-sort`](/api/events/js_kanban_setsort_event)

- **메소드:**
    [`scroll()`](/api/methods/js_kanban_scroll_method),
    [`setEdit()`](/api/methods/js_kanban_setedit_method),
    [`setSort()`](/api/methods/js_kanban_setsort_method)

- **속성:**
    [`cardHeight`](/api/config/js_kanban_cardheight_config),
    [`columnShape`](/api/config/js_kanban_columnshape_config),
    [`rowShape`](/api/config/js_kanban_rowshape_config), 
    [`renderType`](/api/config/js_kanban_rendertype_config),
    [`scrollType`](/api/config/js_kanban_scrolltype_config)

### 업데이트

- #### 메소드

    - [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) 업데이트
    - [`api.getState()`](/api/internal/js_kanban_getstate_method) 업데이트
    - [`api.getStores()`](/api/internal/js_kanban_getstores_method) 업데이트
    - Kanban의 [`setLocale()`](/api/methods/js_kanban_setlocale_method) 업데이트
    - 툴바의 [`setLocale()`](/api/methods/toolbar_setlocale_method) 업데이트

- #### 속성

    - 툴바 [`items`](/api/config/toolbar_items_config) 업데이트
    - [`cardShape`](/api/config/js_kanban_cardshape_config)에서 ***start_date***, ***end_date***, ***menu***, ***users*** 업데이트
    - [`editorShape`](/api/config/js_kanban_editorshape_config)에서 ***multiselect*** 타입 업데이트

#### 공통

- CSS 클래스 접두사 변경됨 (*[스타일링 참고](/guides/stylization)*)
- 로케일 구조 업데이트됨 (*[현지화 참고](/guides/localization)*)

### 수정 사항

- `rowKey` config로 swimlane에 카드 바인딩이 올바르게 동작하지 않음
- 카드 메뉴 클릭 시 에디터가 열림
- 여러 카드 드래그 시 예상과 다르게 동작
- `select: false` (**readonly** config)일 때 카드 편집 불가
- `addCard()`로 추가한 새 카드를 제대로 선택할 수 없음
- `cardShape`의 `label: false` 및 `menu: false` 설정이 올바르게 동작하지 않음

## 버전 1.1.1

2022년 2월 28일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### 수정 사항

- cardShape config에 정의되지 않은 커스텀 에디터 필드가 동작하지 않음
- 검색바 드롭다운에서 올바른 카드 선택이 어려움

## 버전 1.1

2022년 2월 15일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### 신규 기능

- 컬럼명을 클릭 옆 화살표로 컬럼을 축소/확장 가능
- 컬럼 및 swimlane(행)별 카드 개수 제한 설정 가능
- 컨텍스트 메뉴(점 3개 아이콘)로 컬럼 이동 가능
- 컨텍스트 메뉴(점 3개 아이콘)로 행 이동 가능
- 동일 컬럼 내 다중 카드 **Shift** + **클릭**으로 선택 가능
- Kanban용 TypeScript 정의 제공

### 신규 API

- 컬럼 이동, 행 이동을 위한 **이벤트**: 
    [`move-column`](/api/events/js_kanban_movecolumn_event),
    [`move-row`](/api/events/js_kanban_moverow_event)
- 컬럼 이동, 행 이동을 위한 **메소드**: 
    [`moveColumn()`](/api/methods/js_kanban_movecolumn_method),
    [`moveRow()`](/api/methods/js_kanban_moverow_method)

### 업데이트

#### 속성

- [`cards`](/api/config/js_kanban_cards_config) 옵션화

- [`columns`](/api/config/js_kanban_columns_config) 옵션화 및:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- [`cardShape`](/api/config/js_kanban_cardshape_config)의 ***color*** 옵션 업데이트

#### 메소드

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) 업데이트
- [`addRow`](/api/methods/js_kanban_addrow_method) 업데이트
- [`updateCard`](/api/methods/js_kanban_updatecard_method) 업데이트
- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) 업데이트
- [`updateRow`](/api/methods/js_kanban_updaterow_method) 업데이트
- [`parse`](/api/methods/js_kanban_parse_method) 업데이트

#### 이벤트

- [`add-column`](/api/events/js_kanban_addcolumn_event) 업데이트
- [`add-row`](/api/events/js_kanban_addrow_event) 업데이트
- [`update-card`](/api/events/js_kanban_updatecard_event) 업데이트
- [`update-column`](/api/events/js_kanban_updatecolumn_event) 업데이트
- [`update-row`](/api/events/js_kanban_updaterow_event) 업데이트

## 버전 1.0

2021년 11월 23일 릴리스

[블로그 릴리스 리뷰](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### 초기 기능

- **카드**를 다음과 같이 관리 가능:
    - 새 카드 추가
    - 카드 선택(다중 선택 포함)
    - 카드 삭제
    - 카드 검색
    - 컬럼/행 간 드래그로 카드 순서 변경
    - 에디터로 카드 상세 정보 편집:
        - 레이블
        - 설명
        - 진행률
        - 시작일
        - 종료일
        - 색상
        - 우선순위
        - 첨부파일(*파일*, *이미지*)
        - *커스텀 필드*

- **컬럼**과 **행** 관리:
    - 새 컬럼, 행 추가
    - 컬럼, 행 삭제
    - 컬럼, 행 이름 변경
    - 행 축소 또는 확장

- [현지화](/guides/localization)
- [백엔드 연동](/guides/working_with_server) (Go 및 Node)
- 크로스 브라우저 호환성
- 터치 기기 지원
