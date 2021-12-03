---
sidebar_label: rows
title: Kanban rows property
description: You can learn about the rows property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# rows

### Description

An array of objects containing the **rows data**

### Usage

~~~jsx {}
rows?: [
	{
		id: string,
		label?: string,
		collapsed?: boolean
	},
	{...} // other rows data
]
~~~

### Parameters

For each row you can specify the following parameters (data):

- `id: string` - a row ID. It is used for managing the row via the corresponding methods (*mandatory*)
- `label?: string` - a row label. It is displayed in the row section
- `collapsed?: boolean` - a row state. If ***true***, the row is collapsed by default

:::info
If you want to load the rows data via the [**parse()**](../../methods/js_kanban_parse_method) method, set the **rows** property to the empty array
:::

### Example

~~~jsx {1-4,9}
const rows = [
	{ label: "Feature", id: "feature", collapsed: false },
	{ label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
	columns,
	cards,
	rows,
	// other parameters
});
~~~
