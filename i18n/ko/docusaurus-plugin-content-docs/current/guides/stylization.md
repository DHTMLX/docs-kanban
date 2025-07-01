---
sidebar_label: 스타일링
title: 스타일링
description: DHTMLX JavaScript Kanban 라이브러리의 스타일링에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 직접 시험해보고, 30일 무료 평가판을 다운로드 할 수 있습니다.
---

# 스타일링

Kanban에서는 [`columnShape.css`](/api/config/js_kanban_columnshape_config), [`rowShape.css`](/api/config/js_kanban_rowshape_config), [`cardShape.css`](/api/config/js_kanban_cardshape_config) 속성을 사용하여 **컬럼**, **행**, **카드**의 외형을 손쉽게 커스터마이즈할 수 있습니다. 이러한 옵션을 통해 컬럼, 행, 카드에 조건부 스타일을 적용할 수 있습니다.

더 나아가, [`columns.css`](/api/config/js_kanban_columns_config), [`rows.css`](/api/config/js_kanban_rows_config), [`cards.css`](/api/config/js_kanban_cards_config) 속성으로 특정 **컬럼**, **행**, **카드**에 직접 CSS 클래스를 추가할 수도 있습니다.

프로젝트의 요구에 맞게 Kanban 인터페이스의 모든 부분을 자유롭게 스타일링할 수 있습니다. 이를 위해 다양한 CSS 변수가 제공됩니다. Kanban에는 두 가지 주요 변수 유형이 있습니다:
- **Kanban** 스타일링용 CSS 변수
- **WX** 라이브러리에서 제공하는 CSS 변수 (컨트롤, 캘린더 등 UI 요소에 사용)

:::info
**WX** 라이브러리는 내부적으로 일부 UI 요소(컨트롤, 캘린더 등)를 처리합니다. Kanban에서 일부 컨트롤, 캘린더 UI 등에 사용됩니다.
:::

## 기본 스타일

~~~css
.wx-material-theme {
    /* WX library css variables */
    --wx-field-width: 100%;
    --wx-theme-name: material;
    /* end of WX library css variables */

    /* Kanban  css variables*/
    --wx-kanban-background: #f1f1f1;

    /*  column styles */
    --wx-kanban-column-width: 300px;
    --wx-kanban-column-height: 300px;

    /* toolbar styles */
    --wx-kanban-toolbar-height: 56px;
    --wx-kanban-toolbar-align: center;
    --wx-kanban-toolbar-justify: flex-start;
    --wx-kanban-toolbar-control-hover: rgba(0, 0, 0, 0.07);
    --wx-kanban-toolbar-control-active: rgba(0, 0, 0, 0.15);
    --wx-kanban-toolbar-border: var(--wx-border);

    /* card styles */
    --wx-kanban-card-field-padding: 12px;
    --wx-kanban-content-background: var(--wx-background);
    --wx-kanban-card-border: var(--wx-border);
    --wx-kanban-card-border-radius: 6px;
    --wx-kanban-header-border-radius: var(--wx-kanban-card-border-radius);

    /* row styles */
    --wx-kanban-row-line: var(--wx-border);

    /* user icon styles */
    --wx-kanban-user-icon-size: 36px;

    /* editor styles */
    --wx-kanban-header-height: 64px;
    --wx-kanban-editor-width: 569px;
    --wx-kanban-editor-height: auto;
    --wx-kanban-editor-x-padding: 20px;
    --wx-kanban-editor-background: var(--wx-kanban-content-background);
    --wx-kanban-editor-top-border: none;

    /* column styles */
    --wx-kanban-over-limit-color: var(--wx-color-danger);
    --wx-kanban-collapsed-column-width: 44px;
    --wx-kanban-z-index: 1;

    /* progress control styles*/
    --wx-progress-height: 4px;
    --wx-kanban-progress-inactive-color: #dbdbdb;

    /* menu styles */
    --wx-kanban-menu-min-width: 100px;

    /* box and shadow styles*/
    --wx-kanban-shadow: none;
    --wx-kanban-box-border: var(--wx-border);

    /* collapsed column styles */
    --wx-kanban-collapsed-padding: var(--wx-padding);
    --wx-kanban-collapsed-margin: 0px;
    --wx-kanban-collapsed-background: transparent;
    --wx-kanban-collapsed-background-hover: #dfdfdf;

/* End of Kanban  CSS variables*/
}
~~~

:::tip 참고
앞으로 Kanban의 릴리즈에서 일부 변수명이 변경되거나 조정될 수 있습니다. 업데이트 후에는 변수명을 다시 한 번 확인하고 스타일이 제대로 적용되는지 점검하는 것이 좋습니다.
:::

## 내장 테마

[`theme`](/api/config/js_kanban_theme_config) 속성 사용 또는 [`setTheme()`](/api/methods/js_kanban_settheme_method) 메서드 호출로 몇 가지 내장 테마를 적용할 수 있습니다. 사용 가능한 테마는 **material**, **willow**, **willow-dark**가 있습니다.

:::important
`theme` 속성 외에, Kanban 컨테이너에 해당 *css* 클래스를 직접 추가하여 테마를 변경할 수 있습니다:

- **Material 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

원한다면, skins 폴더에서 원하는 테마의 CSS 파일을 직접 불러와도 됩니다:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

아래는 **willow-dark** 테마 적용 예시입니다:
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 스크롤 스타일

Kanban의 스크롤바 역시 스타일링이 가능합니다. `.wx-styled-scroll` CSS 클래스를 사용하면 됩니다. 이 기능을 사용할 때는 [브라우저 지원](https://caniuse.com/css-scrollbar)을 확인하세요.

~~~html {4} title="index.html"
<!--Toolbar 컨테이너-->
<div id="toolbar"></div> //
<!--Kanban 컨테이너-->
<div id="root" class="wx-styled-scroll"></div>
~~~

## 사용자 정의 스타일

아래는 Kanban에 커스텀 스타일을 적용하는 방법 예제입니다:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 반응형 디자인

이 예제는 커스텀 CSS 스타일로 Kanban이 어떻게 반응형으로 구현될 수 있는지 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [커스터마이제이션](../customization)
