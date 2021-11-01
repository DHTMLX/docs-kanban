---
sidebar_label: Data Loading
title:  Data Loading
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Data Loading

## Initial Data Loading

When initializing JS Kanban, you can provide the initial data for *columns*, *cards* and *rows*.

:::note
The data for **columns** and **cards** are mandatory
:::

~~~js title="data.json" {4,19,71,85-87}
const start_date = new Date("01/05/2021");
const end_date = new Date("01/15/2021");

const columns = [
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

const cards = [
	{
		id: 1,
		label: "Integration with React",
		status: 1,
		cover: "#65D3B3",
		description: "Some description...",

		start_date,
		end_date,

		progress: 25,
		users: [1, 2, 3, 4],
		sprint: "1.0",
		column: "backlog",
		type: "feature"
	},
	{
		id: 2,
		label: "Archive the cards/boards ",
		status: 2,
		cover: "#FFC975",

		start_date,
		end_date,

		sprint: "1.0",
		column: "backlog",
		type: "feature"
	},
	{
		label: "Searching and filtering",
		status: 1,
		cover: "#65D3B3",

		start_date,

		sprint: "1.2",
		column: "backlog",
		type: "task"
	},
	{
		label: "Set the tasks priorities",
		status: 2,
		cover: "#58C3FE",

		sprint: "1.2",
		column: "inprogress",
		type: "feature"
	}
];

const rows = [
	{
		label: "Feature",
		id: "feature"
	},
	{
		label: "Task",
		id: "task",
		collapsed: true
	},
];

// initializing JS Kanban with the initial data for columns, cards and rows
new kanban.Kanban("#root", {
	columns, // mandatory!
	cards, // mandatory!
	rows // optional
});
~~~

## Dynamic Data Loading

To load data for columns, rows and cards dynamically, you can use the **parse()** method. It takes an object with the desired data as a parameter. Before parsing the data via this method, you need to set the *columns*, *cards* and *rows* parameters to an empty array in the JS Kanban configs.

~~~js {2-4,8}
const board = new kanban.Kanban("#root", {
	columns: [],
	cards: [],
	rows: []
});

// loading data into js kanban
board.parse({ columns, cards, rows });
~~~
