---
sidebar_label: rowShape
title: rowShape Config
description: The rowShape config in the DHTMLX JavaScript Kanban library lets you adjust how rows look. Check out the developer guides and API reference, test code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# rowShape

### Description

@short: Optional. An object with settings to customize the appearance of rows

### Usage

```jsx {}
rowShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void
            }, {...} // other item data
        ] | ({ row, rowIndex, rows, store }) => array | boolean
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
```

### Parameters

To control how rows appear, the **rowShape** object supports these options:

- `menu` - (optional) settings for the row context menu. It includes:
  - `show` - (optional) toggles the row context menu on or off
  - `items` - (optional) an array of objects defining menu items for rows. Each item can have:
    - `id` - (optional) menu item ID. Use these values for built-in actions:
  - **_"set-edit"_** - allows editing the row name
  - **_"move-row:up"_** - moves the row up
  - **_"move-row:down"_** - moves the row down
  - **_"delete-row"_** - deletes the row

        - `icon` - (optional) icon class name for the menu item (e.g., *mdi-delete*)
        - `text` - (optional) the menu item's label
        - `disabled` - (optional) whether the menu item is active or disabled (boolean value)
        - `onClick` - (optional) custom callback function receiving:

  - **_id_** - current menu item ID
  - **_item_** - current menu item data
  - **_row_** - target row data

:::info
The `items` parameter can also be a custom function with these arguments:

- **_row_** - current row data
- **_rowIndex_** - current row's index
- **_rows_** - array of all rows
- **_store_** - the _dataStore_ object

This function gives you the flexibility to customize the menu for specific rows or disable it entirely (by returning _null_ or _false_):

```jsx {}
items: ({ row, rowIndex, rows, store }) => {
  if (rowIndex == 0) return null;
  return [
    { id: "set-edit", icon: "wxi-edit", text: "Rename" },
    {
      id: "custom-delete-row",
      icon: "wxi-delete",
      text: "Remove row",
    },
    {
      id: "custom-move-row:up",
      icon: "wxi-arrow-up",
      text: "Move up",
    },
  ];
};
```

:::

- `css` - a function that returns a CSS class to apply conditionally to rows
- `confirmDeletion` - (optional) enables or disables a confirmation dialog when deleting rows

### Default config

```jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, store }) => [
  { id: "set-edit", icon: "wxi-edit", text: "Rename" },
  {
    id: "move-row:up",
    icon: "wxi-arrow-up",
    text: "Move up",
    disabled: rowIndex <= 0,
  },
  {
    id: "move-row:down",
    icon: "wxi-arrow-down",
    text: "Move down",
    disabled: rowIndex >= rows.length - 1,
  },
  { id: "delete-row", icon: "wxi-delete", text: "Delete" },
];
const rowShape = {
  menu: {
    show: true,
    items: getDefaultRowMenuItems,
  },
  confirmDeletion: true,
};
```

### Example

```jsx {10-43,48}
const changeRowColor = (row, cssClass) =>
  board.updateRow({
    id: row.id,
    row: {
      css: cssClass,
      collapsed: false,
    },
    replace: false,
  });

const rowShape = {
  menu: {
    show: true,
    items: ({ row, rowIndex, rows, store }) => {
      if (rowIndex == 0) return false;
      return [
        {
          id: "color",
          text: "Color",
          items: [
            {
              id: "gray",
              text: "Gray",
              onClick: ({ id, item, row }) => changeRowColor(row, "gray"),
            },
            {
              id: "yellow",
              text: "Yellow",
              onClick: ({ id, item, row }) => changeRowColor(row, "yellow"),
            },
            {
              id: "red",
              text: "Red",
              onClick: ({ id, item, row }) => changeRowColor(row, "red"),
            },
          ],
        },
      ];
    },
  },
  css: (row, cards) => (row.id == "task" && cards.length < 3 ? "green" : "red"),
  confirmDeletion: false,
};

new kanban.Kanban("#root", {
  cards,
  rows,
  rows,
  rowShape,
  // other parameters
});
```

**Change log:**

- The **_css_** parameter was introduced in v1.4
- The **_menu.items[0].label_** parameter was renamed to **_menu.items[0].text_** in v1.4

**Related articles:** [Configuration](/guides/configuration)

**Related sample:** [Kanban. Changing color of rows via custom menu](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
