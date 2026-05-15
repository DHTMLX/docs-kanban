---
sidebar_label: 样式化
title: 样式化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解样式化内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# 样式化

您可以通过 CSS 类和 CSS 变量来设置 Kanban 的外观样式。以下属性可接受针对列、行和卡片的 CSS 类：

- [`columnShape.css`](api/config/js_kanban_columnshape_config.md)、[`rowShape.css`](api/config/js_kanban_rowshape_config.md)、[`cardShape.css`](api/config/js_kanban_cardshape_config.md) — 根据条目数据有条件地返回 CSS 类的函数
- [`columns.css`](api/config/js_kanban_columns_config.md)、[`rows.css`](api/config/js_kanban_rows_config.md)、[`cards.css`](api/config/js_kanban_cards_config.md) — 分配给单个条目的字符串 CSS 类

有关条件 `css` 函数的详细信息和代码示例，请参阅[条件 CSS 类](guides/customization.md#conditional-css-classes)。

以下代码片段将 CSS 类应用于特定的列、行和卡片：

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

除了按条目设置 CSS 外，Kanban 还提供用于主题化的 CSS 变量。变量分为两组：

- Kanban 变量 — 定义 Kanban 特有的样式
- WX 库变量 — 设置共享 UI 元素（控件、日历）的样式

:::info
WX 库驱动 Kanban 内部 UI 组件。请将 WX 变量视为 Kanban 样式的一部分。
:::

## 主题变量

在样式表中覆盖以下 CSS 变量以自定义 Material 主题：

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
    --wx-kanban-card-field-padding: 10px;
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
    --wx-kanban-editor-background: var(--wx-background);
    --wx-kanban-editor-top-border: var(--wx-border);
    --wx-kanban-editor-modal-width: 1000px;
    --wx-editor-right-background: rgba(0, 0, 0, 0.03);
    --wx-editor-cancel-background: rgba(0, 0, 0, 0.04);

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
变量名称可能在未来版本中发生变化。升级后请检查变量名称并在项目中更新相应样式。
:::

## 滚动条样式

将 `.wx-styled-scroll` CSS 类应用于 Kanban 容器以启用自定义滚动条样式。使用前请检查[浏览器兼容性](https://caniuse.com/css-scrollbar)：

~~~html {4} title="index.html"
<!-- container for Toolbar -->
<div id="toolbar"></div>
<!-- container for Kanban -->
<div id="root" class="wx-styled-scroll"></div>
~~~

## 自定义样式

以下演示为 Kanban 应用了自定义样式：

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 响应式布局

以下演示使用自定义 CSS 创建了响应式 Kanban 布局：

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**相关文章：** [定制化](guides/customization.md)
