---
sidebar_label: Working with data
title: Working with Data
description: You can explore how to work with Data in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with data

## Initial data loading

When setting up Kanban, it's possible to pass in starting data for [**columns**](/api/config/js_kanban_columns_config.md), [**cards**](/api/config/js_kanban_cards_config.md), [**rows**](/api/config/js_kanban_rows_config.md), and [**links**](/api/config/js_kanban_links_config.md).

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
        masterId: 1,
        slaveId: 2,
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

To bring in data for ***columns***, ***rows***, and ***cards*** from a local source, the [`parse()`](/api/methods/js_kanban_parse_method.md) method is available. Just pass an object containing the needed data.

~~~js {4}
const board = new kanban.Kanban("#root", {});

// loading data into Kanban
board.parse({ columns, cards, rows });
~~~

## Syncing Kanban data with Gantt and Scheduler

Here's an example showing how to sync Kanban data with other DHTMLX widgets, like [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) and [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Getting Kanban data

There are a few methods for accessing Kanban data:

- [`getAreaCards()`](/api/methods/js_kanban_getareacards_method.md) - returns an array with data objects for all cards in a specific column (and row)
- [`getCard()`](/api/methods/js_kanban_getcard_method.md) - returns a data object for a card by its ID
- [`serialize()`](/api/methods/js_kanban_serialize_method.md) - serializes Kanban data into JSON

## Getting Kanban state

To access the state of Kanban, these methods are handy:

- [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method.md) - returns an object with the reactive properties from *StateStore*
- [`api.getState()`](/api/internal/js_kanban_getstate_method.md) - gets an object with the current properties from *StateStore*
- [`api.getStores()`](/api/internal/js_kanban_getstores_method.md) - provides an object with both *StateStore* and *DataStore* objects

## Exporting Kanban data

For exporting Kanban data, you can use:

- [`export.json()`](/api/internal/js_kanban_json_method.md) - exports Kanban data as a JSON file

## Adding new items

New *cards*, *columns*, and *rows* can be created with these methods:

- [`addCard()`](/api/methods/js_kanban_addcard_method.md) - creates a new card in Kanban
- [`addColumn()`](/api/methods/js_kanban_addcolumn_method.md) - creates a new column in Kanban
- [`addRow()`](/api/methods/js_kanban_addrow_method.md) - creates a new row in Kanban

## Updating items

If you need to update *cards*, *columns*, or *rows*, these methods come in handy:

- [`updateCard()`](/api/methods/js_kanban_updatecard_method.md) - updates card data by its ID
- [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method.md) - updates column data by its ID
- [`updateRow()`](/api/methods/js_kanban_updaterow_method.md) - updates row data by its ID

## Deleting items

*Cards*, *columns*, and *rows* can be deleted with the following methods:

- [`deleteCard()`](/api/methods/js_kanban_deletecard_method.md) - deletes a card from Kanban using its ID
- [`deleteColumn()`](/api/methods/js_kanban_deletecolumn_method.md) - deletes a column from Kanban using its ID
- [`deleteRow()`](/api/methods/js_kanban_deleterow_method.md) - deletes a row from Kanban using its ID

## Moving items

To change the position of *cards*, *columns*, or *rows*, try these:

- [`moveCard()`](/api/methods/js_kanban_movecard_method.md) - moves a card to a specific column and row
- [`moveColumn()`](/api/methods/js_kanban_movecolumn_method.md) - moves a column to a chosen position
- [`moveRow()`](/api/methods/js_kanban_moverow_method.md) - moves a row to a chosen position

## Example

Here's a snippet that shows how to use the Kanban API to manage data:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
