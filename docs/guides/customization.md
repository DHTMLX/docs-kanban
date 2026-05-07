---
sidebar_label: Customization
title: Customization
description: You can learn about the customization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Customization

You can customize the Kanban appearance and behavior with the following properties:

- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — render cards with a custom HTML template
- [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) — modify the context menu for cards, columns, and rows
- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md), [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — change column header templates
- [`cardShape.css`](api/config/js_kanban_cardshape_config.md), [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) — apply CSS classes conditionally
- [`items`](api/config/toolbar_items_config.md) — change the Toolbar structure and controls
- CSS variables — adjust visual styles (see the [Stylization](guides/stylization.md) section)

## Custom cards

Use the [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) property to render cards with a custom HTML template. The property is a callback that returns the markup for each card.

The callback receives an object with the following parameters:

- `cardFields` — data object of the card
- `selected` — selected state of the card
- `dragging` — dragging state of the card
- `cardShape` — configuration object of the card

To embed a context menu trigger in a custom card template, render an icon element with the `data-menu-id=${cardFields.id}` attribute. The widget binds the menu to the trigger through this attribute.

The following demo applies a custom card template:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom context menu

Configure the context menu for cards, columns, and rows through the [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), and [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) properties. Each `menu.items` entry can use a built-in action ID to invoke a default operation, or define a custom `onClick` handler for any other behavior.

Built-in card menu actions ([`cardShape.menu`](api/config/js_kanban_cardshape_config.md)):

- `"set-edit"` — open the card editor
- `"delete-card"` — delete the card

Built-in column menu actions ([`columnShape.menu`](api/config/js_kanban_columnshape_config.md)):

- `"add-card"` — add a new card to the column
- `"set-edit"` — rename the column
- `"move-column:left"`, `"move-column:right"` — move the column left or right
- `"delete-column"` — delete the column

Built-in row menu actions ([`rowShape.menu`](api/config/js_kanban_rowshape_config.md)):

- `"set-edit"` — rename the row
- `"move-row:up"`, `"move-row:down"` — move the row up or down
- `"delete-row"` — delete the row

Set `menu.items` to a function to render a different menu per card, column, or row. Return `null` or `false` from the function to hide the menu for a specific item.

The following demo applies a custom context menu to columns and rows:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom column headers

The [`columnShape`](api/config/js_kanban_columnshape_config.md) property provides templates and behavior for column headers:

- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md) — HTML template of the column header in the expanded state
- [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — HTML template of the column header in the collapsed state
- [`columnShape.fixedHeaders`](api/config/js_kanban_columnshape_config.md) — freeze column headers during vertical scroll (default: `true`)

The following code snippet sets a custom header template with a collapse icon, label with card count, and menu trigger:

~~~jsx {5-21}
new kanban.Kanban("#root", {
    columns,
    cards,
    columnShape: {
        headerTemplate: kanban.template(column => `
            <div class="wx-collapse-icon" data-action="collapse">
                <i class="${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}"></i>
            </div>
            ${!column.column.collapsed
                ? `<div class="wx-label" data-action="rename">
                       ${column.column.label} (${column.columnState.cardsCount})
                   </div>
                   <div class="wx-menu" data-menu-id="${column.id}">
                       <i class="wxi-dots-h"></i>
                   </div>`
                : ""}
        `),
        collapsedTemplate: kanban.template(column => `
            <div class="wx-collapsed-label">${column.column.label}</div>
        `)
    }
});
~~~

:::tip
For `fixedHeaders` to take effect, set a fixed height on the Kanban container so the board scrolls vertically.
:::

## Conditional CSS classes

To apply a CSS class conditionally, pass a function to the `css` parameter of [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md), or [`rowShape`](api/config/js_kanban_rowshape_config.md). The function returns a class name based on the current data:

- [`cardShape.css: (card) => string`](api/config/js_kanban_cardshape_config.md) — class applied to a card
- [`columnShape.css: (column, cards) => string`](api/config/js_kanban_columnshape_config.md) — class applied to a column
- [`rowShape.css: (row, cards) => string`](api/config/js_kanban_rowshape_config.md) — class applied to a row

The following code snippet highlights overdue cards and underloaded columns:

~~~jsx {5,8}
new kanban.Kanban("#root", {
    columns,
    cards,
    cardShape: {
        css: (card) => card.end_date < new Date() ? "overdue" : ""
    },
    columnShape: {
        css: (column, cards) => cards.length < 5 ? "low-load" : ""
    }
});
~~~

## Custom Toolbar

Use the [`items`](api/config/toolbar_items_config.md) property to customize the Toolbar structure. The array defines which controls appear, their order, and their behavior. An entry can be:

- a built-in control: `"search"`, `"sort"`, `"undo"`, `"redo"`, `"addColumn"`, `"addRow"`, `"spacer"`
- an object that overrides the searchbar or sort control with custom options
- a custom control passed as a string identifier or a function

The following demo customizes the order of controls, the searchbar, the sort control, and a custom control:

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom styles

Change the values of CSS variables to customize the Kanban appearance. See the [Stylization](guides/stylization.md) section for the full list.

The following snippet applies custom styles to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
