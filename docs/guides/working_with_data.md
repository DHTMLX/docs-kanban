---
sidebar_label: Working with data
title: Working with Data
description: You can explore how to work with Data in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with data

## Load initial data

When you initialize Kanban, pass initial data through the [`columns`](api/config/js_kanban_columns_config.md), [`cards`](api/config/js_kanban_cards_config.md), [`rows`](api/config/js_kanban_rows_config.md), and [`links`](api/config/js_kanban_links_config.md) properties.

The following code snippet passes columns, cards, rows, and links data to the Kanban constructor:

~~~jsx {1,17,81,94,106-109}
const columns = [ // data for columns
    {
        label: "Backlog",
        id: "backlog"
    },
    {
        label: "In progress",
        id: "inprogress"
    },
    {
        label: "Testing",
        id: "testing"
    },
    {...}
];

const cards = [ // data for cards
    {
        id: 1,
        label: "Integration with React",
        priority: 1,
        color: "#65D3B3",
        description: "Some description...",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        progress: 25,
        users: [1,2,3,4],
        sprint: "1.0",
        column: "backlog",
        type: "feature",
        css: "red",
        votes: [4,6,9],
        comments: [
            {
                id: 1,
                userId: 9,
                cardId: 6,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                date: new Date(),
            },{...}
        ]
    },
    {
        id: 2,
        label: "Archive the cards/boards ",
        priority: 2,
        color: "#FFC975",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        sprint: "1.0",
        column: "backlog",
        type: "feature"
    },
    {
        label: "Searching and filtering",
        priority: 1,
        color: "#65D3B3",

        start_date: new Date("01/05/2021"),

        sprint: "1.2",
        column: "backlog",
        type: "task"
    },
    {
        label: "Set the tasks priorities",
        priority: 2,
        color: "#58C3FE",

        sprint: "1.2",
        column: "inprogress",
        type: "feature"
    },
    {...}
];

const rows = [ // data for rows
    {
        label: "Feature",
        id: "feature"
    },
    {
        label: "Task",
        id: "task",
        collapsed: true
    },
    {...}
];

const links = [
    {
        id: "link_1",
        source: 1,
        target: 2,
        relation: "relatesTo",
    },
    {...}
];

// initialize Kanban with the initial data
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Load data from a local source

Use the [`setConfig()`](api/methods/js_kanban_setconfig_method.md) or [`parse()`](api/methods/js_kanban_parse_method.md) method to load data for columns, rows, cards, and links from a local source.

The following code snippet replaces the current data with a new dataset after initialization:

~~~js {4}
const board = new kanban.Kanban("#root", {});

// load data into Kanban
board.setConfig({ columns, cards, rows });

// or board.parse({ columns, cards, rows });
~~~

## Sync Kanban data with Gantt and Scheduler

The following demo synchronizes Kanban data with [Gantt](https://dhtmlx.com/docs/products/dhtmlxGantt/) and [Scheduler](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Get Kanban data

The following methods read card data from Kanban:

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) — gets data objects of all cards in the specified column and row
- [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md) — gets data objects of all cards in a specific column
- [`getCard()`](api/methods/js_kanban_getcard_method.md) — gets a card data object by ID
- [`serialize()`](api/methods/js_kanban_serialize_method.md) — serializes Kanban data to JSON

## Get Kanban state

The following methods read Kanban state:

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) — gets reactive properties of the *StateStore*
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) — gets current properties of the *StateStore*
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) — gets the *StateStore* and *DataStore* objects

## Export Kanban data

Use the following method to export Kanban data:

- [`export.json()`](api/internal/js_kanban_json_method.md) — exports Kanban data to a JSON file

## Add new items

The following methods add new items to Kanban:

- [`addCard()`](api/methods/js_kanban_addcard_method.md) — adds a new card
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) — adds a new column
- [`addRow()`](api/methods/js_kanban_addrow_method.md) — adds a new row
- [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) — duplicates a card by ID

## Update items

The following methods update existing items:

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) — updates a card by ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) — updates a column by ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) — updates a row by ID

## Delete items

The following methods remove items from Kanban:

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) — removes a card by ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) — removes a column by ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) — removes a row by ID

## Move items

The following methods move items to a new position:

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) — moves a card to the target column and row
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) — moves a column to a new position
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) — moves a row to a new position

## Manage comments

The following methods work with comments on a card:

- [`addComment()`](api/methods/js_kanban_addcomment_method.md) — adds a comment to a card by ID
- [`updateComment()`](api/methods/js_kanban_updatecomment_method.md) — updates a comment by ID
- [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md) — deletes a comment by ID

## Manage links

The following methods work with links between cards at runtime:

- [`addLink()`](api/methods/js_kanban_addlink_method.md) — adds a new link between cards
- [`deleteLink()`](api/methods/js_kanban_deletelink_method.md) — deletes a link by ID

## Manage card selection

The following methods read or change the selected cards:

- [`getSelection()`](api/methods/js_kanban_getselection_method.md) — gets IDs of the currently selected cards
- [`selectCard()`](api/methods/js_kanban_selectcard_method.md) — selects a card by ID
- [`unselectCard()`](api/methods/js_kanban_unselectcard_method.md) — unselects a card by ID

## Example

The following snippet uses the Kanban API to manipulate data at runtime:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
