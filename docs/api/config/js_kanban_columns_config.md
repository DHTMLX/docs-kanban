---
sidebar_label: columns
title: Kanban columns property
description: You can learn about the columns property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# columns

### Description

An array of objects containing the **columns data**. *This parameter is mandatory!*

### Usage

~~~jsx {}
columns: [
	{
		id: string,
		label?: string
	},
	{...} // other columns data
]
~~~

### Parameters

For each column you can specify the following parameters (data):

- `id: string` - a column ID. It is used for managing the column via the corresponding methods (*mandatory*)
- `label?: string` - a column label. It is displayed in the column section

:::info
If you want to load the columns data via the [**parse()**](../../methods/js_kanban_parse_method) method, set the **columns** property to the empty array
:::

### Example

~~~jsx {1-5,8}
const columns = [
	{ label: "Backlog", id: "backlog" },
	{ label: "In progress", id: "inprogress" },
	{ label: "Done", id: "done" }
];

new kanban.Kanban("#root", {
	columns,
	cards,
	// other parameters
});
~~~
