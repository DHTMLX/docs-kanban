---
sidebar_label: Working with data
title: Working with Data
description: You can explore how to work with Data in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with data

## Initial data loading

When setting up Kanban, it's possible to pass in the initial data for [**columns**](api/config/js_kanban_columns_config.md), [**cards**](api/config/js_kanban_cards_config.md), [**rows**](api/config/js_kanban_rows_config.md), and [**links**](api/config/js_kanban_links_config.md).

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

// initializing Kanban with the initial data for columns, cards and rows
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Loading data from local source

To bring in data for ***columns***, ***rows***, ***cards***, and ***links*** from a local source, use the [`setConfig()`](api/methods/js_kanban_setconfig_method.md) or [`parse()`](api/methods/js_kanban_parse_method.md) method. Just pass an object with the data you want to load.

~~~js {4}
const board = new kanban.Kanban("#root", {});

// loading data into Kanban
board.setConfig({ columns, cards, rows });
// or board.parse({ columns, cards, rows });
~~~

## Syncing Kanban data with Gantt and Scheduler

Here's a quick look at how Kanban data can sync up with other DHTMLX widgets like [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) and [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Getting Kanban data

There are a few methods available for grabbing Kanban data:

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) - returns an array of card data objects for a specific column (and row)
- [`getCard()`](api/methods/js_kanban_getcard_method.md) - returns the data object for a card by its ID
- [`serialize()`](api/methods/js_kanban_serialize_method.md) - serializes all Kanban data to JSON

## Getting Kanban state

To check the state of Kanban, these methods come in handy:

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) - gets an object with the reactive properties from *StateStore*
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) - gets an object with the current properties from *StateStore*
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) - gets an object with both *StateStore* and *DataStore*

## Exporting Kanban data

When exporting Kanban data, this method is available:

- [`export.json()`](api/internal/js_kanban_json_method.md) - exports Kanban data into a JSON file

## Adding new items

To add new *cards*, *columns*, or *rows*, these methods are useful:

- [`addCard()`](api/methods/js_kanban_addcard_method.md) - creates a new card in Kanban
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) - creates a new column in Kanban
- [`addRow()`](api/methods/js_kanban_addrow_method.md) - creates a new row in Kanban

## Updating items

To make changes to *cards*, *columns*, or *rows*, try these methods:

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) - updates card data by its ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) - updates column data by its ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) - updates row data by its ID

## Deleting items

To remove *cards*, *columns*, or *rows*, the following methods are available:

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) - deletes a card from Kanban by its ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) - deletes a column from Kanban by its ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) - deletes a row from Kanban by its ID

## Moving items

To move *cards*, *columns*, or *rows* around, these methods will help:

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) - moves a card to another column and row
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) - moves a column to a new position
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) - moves a row to a new position

## Example

Here's a snippet showing how the Kanban API can be used for working with data:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>