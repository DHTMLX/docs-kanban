---
sidebar_label: Working with data
title: Working with Data
description: You can explore how to work with Data in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with data

## Initial data loading

When initializing Kanban, you can provide the initial data for [**columns**](api/config/js_kanban_columns_config.md), [**cards**](api/config/js_kanban_cards_config.md), [**rows**](api/config/js_kanban_rows_config.md) and [**links**](api/config/js_kanban_links_config.md).

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

To load data for ***columns***, ***rows*** and ***cards*** from a local source, you can use the [`parse()`](api/methods/js_kanban_parse_method.md) method. It takes an object with the needed data as a parameter. 

~~~js {4}
const board = new kanban.Kanban("#root", {});

// loading data into Kanban
board.parse({ columns, cards, rows });
~~~

## Syncing Kanban data with Gantt and Scheduler

In this snippet you can see how to sync Kanban data with other DHTMLX widgets, namely [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) and [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Getting Kanban data

To get Kanban data, you can use the following methods:

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) - gets an array with data objects of all cards of the specified column (and row)
- [`getCard()`](api/methods/js_kanban_getcard_method.md) - gets a data object of a card by the specified ID
- [`serialize()`](api/methods/js_kanban_serialize_method.md) - serializes Kanban data to JSON

## Getting Kanban state

To get Kanban state, you can use the following methods:

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) - gets an object with the reactive properties of the *StateStore*
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) - gets an object with the current properties of the *StateStore*
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) - gets an object with the *StateStore* and *DataStore* objects

## Exporting Kanban data

To export Kanban data, you can use the following method:

- [`export.json()`](api/internal/js_kanban_json_method.md) - exports data of Kanban to a JSON file

## Adding new items

To add new *cards*, *columns* and *rows*, you can use the following methods:

- [`addCard()`](api/methods/js_kanban_addcard_method.md) - adds a new card into Kanban
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) - adds a new column into Kanban
- [`addRow()`](api/methods/js_kanban_addrow_method.md) - adds a new row into Kanban

## Updating items

To update the *cards*, *columns* and *rows*, you can use the following methods:

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) - updates the card data by the specified ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) - updates the column data by the specified ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) - updates the row data by the specified ID

## Deleting items

To remove the *cards*, *columns* and *rows*, you can use the following methods:

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) - removes a card from Kanban by the specified ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) - removes a column from Kanban by the specified ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) - removes a row from Kanban by the specified ID

## Moving items

To move the *cards*, *columns* and *rows*, you can use the following methods:

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) - moves a card to the desired column and row
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) - moves a column to the desired position
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) - moves a row to the desired position

## Example

In this snippet you can see how to use Kanban API for working with data:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
