---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Stylization

With Kanban, it’s easy to tweak the look of **columns**, **rows**, and **cards** by using the [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), and [`cardShape.css`](api/config/js_kanban_cardshape_config.md) properties. These options let you style columns, rows, and cards based on certain conditions.

If you want to add a custom CSS class to a specific **column**, **row**, or **card**, you can do that with the [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), and [`cards.css`](api/config/js_kanban_cards_config.md) properties.

It’s also possible to add your own styles to any part of the Kanban interface to better fit your project’s needs. The library comes with lots of CSS variables for easy customization. There are two main sets of variables:
- CSS variables for the **Kanban** style
- CSS variables for the **WX** library style (like controls, calendars, etc.)

:::info
The **WX** library is used under the hood for some internal features. It covers smaller elements in Kanban, such as controls and calendars.
:::

## Default style

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

:::tip Note
Future Kanban releases might update some variables or their names. It’s a good idea to double-check the variable names after upgrading to a new version and update your code if needed to make sure everything displays correctly.
:::

## Scroll style

The scroll bar in Kanban can be styled too. Just use the `.wx-styled-scroll` CSS class. Before adding it, it’s worth checking if it works with the browsers you’re targeting — you can do that [here](https://caniuse.com/css-scrollbar).

~~~html {4} title="index.html"
<!--container for Toolbar-->
<div id="toolbar"></div> //
<!--container for Kanban-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## Custom style

Here’s a snippet that shows how to set up a custom style for Kanban.

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Adaptivity

This snippet demonstrates how to make Kanban adapt to different screen sizes using custom CSS.

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](guides/customization.md)