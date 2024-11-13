---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Stylization

Using Kanban, you can stylize **columns**, **rows** and **cards** appearance via the [`columnShape.css`](../../api/config/js_kanban_columnshape_config), [`rowShape.css`](../../api/config/js_kanban_rowshape_config) and [`cardShape.css`](../../api/config/js_kanban_cardshape_config) properties. These properties allow you to style columns, rows and cards conditionally.

You can also apply a custom css class to a separate **column**, **row** and **card** via the [`columns.css`](../../api/config/js_kanban_columns_config), [`rows.css`](../../api/config/js_kanban_rows_config) and [`cards.css`](../../api/config/js_kanban_cards_config) properties.

Besides, you can apply custom styles to any part of the Kanban interface to meet your project requirements. For this, the library provides a wide range of CSS variables. Note, that Kanban includes two types of variables:
- CSS variables related to **Kanban** style
- CSS variables related to the **WX** library style (*controls, calendars etc*)

:::info
Note, that **WX** library is used for inner processes only. It provides some small elements used in Kanban (*controls, calendars etc*)
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
Next versions of Kanban can bring some changes for the variables and their names. Please, do not forget to check the names after updating to the newer versions and modify them in your code to avoid problems with display of the component.
:::

## Built-in themes

You can use the [`theme`](../../api/config/js_kanban_theme_config) property or the [`setTheme()`](../../api/methods/js_kanban_settheme_method) method to apply one of the following themes: **material**, **willow** and **willow-dark**.

:::important
Besides using the `theme` property, you can also apply the needed theme via adding the corresponding *css* classes to the widget containers:

- **Material theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

or just include the needed theme on the page from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

In this snippet you can see how to apply the **willow-dark** theme to Kanban
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Scroll style

You can also apply a custom style to a scroll bar of Kanban. For this, you can use the `.wx-styled-scroll` CSS class. Before using it, check compatibility with the modern browsers [here](https://caniuse.com/css-scrollbar).

~~~html {4} title="index.html"
<!--container for Toolbar-->
<div id="toolbar"></div> //
<!--container for Kanban-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## Custom style

In this snippet you can see how to apply a custom style to Kanban

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Adaptivity

In this snippet you can see how to create adaptive version of Kanban using custom CSS styles

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](../customization)
