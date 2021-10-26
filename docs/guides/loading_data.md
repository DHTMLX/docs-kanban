---
sidebar_label: Data loading
title: Loading data
description: You can study developer and user guides in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

## Loading Data

While loading inline data, you need to use the **parse()** method and pass an object with data to it as in the example below:

~~~js title="data.json"
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
	},
	{
		label: "Done",
		id: "done"
	}
];
const cards = [
	{
		label: "Task 1",
		stage: "backlog"
	},
	{
		label: "Task 2",
		stage: "inprogress"
	},
	{
		label: "Task 3",
		stage: "testing"
	},
	{
		label: "Task 4",
		stage: "done"
	}
];

// initializing js kanban
const { Kanban } = app;
const kanban = new Kanban("#root", {
	columns:[],
	cards:[]
});

// loading data into js kanban
kanban.parse({ columns, cards });
~~~
