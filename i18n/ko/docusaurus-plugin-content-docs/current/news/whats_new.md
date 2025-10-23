---
sidebar_label: 새로운 소식
title: 새로운 소식
description: DHTMLX JavaScript UI 라이브러리의 문서에서 DHTMLX Kanban의 새로운 기능과 릴리즈 이력을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판도 다운로드해보세요.
---

# 새로운 소식

이전 버전에서 Kanban을 업데이트하는 경우, 자세한 내용은 [Migration to newer versions](news/migration.md) 문서를 참고하세요.

## 버전 1.7.0

2025년 10월 14일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/meet-dhtmlx-kanban-1-7/)

### Salesforce 연동

v1.7부터 JavaScript Kanban을 Salesforce 환경에서 사용할 수 있습니다. 자세한 내용은 다음 가이드를 참고하세요: [**Integration with Salesforce**](guides/integration_with_salesforce.md).

또한 [**GitHub 예제**](https://github.com/DHTMLX/salesforce-lwc-demo)를 확인하거나, [**온라인 데모**](https://dhtmlx-dev-ed.develop.lightning.force.com/)를 실행해볼 수 있습니다. (*Login*: ***user***, *Password*: ***demo***)

### 신규 API

- #### 이벤트

    - [`undo`](api/events/js_kanban_undo_event.md)
    - [`redo`](api/events/js_kanban_redo_event.md)

- #### 메서드

    - [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md)
    - [`detach()`](api/internal/js_kanban_detach_method.md)

### 업데이트

- #### 메서드

    - [`on`](api/internal/js_kanban_on_method.md) 내부 메서드에 `config.tag` 및 `config.intercept` 파라미터가 추가되었습니다.
    - [`intercept`](api/internal/js_kanban_intercept_method.md) 내부 메서드에 `config.tag` 및 `config.intercept` 파라미터가 추가되었습니다.

- #### 속성

    - [`links`](api/config/js_kanban_links_config.md) 속성이 다음과 같이 변경되었습니다:
        - `masterId` 파라미터가 `source`로 대체됨
        - `slaveId` 파라미터가 `target`으로 대체됨

    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성이 업데이트되었습니다. `clearButton` 파라미터가 `clear`로 대체됨

    - [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) 함수가 업데이트되었습니다. `store` 파라미터가 `readonly`로 대체됨

    - [`cards[i].attached[i]`](api/config/js_kanban_cards_config.md) 속성에 `size` 파라미터가 추가됨

### 제거된 API

- `editorAutoSave` 속성이 제거되었습니다. 대신 [`editor.autoSave`](api/config/js_kanban_editor_config.md) 속성을 사용하세요.

- [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)에서 `dragItemsCoords` 및 `dropAreasCoords` 파라미터가 제거되었습니다.

### 버그 수정

- 대용량 파일 또는 파일 여러 개를 업로드할 때, 모든 파일이 서버에 완전히 업로드되기 전에 폼이 업데이트되어 카드 데이터가 잘못 전송되는 문제
- 파일 크기가 새로 업로드된 파일에만 표시되는 문제
- 에디터에서 **Done** 버튼 클릭 후 연도 및 월 값이 갱신되지 않는 문제
- 댓글 입력 영역이 확장되면서 버튼이 클릭 영역 밖으로 이동하는 문제
- 삭제된 카드에 연결된 카드를 열 때 스크립트 오류가 발생하는 문제

## 버전 1.6.5

2025년 7월 14일 출시

### 버그 수정

- `disabled: true` 설정이 메뉴 항목에 적용되지 않는 문제
- 사전 정의된 행 구조가 없는 Kanban에 행을 추가할 때 행 헤더가 나타나지 않는 문제

## 버전 1.6.4

2025년 6월 12일 출시

### 버그 수정

- 삭제 후 복원된 컬럼/행에 카드를 추가하면 카드가 사라지는 문제
- 업로더 리스트 버튼의 로케일 라벨 누락
- 상용 버전 패키지에 readme 파일 누락

## 버전 1.6.3

2025년 4월 8일 출시

### 버그 수정

- 제한이 전체 컬럼에 잘못 적용되는 문제
- 모달 에디터를 닫은 후 카드를 이동하면 오류 발생
- 삭제 확인 창이 모달 에디터 아래에 표시되는 문제
- 툴바 "더보기" 아이콘이 창 크기 조절 시 나타났다가 사라지는 문제
- `delete-card` 이벤트가 항상 에디터를 닫는 문제
- 제공된 옵션 외의 ID로 우선순위가 설정된 경우 에디터를 열 수 없는 문제

## 버전 1.6.2

2025년 2월 14일 출시

### 버그 수정

- 트라이얼 패키지의 만료일이 잘못된 문제
- 터치 디바이스에서 드래그 앤 드롭 시 경고 발생
- 읽기 전용 `add: false` 설정이 컬럼 메뉴에서 **Add** 옵션을 제거하지 않는 문제
- 카드 ID가 문자열 숫자인 경우 에디터가 렌더링되지 않는 문제
- 패키지 내 샘플 링크가 오래된 문제
- 컬럼 스크롤과 lazy 렌더링 사용 시 드래그 앤 드롭 문제
- [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 메서드가 컬럼 헤더의 고정 상태를 업데이트하지 못하는 문제

## 버전 1.6.1

2024년 11월 29일 출시

### 버그 수정

- 좁은 화면에서 툴바의 "더보기" 아이콘 정렬이 잘못됨
- `RestDataProvider`가 `setHeaders()`로 정의한 헤더를 무시하는 문제
- `RestDataProvider.getIDResolver`가 함수가 아니라는 오류

## 버전 1.6

2024년 11월 13일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### 새로운 기능

- [`cardShape.users.maxCount`](api/config/js_kanban_cardshape_config.md) 속성을 통해 카드에 표시되는 할당 사용자 수를 변경할 수 있음 ([**예제**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban) 참고)
- [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성을 통해 컬럼 헤더의 내용을 변경할 수 있음 ([**예제**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban) 참고)
- 툴바 **search** 컨트롤의 [`items.searchResult`](api/config/toolbar_items_config.md) 속성을 통해 검색 결과의 보기 및 내용을 변경할 수 있음 ([**예제**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban) 참고)
- [`editor.placement`](api/config/js_kanban_editor_config.md) 속성을 통해 에디터를 모달 창으로 표시할 수 있음 ([**예제**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban) 참고)
- [`cardShape.votes.clickable`](api/config/js_kanban_cardshape_config.md) 속성을 통해 카드에 투표 기능을 활성화할 수 있음 ([**예제**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban) 참고)

### 업데이트

- #### 속성

    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성에 ***users.maxCount*** 및 ***votes.clickable*** 파라미터가 추가됨
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성에 ***headerTemplate*** 및 ***collapsedTemplate*** 파라미터가 추가됨
    - [`editor`](api/config/js_kanban_editor_config.md) 속성에 ***placement*** 파라미터가 추가됨
    - 툴바 **search** 컨트롤의 [`items`](api/config/toolbar_items_config.md) 속성에 ***searchResult*** 파라미터가 추가됨

- #### 이벤트

    - [`set-edit`](api/events/js_kanban_setedit_event.md) 이벤트에 ***eventSource*** 파라미터가 추가됨 ([**예제**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban) 참고)

- #### 메서드

    - [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 메서드의 동작이 다음과 같이 변경됨:
        - 이 메서드는 히스토리를 변경하지 않음 (히스토리 자체를 변경할 수 없음)
        - Kanban 데이터 저장소를 파괴하지 않음. 이벤트 리스너 재생성 및 툴바 재연결이 불필요함

    - [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 메서드는 Kanban 데이터 저장소를 파괴하지 않음. 이벤트 리스너 재생성 및 툴바 재연결이 불필요함
    - 툴바 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드의 `api` 파라미터가 deprecated됨

### 버그 수정

- 편집 중인 댓글이 삭제되면 새 댓글 입력 영역이 사라지는 문제
- 누락된 로케일 문자열 추가
- [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md)과 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 설정을 동시에 사용할 때 드래그 앤 드롭이 작동하지 않는 문제
- 에디터를 닫기 아이콘으로 닫을 수 없는 문제
- Willow 스킨에서 에디터 오른쪽 부분의 배경색이 진행률 바 배경색과 동일한 문제

## 버전 1.5.13

2024년 9월 12일 출시

### 버그 수정

- 확장자가 대문자인 경우 "Make cover" 버튼이 나타나지 않는 문제
- 비활성화된 Multiselect 컨트롤 클릭 시 오류 발생
- [`addCard()`](api/methods/js_kanban_addcard_method.md) 호출 후 [컬럼 스크롤](api/config/js_kanban_scrolltype_config.md) 및 [lazy 렌더링](api/config/js_kanban_rendertype_config.md)에서 스크롤 시 오류 발생
- 댓글이 저장되지 않고 ""로 남는 문제 ([]로 저장되어야 함)
- 에디터 스타일이 전역 스타일의 동일 이름 클래스 선택자에 의해 덮어써지는 문제. [migration 섹션 참고](news/migration.md/#1512---1513)

## 버전 1.5.12

2024년 5월 2일 출시

### 버그 수정

- Intercept 회귀: `false`를 반환해도 내부 이벤트가 차단되지 않는 문제
- 비활성화된 파일이 파일을 허용하는 문제

## 버전 1.5.11

2024년 3월 25일 출시

### 버그 수정

- *Dark willow* 스킨의 Kanban CSS 변수들이 툴바 및 포털에서 사라지는 문제
- autosave 비활성화 시 댓글 및 투표 변경이 폼 값에 반영되지 않는 문제
- 커스텀 컬럼 서브메뉴의 **onClick** 함수 인자에 `null` 전달
- 에디터에서 Datepickers를 편집 모드로 설정할 수 없는 문제
- Kanban 예제에서 콘솔 경고 발생

## 버전 1.5.10

2024년 2월 29일 출시

### 버그 수정

- npm 서버에서 빌드가 깨지는 문제
- [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md) 이벤트와 [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) 메서드에 `select` 파라미터 추가
- Kanban 에디터에서 댓글 필드 스타일이 올바르지 않음

## 버전 1.5.9

2024년 2월 20일 출시

### 버그 수정

- Kanban이 다른 위젯 스타일에 영향을 주는 문제
- `disabled: true`가 지정된 커스텀 컬럼 서브메뉴 항목이 여전히 활성화되는 문제
- **Uploader** 컨트롤에 커스텀 업로드 함수를 설정할 수 없는 문제

## 버전 1.5.8

2023년 11월 28일 출시

### 버그 수정

- **IKanbanConfig** 타입의 **currentUser** TS 정의 누락

## 버전 1.5.7

2023년 11월 14일 출시

### 업데이트

- 툴바의 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드에 ***api*** 파라미터 추가

### 버그 수정

- 카드 메뉴 항목에 `disabled: true` 설정이 적용되지 않는 문제
- Kanban 예제에서 원하지 않는 콘솔 경고 발생
- 태스크 우선순위를 재설정할 수 없음
- Kanban 에디터의 드롭다운 컨트롤이 외부 클릭 시 닫히지 않음

## 버전 1.5.6

2023년 9월 13일 출시

### 업데이트

- ES 모듈로 컴포넌트 import 가능

### 버그 수정

- npm 패키지에서 회귀 현상

## 버전 1.5.4

2023년 8월 9일 출시

### 버그 수정

- 다른 카드로 전환 시 이전에 업로드된 파일이 폼에 남아있는 문제
- 드래그 앤 드롭으로 파일 업로드가 작동하지 않는 문제
- 폼이 열린 상태에서 Delete 키를 누르면 카드가 예기치 않게 삭제되는 문제
- 검색을 통해 카드를 선택한 후 "Search in" 드롭다운 입력이 비어있는 문제
- add-link 작업을 되돌릴 때 백엔드에서 추가된 링크가 삭제되지 않는 문제

## 버전 1.5.1

### 버그 수정

- 올바른 TypeScript 정의 생성

## 버전 1.5

2023년 6월 15일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### 새로운 기능

- 런타임에 카드 간 링크 설정 및 삭제 기능
- 서버 측에서 카드 간 링크 관리 기능
- 컬럼 헤더 고정 기능 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)

### 신규 API

- #### 메서드

    - [`addLink()`](api/methods/js_kanban_addlink_method.md)
    - [`deleteLink()`](api/methods/js_kanban_deletelink_method.md)
    - [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md)

- #### 라우트

    - [`DELETE /links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)
    - [`GET /links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)
    - [`POST /links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)

### 업데이트

- #### 속성

    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성에 ***fixedHeaders*** 파라미터 추가

### 버그 수정

- 런타임에서 링크를 파싱, 내보내기, 직렬화하지 못하는 문제
- 사용자 섹션이 활성화되지 않은 경우 댓글 섹션 생성 실패
- store의 링크가 원본 데이터를 변형시키고 제대로 저장되지 않는 문제
- lazy 렌더링 시 접힌 컬럼의 hover 영역 스타일이 깨지는 문제
- 새로 생성된 컬럼으로 이동한 카드가 사라지는 문제
- 새 댓글 입력 textarea가 닫히지 않는 문제

## 버전 1.4.2

2023년 4월 13일 출시

### 버그 수정

- 추가 작업 후 로컬 카드/컬럼/행 데이터에 백엔드 ID가 저장되지 않는 문제
- 누락된 TS 정의 추가
- 다크 스킨의 스타일이 누수되는 문제

## 버전 1.4.1

2023년 3월 29일 출시

### 버그 수정

- 정렬 유지 동작이 올바르지 않은 문제
- **cardShape**, **columnShape** 또는 **rowShape** 속성으로 컨텍스트 메뉴를 비활성화할 때 동작이 올바르지 않은 문제
- 에디터에서 링크를 추가하지만 데이터에 링크를 제공하지 않으면 동작이 올바르지 않은 문제
- 컬럼의 메뉴가 카드와 동일하거나 표시되지 않을 수 있음
- 하나가 아닌 두 개의 태스크가 드래그되는 문제

## 버전 1.4

2023년 3월 21일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### 새로운 기능

- 댓글 추가 기능 ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)
- 사용자 제한 기능 ([**예제**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban) 참고)
- 카드 간 링크 설정 기능 ([**예제**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban) 참고)
- 카드에 투표 기능 ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)

### 신규 API

- #### 이벤트

    - [`add-comment`](api/events/js_kanban_addcomment_event.md)
    - [`add-link`](api/events/js_kanban_addlink_event.md)
    - [`delete-comment`](api/events/js_kanban_deletecomment_event.md)
    - [`delete-link`](api/events/js_kanban_deletelink_event.md)
    - [`drag-card`](api/events/js_kanban_dragcard_event.md)
    - [`end-drag-card`](api/events/js_kanban_enddragcard_event.md)
    - [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)
    - [`update-comment`](api/events/js_kanban_updatecomment_event.md)

- #### 메서드

    - [`addComment()`](api/methods/js_kanban_addcomment_method.md)
    - [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md)
    - [`updateComment()`](api/methods/js_kanban_updatecomment_method.md)

- #### 속성

    - [`currentUser`](api/config/js_kanban_currentuser_config.md)
    - [`links`](api/config/js_kanban_links_config.md)

### 업데이트

- #### 메서드

    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) 메서드가 업데이트됨

- #### 속성

    - [`cards`](api/config/js_kanban_cards_config.md) 속성에 ***css***, ***comments***, ***votes*** 파라미터가 추가됨
    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성에 ***comments***, ***votes*** ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)), ***css*** ([**예제**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)) 파라미터가 추가됨
    - [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 속성에 컨텍스트 메뉴 표시 기능 추가
    - [`columns`](api/config/js_kanban_columns_config.md) 속성에 ***css*** ([**예제**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)), ***overlay*** ([**예제**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)) 파라미터가 추가됨
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성에 ***css*** 파라미터 추가 ([**예제**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성에 [***comments***](guides/configuration.md#comments-type), [***links***](guides/configuration.md#links-type) 타입 및 *date/dateRange* 타입의 ***format*** 파라미터 추가
    - [`rows`](api/config/js_kanban_rows_config.md) 속성에 ***css*** 파라미터 추가 ([**예제**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - [`rowShape`](api/config/js_kanban_rowshape_config.md) 속성에 ***css*** 파라미터 추가 ([**예제**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Deprecated API

- #### 속성

    - `cardShape.menu.items`, `columnShape.menu.items`, `rowShape.menu.items`의 메뉴 항목 객체 내 label

### 버그 수정

- Kanban이 마진이 있는 컨테이너 내부에 있을 때 메뉴 위치가 잘못됨
- 커스텀 컬럼 폭 사용 시 접힌 컬럼의 위치가 잘못됨
- 접힌 컬럼에 카드를 드롭하면 카드가 사라지는 문제
- 커스텀 컬럼 폭 사용 시 접힌 컬럼의 위치가 잘못됨
- 스윔레인에서 카드의 컨텍스트 메뉴가 편집 패널에 가려져 카드 삭제가 불가능한 문제

## 버전 1.3

2022년 9월 29일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### 새로운 기능

- API, 컨텍스트 메뉴(3점 아이콘), `Ctrl (Command)` + `D` 단축키로 카드 복제 (여러 카드 복제 가능)
- Kanban 데이터를 JSON 파일로 내보내기
- Kanban 히스토리 관리:
    - 툴바의 *Undo*, *Redo* 컨트롤
    - 단축키:
        - `Ctrl (Command)`+`Z` - 실행 취소
        - `Ctrl (Command)`+`Y` 또는 `Ctrl (Command)`+`Shift`+`Z` - 다시 실행
    - API를 통한 관리

### 신규 API

- **이벤트:**
    [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md)

- **메서드:**
    [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md),
    [`export.json()`](api/internal/js_kanban_json_method.md),
    [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md),
    [`redo()`](api/methods/js_kanban_redo_method.md),
    [`undo()`](api/methods/js_kanban_undo_method.md)

- **속성:**
    [`editor`](api/config/js_kanban_editor_config.md),
    [`history`](api/config/js_kanban_history_config.md)

- **공통 설정:**
    [`$meta`](api/common/js_kanban_meta_parameter.md)

### Deprecated API

- **속성:**
    [`editorAutoSave`](api/config/js_kanban_editorautosave_config.md)

### 업데이트

- #### 이벤트

    - Kanban의 [`update-card`](api/events/js_kanban_updatecard_event.md) 이벤트 업데이트
    - Kanban의 [`update-column`](api/events/js_kanban_updatecolumn_event.md) 이벤트 업데이트
    - Kanban의 [`update-row`](api/events/js_kanban_updaterow_event.md) 이벤트 업데이트

- #### 메서드

    - Kanban의 [`updateCard()`](api/methods/js_kanban_updatecard_method.md) 메서드 업데이트
    - Kanban의 [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) 메서드 업데이트
    - Kanban의 [`updateRow()`](api/methods/js_kanban_updaterow_method.md) 메서드 업데이트

- #### 속성

    - 툴바의 [`items`](api/config/toolbar_items_config.md) 속성에 ***"undo"***, ***"redo"*** 파라미터(컨트롤) 추가
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성에 ***dateRange*** 타입 추가

## 버전 1.2.2

2022년 8월 30일 출시

### 버그 수정

- 메뉴 및 툴바에 일부 아이콘이 중복 표시되는 문제

## 버전 1.2.1

2022년 7월 28일 출시

### 버그 수정

- `cardHeight` 속성이 `scrollType:"column"` 설정과 함께 작동하지 않는 문제
- 업로더가 카드 에디터에서 업로드된 파일을 표시하지 않는 문제
- 카드 에디터에서 "combo" 및 "progress" 필드의 로케일 적용이 안 되는 문제

## 버전 1.2

2022년 6월 29일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### 새로운 기능

- 컬럼 메뉴를 통한 새 카드 추가 ([**예제**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban) 참고)
- lazy 렌더링 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)
- 컬럼별 스크롤 ([**예제**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban) 참고)
- Kanban을 새로 생성된 카드, 컬럼, 행으로 스크롤(API 및 UI) ([**예제**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban) 참고)
- 카드 정렬 (API 및 UI) ([**예제**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban) 참고)

### 신규 API

- **이벤트:**
    [`scroll`](api/events/js_kanban_scroll_event.md),
    [`set-edit`](api/events/js_kanban_setedit_event.md),
    [`set-sort`](api/events/js_kanban_setsort_event.md)

- **메서드:**
    [`scroll()`](api/methods/js_kanban_scroll_method.md),
    [`setEdit()`](api/methods/js_kanban_setedit_method.md),
    [`setSort()`](api/methods/js_kanban_setsort_method.md)

- **속성:**
    [`cardHeight`](api/config/js_kanban_cardheight_config.md),
    [`columnShape`](api/config/js_kanban_columnshape_config.md),
    [`rowShape`](api/config/js_kanban_rowshape_config.md),
    [`renderType`](api/config/js_kanban_rendertype_config.md),
    [`scrollType`](api/config/js_kanban_scrolltype_config.md)

### 업데이트

- #### 메서드

    - [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 메서드 업데이트
    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) 메서드 업데이트
    - [`api.getStores()`](api/internal/js_kanban_getstores_method.md) 메서드 업데이트
    - Kanban의 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 메서드 업데이트
    - 툴바의 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드 업데이트

- #### 속성

    - 툴바의 [`items`](api/config/toolbar_items_config.md) 속성 업데이트
    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성의 ***start_date***, ***end_date***, ***menu***, ***users*** 파라미터(필드) 업데이트
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성의 ***multiselect*** 타입 업데이트

#### 공통

- CSS 클래스 접두사 (*[Stylization](guides/stylization.md) 섹션 참고*)
- 로케일 구조 (*[Localization](guides/localization.md) 섹션 참고*)

### 버그 수정

- `rowKey` 설정을 통한 카드의 스윔레인 바인딩이 올바르지 않음
- 카드 메뉴 클릭 시 에디터가 열림
- 여러 카드 드래그 동작이 올바르지 않음
- `select: false` (**readonly** config.md)에서 카드 편집 동작이 올바르지 않음
- [`addCard()`](api/methods/js_kanban_addcard_method.md) 메서드로 추가된 카드 선택 동작이 올바르지 않음
- `label: false`, `menu: false`가 `cardShape` 속성에서 올바르게 동작하지 않음

## 버전 1.1.1

2022년 2월 28일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### 버그 수정

- cardShape 설정에 정의되지 않은 커스텀 에디터 필드가 작동하지 않는 문제
- 검색 바 드롭다운 메뉴에서 원하는 카드 선택

## 버전 1.1

2022년 2월 15일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### 새로운 기능

- 컬럼 라벨 왼쪽의 화살표로 컬럼 *접기/펼치기* 기능
- 컬럼 및 스윔레인의 카드 수 *제한* 기능
- 컨텍스트 메뉴(3점 아이콘)로 컬럼 이동 기능
- 컨텍스트 메뉴(3점 아이콘)로 행 이동 기능
- **Shift** + **클릭**으로 동일 컬럼의 여러 카드 선택
- Kanban의 [TypeScript 정의](guides/typescript_support.md) 지원

### 신규 API

- 컬럼/행 이동용 새 **이벤트**: 
    [`move-column`](api/events/js_kanban_movecolumn_event.md),
    [`move-row`](api/events/js_kanban_moverow_event.md)
- 컬럼/행 이동용 새 **메서드**: 
    [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md),
    [`moveRow()`](api/methods/js_kanban_moverow_method.md)

### 업데이트

#### 속성

- [`cards`](api/config/js_kanban_cards_config.md) 속성이 선택 사항이 됨

- [`columns`](api/config/js_kanban_columns_config.md) 속성이 선택 사항이 되고, 다음 파라미터가 추가됨:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성의 ***color*** 파라미터 업데이트

#### 메서드

- [`addColumn`](api/methods/js_kanban_addcolumn_method.md) 메서드 업데이트
- [`addRow`](api/methods/js_kanban_addrow_method.md) 메서드 업데이트
- [`updateCard`](api/methods/js_kanban_updatecard_method.md) 메서드 업데이트
- [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) 메서드 업데이트
- [`updateRow`](api/methods/js_kanban_updaterow_method.md) 메서드 업데이트
- [`parse`](api/methods/js_kanban_parse_method.md) 메서드 업데이트

#### 이벤트

- [`add-column`](api/events/js_kanban_addcolumn_event.md) 이벤트 업데이트
- [`add-row`](api/events/js_kanban_addrow_event.md) 이벤트 업데이트
- [`update-card`](api/events/js_kanban_updatecard_event.md) 이벤트 업데이트
- [`update-column`](api/events/js_kanban_updatecolumn_event.md) 이벤트 업데이트
- [`update-row`](api/events/js_kanban_updaterow_event.md) 이벤트 업데이트

## 버전 1.0

2021년 11월 23일 출시

[블로그 릴리즈 리뷰](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### 초기 기능

- **카드** 관련 기능:
    - 새 카드 추가
    - 카드 선택(다중 선택)
    - 카드 삭제
    - 카드 검색
    - 원하는 컬럼(및 행)으로 카드 드래그로 순서 변경
    - 에디터를 통한 카드 데이터 관리:
        - 라벨
        - 설명
        - 진행률
        - 시작일
        - 종료일
        - 색상
        - 우선순위
        - 첨부파일(*files*, *pictures*)
        - *커스텀 필드*

- **컬럼** 및 **행** 관련 기능:
    - 새 컬럼 및 행 추가
    - 컬럼 및 행 삭제
    - 컬럼 및 행 이름 변경
    - 행 접기/펼치기

- [로컬라이제이션](guides/localization.md)
- [백엔드 연동](guides/working_with_server.md) (Go 및 Node)
- 크로스 브라우저 호환성
- 터치 지원