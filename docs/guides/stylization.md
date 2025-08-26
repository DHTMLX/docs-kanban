---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Stylization

With Kanban, it's pretty easy to customize how **columns**, **rows**, and **cards** look by using the [`columnShape.css`](/api/config/js_kanban_columnshape_config), [`rowShape.css`](/api/config/js_kanban_rowshape_config), and [`cardShape.css`](/api/config/js_kanban_cardshape_config) properties. These options let you add conditional styles to columns, rows, and cards.

If you want to go further, you can add your own CSS classes to any specific **column**, **row**, or **card** using the [`columns.css`](/api/config/js_kanban_columns_config), [`rows.css`](/api/config/js_kanban_rows_config), and [`cards.css`](/api/config/js_kanban_cards_config) properties.

You also have the flexibility to style any part of the Kanban interface to match your project's needs. There are lots of CSS variables available for this. Kanban has two main types of variables:
- CSS variables for **Kanban** styling
- CSS variables from the **WX** library (these cover things like controls, calendars, and other UI elements)

:::info
The **WX** library is used behind the scenes for some internal pieces. It handles small parts of the UI in Kanban, like controls and calendars.
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
Future releases of Kanban might tweak or rename some variables. It's a good idea to double-check variable names after an update and make sure your styles still work as expected.
:::

## Built-in themes

There are a few built-in themes you can use by setting the [`theme`](/api/config/js_kanban_theme_config) property or calling the [`setTheme()`](/api/methods/js_kanban_settheme_method) method. Available themes include **material**, **willow**, and **willow-dark**.

:::important
As an alternative to the `theme` property, you can switch themes by adding the right *css* class to your Kanban containers:

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

If you prefer, you can also just include the CSS file from the skins folder for the theme you want:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

Here's a quick example showing the **willow-dark** theme in action:
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Scroll style

Kanban's scroll bar can be styled too. To do this, just use the `.wx-styled-scroll` CSS class. Make sure to check [browser support](https://caniuse.com/css-scrollbar) for custom scrollbars before you rely on this feature.

~~~html {4} title="index.html"
<!--container for Toolbar-->
<div id="toolbar"></div> //
<!--container for Kanban-->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Custom style

Here's an example that shows how to add your own custom style to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Adaptivity

This example demonstrates how Kanban can be made adaptive with the help of custom CSS styles:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](/guides/customization)
