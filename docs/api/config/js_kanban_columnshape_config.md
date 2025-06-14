---
sidebar_label: columnShape
title: columnShape Config
description: You can learn about the columnShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# columnShape

### Description

@short: Optional. An object of settings for managing the columns appearance

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
~~~

### Parameters

To configure the columns appearance, in the **columnShape** object you can specify the following parameters:

- `menu` - (optional) an object of parameters of the columns context menu. Here you can specify the following parameters:
    - `show` - (optional) - enables/disables a column context menu
    - `items` - (optional) an array of objects containing parameters of items of the columns context menu. For each item you can specify the following parameters:
        - `id` - (optional) an ID of the menu item. To implement the built-in actions, you need to specify the following values:
            - ***"add-card"*** - defines the action to add a new card
            - ***"set-edit"*** - defines the action to edit a column name
            - ***"move-column:left"*** - defines the action to move a column left
            - ***"move-column:right"*** - defines the action to move a column right
            - ***"delete-column"*** - defines the action to delete a column
        - `icon` - (optional) a class name of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
        - `text` - (optional) a name of the menu item
        - `disabled` - (optional) a state of the menu item (*active* or *disabled* depending on the *boolean* value)
        - `onClick` - (optional) a custom callback function, that takes the following arguments:
            - ***id*** - an ID of the current menu item
            - ***item*** - a data object of the current menu item
            - ***column*** - a data object of the target column

    :::info
    You can also set the `items` parameter to a custom function, that takes the following arguments:
    - ***column*** - a data object of a current column
    - ***columnIndex*** - an index of a current column
    - ***columns*** - an array of objects containing all columns data
    - ***store*** - an object of *dataStore*

    This function allows customizing menu for any column or hide it for a specific one (by returning *null* or *false*):

    ~~~jsx {}
    items: ({ column, columnIndex, columns, store }) => {
        if(column.id === "inprogress")
            return null

        if (column.id === "backlog") 
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Rename" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Remove card"
                }
            ]
    }
    ~~~
    :::

- `fixedHeaders` - (optional) freezes column headers during vertical scroll (*true* by default). Scroll must be enabled in Kanban itself (height must be limited)
- `css` - (optional) a function that returns a css class that applies to columns conditionally
- `headerTemplate` - (optional) the HTML template of the column header in the expanded state
- `collapsedTemplate` - (optional) the HTML template of the column header in the collapsed state
- `confirmDeletion` - (optional) shows/hides the **confirmation dialog** that allows users to confirm or decline the column deletion

### Default config

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
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
                items: [
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
- The ***css*** parameter was added in v1.4
- The ***menu.items[0].label*** parameter was replaced by the ***menu.items[0].text*** parameter in v1.4
- The ***fixedHeaders*** parameter was added in v1.5
- The ***headerTemplate*** and ***collapsedTemplate*** parameters were added in v1.6

**Related articles:** [Configuration](../../../guides/configuration)

**Related samples:**
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Template for column headers](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
