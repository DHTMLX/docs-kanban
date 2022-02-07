---
sidebar_label: columns
title: columns Config
description: You can learn about the columns config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# columns

### Description

@short: Required. An array of objects containing the columns data

### Usage

~~~jsx {}
columns: [
	{
		id: string,
		label?: string
	},
	{...} // other columns data
];
~~~

### Parameters

For each column you can specify the following parameters (data):

- `id` - (required) a column **ID**. It is used for managing the column via the corresponding methods 
- `label` - (optional) a column label. It is displayed in the column section

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
