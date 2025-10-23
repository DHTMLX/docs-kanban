---
sidebar_label: columnShape
title: columnShape Config
description: Discover the columnShape config in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code examples and live demos, and get a free 30-day evaluation version of DHTMLX Kanban.
---

# columnShape

### Description

@short: Optional. A settings object to customize the appearance of columns.

### Usage

~~~jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void,
                data?: array // an array of menu subitems
            }, 
            {...}
        ] | ({ column, columnIndex, columns, readonly }) => array | null
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
~~~

### Parameters

To control how columns look, the **columnShape** object lets you set these options:

- `menu` - (optional) an object defining the column context menu. It includes:
    - `show` - (optional) toggles the column context menu on or off
    - `items` - (optional) an array of menu item objects. Each item can have:
        - `id` - (optional) the menu item's ID. Use these values for built-in actions:
            - ***"add-card"*** - adds a new card
            - ***"set-edit"*** - edits the column name
            - ***"move-column:left"*** - moves the column left
            - ***"move-column:right"*** - moves the column right
            - ***"delete-column"*** - deletes the column

        - `icon` - (optional) the icon class name for the menu item, compatible with icon fonts (e.g., *mdi-delete*)
        - `text` - (optional) the menu item's label
        - `disabled` - (optional) whether the menu item is active or disabled (boolean)
        - `onClick` - (optional) a custom callback function receiving:
            - ***id*** - the current menu item's ID
            - ***item*** - the current menu item's data object
            - ***column*** - the target column's data object

        - `data` - (optional) an array of submenu item objects

    :::info
    Alternatively, `menu.items` can be a custom function receiving:
    - ***column*** - the current column data object
    - ***columnIndex*** - the index of the current column
    - ***columns*** - an array of all columns data
    - ***readonly*** - an object with readonly [state properties](api/internal/js_kanban_getstate_method.md)

    This lets you customize the menu for each column or disable it for specific columns by returning *null* or *false*:

    ~~~jsx {}
    items: ({ column }) => {
        if(column.id === "inprogress"){
            return null;
        } 
        if (column.id === "backlog"){
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Rename" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Remove card"
                }
            ];
        }       
    }
    ~~~
    :::

- `fixedHeaders` - (optional) keeps column headers visible during vertical scrolling (*true* by default). Requires scroll enabled in Kanban (limited height)
- `css` - (optional) a function returning a CSS class to apply conditionally to columns
- `headerTemplate` - (optional) HTML template for the column header when expanded
- `collapsedTemplate` - (optional) HTML template for the column header when collapsed
- `confirmDeletion` - (optional) toggles a confirmation dialog for deleting columns

### Default config

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, readonly }) => [
    { id: "add-card", icon: "wxi-plus", text: "Add new card" },
    { id: "set-edit", icon: "wxi-edit", text: "Rename" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "Move left",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "Move right",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "Delete" }
];
const columnShape = {
    menu: {
        show: true,
        items: getDefaultColumnMenuItems
    },
    fixedHeaders: true,
    confirmDeletion: true
};
~~~

### Example

~~~jsx {1-58,64}
const columnShape = {
    menu: {
        show: true,
        items: [
            {
                id: "color",
                text: "Color",
                data: [
                    { 
                        id:"yellow", 
                        text: "Yellow",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    { 
                        id:"red", 
                        text: "Red",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    { 
                        id:"green", 
                        text: "Green",
                        onClick: ({ column }) => changeColumnColor(column, "green")
                    }
                ]
            }
        ]
    },
    fixedHeaders: false,
    css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red",
    headerTemplate: template(column => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(column => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                        column.columnState?.cardsCount
                    })</div>
                </div>`;
    }),
    confirmDeletion: true
};

new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    columnShape, 
    // other parameters
});
~~~

**Change log:**
- The ***css*** parameter was introduced in v1.4
- The ***menu.items[0].label*** parameter was replaced by ***menu.items[0].text*** in v1.4
- The ***menu.items[0].items*** parameter was replaced by ***menu.items[0].data*** in v1.4
- The ***fixedHeaders*** parameter was added in v1.5
- The ***headerTemplate*** and ***collapsedTemplate*** parameters were added in v1.6
- The ***menu.items[0].label*** and ***menu.items[0].items*** parameters were removed in v1.7
- The ***menu.items*** function was updated, replacing the **store** parameter with **readonly** in v1.7

**Related articles:** [Configuration](guides/configuration.md)

**Related samples:**
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Template for column headers](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)