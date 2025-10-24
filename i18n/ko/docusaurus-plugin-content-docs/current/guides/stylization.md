---
sidebar_label: 스타일링
title: 스타일링
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 스타일링에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 시도해보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 스타일링

Kanban을 사용하면 [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), [`cardShape.css`](api/config/js_kanban_cardshape_config.md) 속성을 통해 **컬럼**, **행**, **카드**의 외관을 스타일링할 수 있습니다. 이 속성들은 컬럼, 행, 카드에 조건부로 스타일을 적용할 수 있게 해줍니다.

또한, [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), [`cards.css`](api/config/js_kanban_cards_config.md) 속성을 통해 개별 **컬럼**, **행**, **카드**에 커스텀 css 클래스를 적용할 수도 있습니다.

이 외에도 프로젝트 요구사항에 맞게 Kanban 인터페이스의 어느 부분이든 커스텀 스타일을 적용할 수 있습니다. 이를 위해 라이브러리에서는 다양한 CSS 변수를 제공합니다. Kanban에는 다음 두 가지 유형의 변수가 포함되어 있습니다:
- **Kanban** 스타일과 관련된 CSS 변수
- **WX** 라이브러리 스타일과 관련된 CSS 변수 (*컨트롤, 캘린더 등*)

:::info
참고로, **WX** 라이브러리는 내부 프로세스에서만 사용됩니다. Kanban에서 사용되는 일부 작은 요소들(*컨트롤, 캘린더 등*)을 제공합니다.
:::

## 기본 스타일

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
    --wx-kanban-card-field-padding: 12px;
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
    --wx-kanban-editor-background: var(--wx-kanban-content-background);
    --wx-kanban-editor-top-border: none;

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
향후 Kanban의 버전에서는 변수 및 변수명이 변경될 수 있습니다. 새 버전으로 업데이트 한 후에는 변수명을 반드시 확인하고, 컴포넌트의 표시 문제를 방지하기 위해 코드에서 수정해주시기 바랍니다.
:::

## 스크롤 스타일

Kanban의 스크롤 바에도 커스텀 스타일을 적용할 수 있습니다. 이를 위해 `.wx-styled-scroll` CSS 클래스를 사용할 수 있습니다. 사용하기 전에 [여기](https://caniuse.com/css-scrollbar)에서 최신 브라우저와의 호환성을 확인하세요.

~~~html {4} title="index.html"
<!--Toolbar 컨테이너-->
<div id="toolbar"></div> //
<!--Kanban 컨테이너-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## 커스텀 스타일

이 스니펫에서는 Kanban에 커스텀 스타일을 적용하는 방법을 볼 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 반응형 스타일

이 스니펫에서는 커스텀 CSS 스타일을 사용하여 Kanban의 반응형 버전을 만드는 방법을 볼 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [커스터마이징](guides/customization.md)