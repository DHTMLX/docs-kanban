---
sidebar_label: rowShape
title: rowShape Config
description: Explore the rowShape config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try live demos and code examples, and download a free 30-day trial of DHTMLX Kanban.
---

# rowShape

### Description

@short: Optional. An object to customize how rows look and behave.

### Usage

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean, 
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void,
                data?: array // an array of menu subitems
            }, {...} // other item data
        ] | ({ row, rowIndex, rows, readonly }) => array | null
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### Parameters

The **rowShape** object lets you tweak how rows appear and behave by specifying these options:

- `menu` - (optional) settings for the rows’ context menu. This includes:
    - `show` - (optional) turns the row context menu on or off
    - `items` - (optional) an array defining the menu items for rows. Each item can include:
        - `id` - (optional) menu item ID. Use these IDs for built-in actions:
            - ***"set-edit"*** - edits the row name
            - ***"move-row:up"*** - moves the row up
            - ***"move-row:down"*** - moves the row down
            - ***"delete-row"*** - deletes the row

        - `icon` - (optional) icon class name for the menu item, compatible with icon fonts (like *mdi-delete*)
        - `text` - (optional) label for the menu item
        - `disabled` - (optional) whether the menu item is active or disabled based on a boolean
        - `onClick` - (optional) custom callback function with these arguments:
            - ***id*** - the menu item’s ID
            - ***item*** - the menu item’s data object
            - ***row*** - the target row’s data object

        - `data` - (optional) array of subitems for nested menus

    :::info
    The `menu.items` option can also be a custom function receiving:
    - ***row*** - the current row’s data object
    - ***rowIndex*** - the current row’s index
    - ***rows*** - array of all rows data
    - ***readonly*** - an object with readonly [state properties](api/internal/js_kanban_getstate_method.md)

    This function lets you customize the menu per row or hide it for specific rows by returning *null* or *false*:

    ~~~jsx {}
    items: ({ rowIndex }) => {
        if(rowIndex == 0){
            return null;
        } else {
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Rename" },
                {
                    id: "custom-delete-row",
                    icon: "wxi-delete",
                    text: "Remove row"
                },
                {
                    id: "custom-move-row:up",
                    icon: "wxi-arrow-up",
                    text: "Move up"
                }
            ];
        }
    }
    ~~~
    :::

- `css` - a function that returns a CSS class name to apply conditionally to rows
- `confirmDeletion` - (optional) enables or disables a confirmation dialog when deleting a row

### Default config

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, readonly }) => [
    { id: "set-edit", icon: "wxi-edit", text: "Rename" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "Move up",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "Move down",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "Delete" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### Example

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({ 
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, readonly }) => {
            if (rowIndex == 0){
                return false;
            } else {
                return [
                    {
                        id: "color",
                        text: "Color",
                        data: [
                            { 
                                id:"gray", 
                                text: "Gray",
                                onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                            },
                            { 
                                id:"yellow", 
                                text: "Yellow",
                                onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                            },
                            { 
                                id:"red", 
                                text: "Red",
                                onClick: ({ id, item, row }) => changeRowColor(row, "red")
                            }
                        ]
                    }
                ];
            }     
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape, 
    // other parameters
});
~~~

**Change log:**
- The ***css*** option was introduced in v1.4
- The ***menu.items[0].label*** option was replaced by ***menu.items[0].text*** in v1.4
- The ***menu.items[0].items*** option was replaced by ***menu.items[0].data*** in v1.4
- The ***menu.items[0].label*** and ***menu.items[0].items*** options were removed in v1.7
- The ***menu.items*** function was updated: the **store** parameter was replaced by **readonly** in v1.7

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [Kanban. Changing color of rows via custom menu](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)