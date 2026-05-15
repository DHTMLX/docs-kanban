---
sidebar_label: 사용자 정의
title: 사용자 정의
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 사용자 정의에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 시도해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드해보세요.
---

# 사용자 정의

다음 속성을 사용하여 Kanban의 외관과 동작을 사용자 정의할 수 있습니다:

- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — 사용자 정의 HTML 템플릿으로 카드를 렌더링합니다
- [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) — 카드, 컬럼, 행의 컨텍스트 메뉴를 수정합니다
- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md), [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — 컬럼 헤더 템플릿을 교체합니다
- [`cardShape.css`](api/config/js_kanban_cardshape_config.md), [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) — 조건부로 CSS 클래스를 적용합니다
- [`items`](api/config/toolbar_items_config.md) — 툴바 구조를 재배치하고 사용자 정의 컨트롤을 추가합니다
- CSS 변수 — 시각적 스타일을 조정합니다([Stylization](guides/stylization.md) 섹션 참고)

## 사용자 정의 카드 {#custom-cards}

[`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 속성을 사용하여 사용자 정의 HTML 템플릿으로 카드를 렌더링합니다. 콜백 함수는 각 카드의 마크업을 반환합니다.

콜백 함수는 다음 매개변수를 가진 객체를 받습니다:

- `cardFields` — 카드 데이터
- `selected` — 카드 선택 여부
- `dragging` — 카드 드래그 중 여부
- `cardShape` — 카드 설정

사용자 정의 카드 템플릿에 컨텍스트 메뉴 트리거를 포함하려면, 메뉴 아이콘을 `data-menu-id=${cardFields.id}` 속성을 가진 `<div>`로 감싸세요(기본 제공 카드와 동일한 구조). 위젯은 이 속성을 통해 래퍼에 메뉴를 바인딩합니다.

다음 데모는 사용자 정의 카드 템플릿을 적용한 예시입니다:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 컨텍스트 메뉴

[`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) 속성을 통해 카드, 컬럼, 행의 컨텍스트 메뉴를 설정합니다. 각 `menu.items` 항목은 기본 제공 액션 ID를 사용하여 기본 작업을 호출하거나, 다른 동작을 위한 사용자 정의 `onClick` 핸들러를 정의할 수 있습니다.

### `cardShape.menu`

기본적으로 카드 메뉴에는 **복제** 및 **삭제** 옵션이 표시됩니다. 사용 가능한 기본 제공 액션 ID:

- `"duplicate-card"` — 카드 복제
- `"delete-card"` — 카드 삭제

### `columnShape.menu`

- `"add-card"` — 컬럼에 새 카드 추가
- `"set-edit"` — 컬럼 이름 변경
- `"move-column:left"`, `"move-column:right"` — 컬럼을 왼쪽 또는 오른쪽으로 이동
- `"delete-column"` — 컬럼 삭제

### `rowShape.menu`

- `"set-edit"` — 행 이름 변경
- `"move-row:up"`, `"move-row:down"` — 행을 위 또는 아래로 이동
- `"delete-row"` — 행 삭제

`menu.items`에 함수를 설정하면 카드, 컬럼, 행별로 다른 메뉴를 렌더링할 수 있습니다. 특정 항목에서 메뉴를 숨기려면 함수에서 `null` 또는 `false`를 반환하세요.

다음 데모는 사용자 정의 컨텍스트 메뉴를 적용한 예시입니다:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 컬럼 헤더

[`columnShape`](api/config/js_kanban_columnshape_config.md) 속성은 컬럼 헤더에 대한 템플릿과 동작을 제공합니다:

- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md) — 확장 상태의 컬럼 헤더 HTML 템플릿
- [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — 축소 상태의 컬럼 헤더 HTML 템플릿
- [`columnShape.fixedHeaders`](api/config/js_kanban_columnshape_config.md) — 세로 스크롤 시 컬럼 헤더 고정(기본값: `true`)

다음 코드 예제는 접기 아이콘, 카드 수가 포함된 레이블, 메뉴 트리거를 가진 사용자 정의 헤더 템플릿을 설정합니다:

~~~jsx {5-21}
new kanban.Kanban("#root", {
    columns,
    cards,
    columnShape: {
        headerTemplate: kanban.template(({ column, columnState }) => {
            return `<div class="wx-collapse-icon" data-action="collapse">
                        <i class="${column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}"></i>
                    </div>
                    ${!column.collapsed
                        ? `<div class="wx-label" data-action="rename">
                                ${column.label} (${columnState.cardsCount})
                            </div>
                            <div class="wx-menu" data-menu-id="${column.id}">
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""}`;
        }),
        collapsedTemplate: kanban.template(({ column }) => `<div class="wx-collapsed-label">${column.label}</div>`)
    }
});
~~~

:::tip
`fixedHeaders`가 적용되려면, 보드가 세로로 스크롤될 수 있도록 Kanban 컨테이너에 고정 높이를 설정하세요.
:::

## 조건부 CSS 클래스 {#conditional-css-classes}

CSS 클래스를 조건부로 적용하려면 [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md), [`rowShape`](api/config/js_kanban_rowshape_config.md)의 `css` 매개변수에 함수를 전달하세요. 함수는 현재 데이터를 기반으로 클래스 이름을 반환합니다:

- [`cardShape.css: (card) => string`](api/config/js_kanban_cardshape_config.md) — 카드에 적용할 클래스
- [`columnShape.css: (column, cards) => string`](api/config/js_kanban_columnshape_config.md) — 컬럼에 적용할 클래스
- [`rowShape.css: (row, cards) => string`](api/config/js_kanban_rowshape_config.md) — 행에 적용할 클래스

다음 코드 예제는 기한이 지난 카드와 카드 수가 적은 컬럼을 강조 표시합니다:

~~~jsx {5,8}
new kanban.Kanban("#root", {
    columns,
    cards,
    cardShape: {
        css: (card) => card.end_date < new Date() ? "overdue" : ""
    },
    columnShape: {
        css: (column, cards) => cards.length < 5 ? "low-load" : ""
    }
});
~~~

## 사용자 정의 툴바 {#custom-toolbar}

[`items`](api/config/toolbar_items_config.md) 속성을 사용하여 툴바 구조를 사용자 정의합니다. 배열은 표시될 컨트롤, 순서 및 동작을 정의합니다. 각 항목은 다음과 같을 수 있습니다:

- 기본 제공 컨트롤: `"search"`, `"sort"`, `"undo"`, `"redo"`, `"addColumn"`, `"addRow"`, `"spacer"`
- 사용자 정의 옵션으로 검색바 또는 정렬 컨트롤을 재정의하는 객체
- 문자열 식별자 또는 함수로 전달된 사용자 정의 컨트롤

다음 데모는 컨트롤 순서, 검색바, 정렬 컨트롤, 사용자 정의 컨트롤을 사용자 정의한 예시입니다:

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 스타일

CSS 변수 값을 변경하여 Kanban의 외관을 사용자 정의합니다. 전체 목록은 [Stylization](guides/stylization.md) 섹션을 참고하세요.

다음 예제에서는 Kanban에 사용자 정의 스타일을 적용하는 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
