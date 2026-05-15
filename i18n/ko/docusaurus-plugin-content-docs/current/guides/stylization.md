---
sidebar_label: 스타일링
title: 스타일링
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 스타일링에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 시도해보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 스타일링

CSS 클래스와 CSS 변수를 통해 Kanban의 외관을 스타일링할 수 있습니다. 다음 속성들은 컬럼, 행, 카드에 대한 CSS 클래스를 허용합니다:

- [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), [`cardShape.css`](api/config/js_kanban_cardshape_config.md) — 아이템 데이터를 기반으로 조건부로 CSS 클래스를 반환하는 함수
- [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), [`cards.css`](api/config/js_kanban_cards_config.md) — 단일 아이템에 할당되는 문자열 CSS 클래스

조건부 `css` 함수의 자세한 내용과 코드 예제는 [조건부 CSS 클래스](guides/customization.md#conditional-css-classes)를 참조하세요.

다음 코드 스니펫은 특정 컬럼, 행, 카드에 CSS 클래스를 적용합니다:

~~~jsx
const columns = [
    { id: "backlog", label: "Backlog", css: "highlighted" },
    // other columns
];
const rows = [
    { id: "feature", label: "Feature", css: "row-feature" },
    // other rows
];
const cards = [
    { id: 1, label: "Task", column: "backlog", css: "urgent" },
    // other cards
];
~~~

아이템별 CSS 외에도 Kanban은 테마 설정을 위한 CSS 변수를 제공합니다. 변수는 두 그룹으로 나뉩니다:

- Kanban 변수 — Kanban 전용 스타일 정의
- WX 라이브러리 변수 — 공유 UI 요소 스타일 (*컨트롤, 캘린더 등*)

:::info
WX 라이브러리는 Kanban 내부 UI 컴포넌트를 구동합니다. WX 변수는 Kanban 스타일링의 일부로 취급하세요.
:::

## 테마 변수

Material 테마를 커스터마이징하려면 스타일시트에서 다음 CSS 변수를 재정의하세요:

~~~css
.wx-material-theme {
    /* WX 라이브러리 css 변수 */
    --wx-field-width: 100%;
    --wx-theme-name: material;
    /* WX 라이브러리 css 변수 끝 */

    /* Kanban css 변수 */
    --wx-kanban-background: #f1f1f1;

    /*  컬럼 스타일 */
    --wx-kanban-column-width: 300px;
    --wx-kanban-column-height: 300px;

    /* 툴바 스타일 */
    --wx-kanban-toolbar-height: 56px;
    --wx-kanban-toolbar-align: center;
    --wx-kanban-toolbar-justify: flex-start;
    --wx-kanban-toolbar-control-hover: rgba(0, 0, 0, 0.07);
    --wx-kanban-toolbar-control-active: rgba(0, 0, 0, 0.15);
    --wx-kanban-toolbar-border: var(--wx-border);

    /* 카드 스타일 */
    --wx-kanban-card-field-padding: 10px;
    --wx-kanban-content-background: var(--wx-background);
    --wx-kanban-card-border: var(--wx-border);
    --wx-kanban-card-border-radius: 6px;
    --wx-kanban-header-border-radius: var(--wx-kanban-card-border-radius);

    /* 행 스타일 */
    --wx-kanban-row-line: var(--wx-border);

    /* 사용자 아이콘 스타일 */
    --wx-kanban-user-icon-size: 36px;

    /* 에디터 스타일 */
    --wx-kanban-header-height: 64px;
    --wx-kanban-editor-width: 569px;
    --wx-kanban-editor-height: auto;
    --wx-kanban-editor-x-padding: 20px;
    --wx-kanban-editor-background: var(--wx-background);
    --wx-kanban-editor-top-border: var(--wx-border);
    --wx-kanban-editor-modal-width: 1000px;
    --wx-editor-right-background: rgba(0, 0, 0, 0.03);
    --wx-editor-cancel-background: rgba(0, 0, 0, 0.04);

    /* 컬럼 스타일 */
    --wx-kanban-over-limit-color: var(--wx-color-danger);
    --wx-kanban-collapsed-column-width: 44px;
    --wx-kanban-z-index: 1;

    /* 프로그레스 컨트롤 스타일 */
    --wx-progress-height: 4px;
    --wx-kanban-progress-inactive-color: #dbdbdb;

    /* 메뉴 스타일 */
    --wx-kanban-menu-min-width: 100px;

    /* 박스 및 그림자 스타일 */
    --wx-kanban-shadow: none;
    --wx-kanban-box-border: var(--wx-border);

    /* 접힌 컬럼 스타일 */
    --wx-kanban-collapsed-padding: var(--wx-padding);
    --wx-kanban-collapsed-margin: 0px;
    --wx-kanban-collapsed-background: transparent;
    --wx-kanban-collapsed-background-hover: #dfdfdf;

/* Kanban CSS 변수 끝 */
}
~~~

:::tip 참고
변수명은 향후 버전에서 변경될 수 있습니다. 업그레이드 후 변수명을 확인하고 프로젝트의 스타일을 업데이트하세요.
:::

## 스크롤 스타일

Kanban 컨테이너에 `.wx-styled-scroll` CSS 클래스를 적용하여 커스텀 스크롤바 스타일을 활성화할 수 있습니다. 클래스를 사용하기 전에 [브라우저 호환성](https://caniuse.com/css-scrollbar)을 확인하세요:

~~~html {4} title="index.html"
<!-- container for Toolbar -->
<div id="toolbar"></div>
<!-- container for Kanban -->
<div id="root" class="wx-styled-scroll"></div>
~~~

## 커스텀 스타일

다음 데모에서는 Kanban에 커스텀 스타일을 적용하는 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 반응형 레이아웃

다음 데모에서는 커스텀 CSS를 사용하여 Kanban의 반응형 레이아웃을 만드는 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [커스터마이징](guides/customization.md)
