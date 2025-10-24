---
sidebar_label: 样式化
title: 样式化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解样式化相关内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天试用版。
---

# 样式化

借助 Kanban，您可以非常轻松地通过 [`columnShape.css`](/api/config/js_kanban_columnshape_config)、[`rowShape.css`](/api/config/js_kanban_rowshape_config) 和 [`cardShape.css`](/api/config/js_kanban_cardshape_config) 属性自定义**列**、**行**和**卡片**的外观。这些选项允许您为列、行和卡片添加条件样式。

如果您需要更进一步的自定义，也可以通过 [`columns.css`](/api/config/js_kanban_columns_config)、[`rows.css`](/api/config/js_kanban_rows_config) 和 [`cards.css`](/api/config/js_kanban_cards_config) 属性，为任意特定的**列**、**行**或**卡片**添加自定义 CSS 类。

您还可以灵活地对 Kanban 界面的任何部分进行样式调整，以满足项目需求。Kanban 提供了大量 CSS 变量用于样式设置。主要有两类变量:
- 用于**Kanban** 样式化的 CSS 变量
- 来源于 **WX** 库的 CSS 变量（涵盖控件、日历等 UI 元素）

:::info
**WX** 库在内部用于部分功能。它负责 Kanban 中诸如控件和日历等小型 UI 组件的实现。
:::

## 默认样式

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

:::tip 注意
未来 Kanban 的版本可能会调整或重命名某些变量。建议您在升级后检查变量名称，确保您的样式依然生效。
:::

## 内置主题

您可以通过设置 [`theme`](/api/config/js_kanban_theme_config) 属性或调用 [`setTheme()`](/api/methods/js_kanban_settheme_method) 方法，使用内置主题。目前可用的主题有 **material**、**willow** 和 **willow-dark**。

:::important
除了通过 `theme` 属性切换主题外，您也可以直接为 Kanban 容器添加对应的 *css* 类名来切换主题:

- **Material 主题**
~~~html {}
    <!-- Kanban 工具栏 -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban 容器 -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow 主题**
~~~html {}
    <!-- Kanban 工具栏 -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban 容器 -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark 主题**
~~~html {}
    <!-- Kanban 工具栏 -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban 容器 -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

另外，您也可以直接引入 skins 目录下的对应主题 CSS 文件:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

下面是一个展示 **willow-dark** 主题效果的示例:
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 滚动条样式

Kanban 的滚动条也可以自定义样式。只需为相应容器添加 `.wx-styled-scroll` CSS 类即可。在依赖此功能前，请确保查阅 [浏览器支持情况](https://caniuse.com/css-scrollbar)。

~~~html {4} title="index.html"
<!--工具栏容器-->
<div id="toolbar"></div> //
<!--Kanban 容器-->
<div id="root" class="wx-styled-scroll"></div>
~~~

## 自定义样式

下面示例展示了如何为 Kanban 添加自定义样式:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 响应式设计

此示例展示了如何通过自定义 CSS 样式让 Kanban 实现响应式布局:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文档:** [自定义](../customization)
