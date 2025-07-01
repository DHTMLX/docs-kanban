---
sidebar_label: columnShape
title: columnShape Config
description: Discover the columnShape config in the DHTMLX JavaScript Kanban library docs. Explore developer guides and API references, test code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# columnShape

### Description

@short: Optional. Settings object to customize the look of columns

### Usage

```jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void
            },
            {...}
        ] | ({ column, columnIndex, columns, store }) => array | boolean
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "The HTML template of the column header in the expanded state";
    }),
    collapsedTemplate?: template(column => {
        return "The HTML template of the column header in the collapsed state";
    }),
    confirmDeletion?: boolean
};
```

### Parameters

To style the columns, the **columnShape** object supports these options:

- `menu` - (optional) settings for the column context menu. This includes:
  - `show` - (optional) toggles the column context menu on or off
  - `items` - (optional) an array defining menu items. Each item can have:
    - `id` - (optional) menu item ID. Use these values for built-in actions:
  - **_"add-card"_** - adds a new card
  - **_"set-edit"_** - edits the column name
  - **_"move-column:left"_** - moves the column left
  - **_"move-column:right"_** - moves the column right
  - **_"delete-column"_** - deletes the column - `icon` - (optional) icon class for the menu item, e.g., _mdi-delete_ - `text` - (optional) label for the menu item - `disabled` - (optional) sets if the menu item is active or disabled - `onClick` - (optional) callback with these arguments:
  - **_id_** - current menu item ID
  - **_item_** - current menu item data object
  - **_column_** - target column data object

:::info
You can also set `items` to a function receiving:

- **_column_** - current column data
- **_columnIndex_** - index of the current column
- **_columns_** - array of all columns data
- **_store_** - _dataStore_ object

This enables custom menus per column or hiding menus for certain columns by returning _null_ or _false_:

```jsx {}
items: ({ column, columnIndex, columns, store }) => {
  if (column.id === "inprogress") return null;

  if (column.id === "backlog")
    return [
      { id: "set-edit", icon: "wxi-edit", text: "Rename" },
      {
        id: "delete-card",
        icon: "wxi-delete",
        text: "Remove card",
      },
    ];
};
```

:::

- `fixedHeaders` - (optional) keeps column headers visible during vertical scrolling (_true_ by default). Note: scrolling must be enabled in Kanban (height limited).
- `css` - (optional) function returning a CSS class for conditional column styling
- `headerTemplate` - (optional) HTML template for column headers when expanded
- `collapsedTemplate` - (optional) HTML template for column headers when collapsed
- `confirmDeletion` - (optional) toggles the confirmation dialog for deleting a column

### Default config

```jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
  { id: "add-card", icon: "wxi-plus", text: "Add new card" },
  { id: "set-edit", icon: "wxi-edit", text: "Rename" },
  {
    id: "move-column:left",
    icon: "wxi-arrow-left",
    text: "Move left",
    disabled: columnIndex <= 0,
  },
  {
    id: "move-column:right",
    icon: "wxi-arrow-right",
    text: "Move right",
    disabled: columnIndex >= columns.length - 1,
  },
  { id: "delete-column", icon: "wxi-delete", text: "Delete" },
];
const columnShape = {
  menu: {
    show: true,
    items: getDefaultColumnMenuItems,
  },
  fixedHeaders: true,
  confirmDeletion: true,
};
```

### Example

```jsx {1-58,64}
const columnShape = {
  menu: {
    show: true,
    items: [
      {
        id: "color",
        text: "Color",
        items: [
          {
            id: "yellow",
            text: "Yellow",
            onClick: ({ column }) => changeColumnColor(column, "yellow"),
          },
          {
            id: "red",
            text: "Red",
            onClick: ({ column }) => changeColumnColor(column, "red"),
          },
          {
            id: "green",
            text: "Green",
            onClick: ({ column }) => changeColumnColor(column, "green"),
          },
        ],
      },
    ],
  },
  fixedHeaders: false,
  css: (column, cards) =>
    column.id == "inprogress" && cards.length < 5 ? "green" : "red",
  headerTemplate: template((column) => {
    return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                  !column.column.collapsed
                    ? `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                    : ""
                }
                ${
                  !column.column.collapsed
                    ? `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                    : ""
                }`;
  }),
  collapsedTemplate: template((column) => {
    return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                      column.columnState?.cardsCount
                    })</div>
                </div>`;
  }),
  confirmDeletion: true,
};

new kanban.Kanban("#root", {
  cards,
  columns,
  rows,
  columnShape,
  // other parameters
});
```

**Change log:**

- The **_css_** option was added in v1.4
- The **_menu.items[0].label_** was renamed to **_menu.items[0].text_** in v1.4
- The **_fixedHeaders_** option was added in v1.5
- The **_headerTemplate_** and **_collapsedTemplate_** options were added in v1.6

**Related articles:** [Configuration](/guides/configuration)

**Related samples:**

- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Template for column headers](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
