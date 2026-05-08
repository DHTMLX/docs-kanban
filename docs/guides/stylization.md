---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Stylization

You can style the Kanban appearance through CSS classes and CSS variables. The following properties accept CSS classes for columns, rows, and cards:

- [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), [`cardShape.css`](api/config/js_kanban_cardshape_config.md) — functions that return a CSS class conditionally based on item data
- [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), [`cards.css`](api/config/js_kanban_cards_config.md) — string CSS class assigned to a single item

For details and code examples of the conditional `css` functions, see [Conditional CSS classes](guides/customization.md#conditional-css-classes).

The following code snippet applies a CSS class to a specific column, row, and card:

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

Beyond per-item CSS, Kanban exposes CSS variables for theming. Variables fall into two groups:

- Kanban variables — define Kanban-specific styles
- WX library variables — style shared UI elements (controls, calendars)

:::info
The WX library powers internal Kanban UI components. Treat WX variables as part of Kanban styling.
:::

## Theme variables

Override these CSS variables in your stylesheet to customize the Material theme:

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
Variable names may change in future versions. Check the names after upgrading and update the styles in your project.
:::

## Scroll style

Apply the `.wx-styled-scroll` CSS class to the Kanban container to enable a custom scrollbar style. Check [browser compatibility](https://caniuse.com/css-scrollbar) before using the class:

~~~html {4} title="index.html"
<!-- container for Toolbar -->
<div id="toolbar"></div>
<!-- container for Kanban -->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Custom style

The following demo applies a custom style to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Responsive layout

The following demo creates a responsive Kanban layout with custom CSS:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](guides/customization.md)
