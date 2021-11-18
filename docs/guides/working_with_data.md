---
sidebar_label: Working with Data
title: Working with Data
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Working with Data

## Initial data loading

When initializing JS Kanban, you need to provide the initial data for [**columns**](api/config/js_kanban_columns_config.md), [**cards**](api/config/js_kanban_cards_config.md) and [**rows**](api/config/js_kanban_rows_config.md).

:::note
The data for **columns** and **cards** are mandatory!
:::

~~~jsx {1,16,68,81-85}
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
	}
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
		users: [1, 2, 3, 4],
		sprint: "1.0",
		column: "backlog",
		type: "feature"
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
	}
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
	}
];

// initializing JS Kanban with the initial data for columns, cards and rows
new kanban.Kanban("#root", {
	columns, // mandatory!
	cards, // mandatory!
	rows // optional
});
~~~

## Loading data from local source

To load data for ***columns***, ***rows*** and ***cards*** from a local source, you can use the [**parse()**](api/methods/js_kanban_parse_method.md) method. It takes an object with the needed data as a parameter. Before parsing the data in this way, you need to set the *columns*, *cards* and *rows* properties to an empty array in the JS Kanban configuration object.

~~~js {2-4,8}
const board = new kanban.Kanban("#root", {
	columns: [],
	cards: [],
	rows: []
});

// loading data into JS Kanban
board.parse({ columns, cards, rows });
~~~

## Getting JS Kanban data

To get JS Kanban data, you can use the following methods:

- [getAreaCards()](api/methods/js_kanban_getareacards_method.md) - gets an array with data objects of all cards of the specified column (and row)
- [getCard()](api/methods/js_kanban_getcard_method.md) - gets a data object of a card with the specified ID
- [serialize()](api/methods/js_kanban_serialize_method.md) - serializes JS Kanban data to JSON

## Getting JS Kanban state

To get JS Kanban state, you can use the following methods:

- [api.getReactiveState()](api/internal/js_kanban_getreactivestate_method.md) - gets an object with the reactive properties of the *StateStore*
- [api.getState()](api/internal/js_kanban_getstate_method.md) - gets an object with the current properties of the *StateStore*
- [api.getStores()](api/internal/js_kanban_getstores_method.md) - gets an object with the *StateStore* and *DataStore* objects

## Adding new items

To add new *cards*, *columns* and *rows*, you can use the following methods:

- [addCard()](api/methods/js_kanban_addcard_method.md) - adds a new card into JS Kanban
- [addColumn()](api/methods/js_kanban_addcolumn_method.md) - adds a new column into JS Kanban
- [addRow()](api/methods/js_kanban_addrow_method.md) - adds a new row into JS Kanban

## Updating items

To update the *cards*, *columns* and *rows*, you can use the following methods:

- [updateCard()](api/methods/js_kanban_updatecard_method.md) - updates the card data by the specified ID
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md) - updates the column data by the specified ID
- [updateRow()](api/methods/js_kanban_updaterow_method.md) - updates the row data by the specified ID

## Deleting items

To remove the *cards*, *columns* and *rows*, you can use the following methods:

- [deleteCard()](api/methods/js_kanban_deletecard_method.md) - removes a card from JS Kanban by the specified ID
- [deleteColumn()](api/methods/js_kanban_deletecolumn_method.md) - removes a column from JS Kanban by the specified ID
- [deleteRow()](api/methods/js_kanban_deleterow_method.md) - removes a row from JS Kanban by the specified ID
