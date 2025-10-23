---
sidebar_label: 样式化
title: 样式化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解样式化内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# 样式化

使用 Kanban，您可以通过 [`columnShape.css`](api/config/js_kanban_columnshape_config.md)、[`rowShape.css`](api/config/js_kanban_rowshape_config.md) 和 [`cardShape.css`](api/config/js_kanban_cardshape_config.md) 属性对**列**、**行**和**卡片**的外观进行样式化。这些属性允许您有条件地对列、行和卡片进行样式设置。

您还可以通过 [`columns.css`](api/config/js_kanban_columns_config.md)、[`rows.css`](api/config/js_kanban_rows_config.md) 和 [`cards.css`](api/config/js_kanban_cards_config.md) 属性为单独的**列**、**行**和**卡片**应用自定义 css 类。

此外，您可以根据项目需求自定义 Kanban 界面的任意部分的样式。为此，库提供了丰富的 CSS 变量。请注意，Kanban 包含两类变量：
- 与**Kanban**样式相关的 CSS 变量
- 与**WX**库样式相关的 CSS 变量（*控件、日历等*）

:::info
请注意，**WX** 库仅用于内部处理。它为 Kanban 提供了一些小型元素（*控件、日历等*）
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
后续版本的 Kanban 可能会对变量及其名称进行调整。请在升级到新版本后，务必检查变量名称并在您的代码中进行相应修改，以避免组件显示出现问题。
:::

## 滚动条样式

您还可以为 Kanban 的滚动条应用自定义样式。为此，可以使用 `.wx-styled-scroll` CSS 类。在使用前，请在[这里](https://caniuse.com/css-scrollbar)检查与现代浏览器的兼容性。

~~~html {4} title="index.html"
<!--工具栏容器-->
<div id="toolbar"></div> //
<!--Kanban 容器-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## 自定义样式

在下面的代码片段中，您可以看到如何为 Kanban 应用自定义样式

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自适应

在下面的代码片段中，您可以看到如何通过自定义 CSS 样式创建 Kanban 的自适应版本

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文章：** [定制化](guides/customization.md)