---
sidebar_label: columns
title: columns Config
description: You can learn about the columns config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# columns

### Description

@short: Optional. An array of objects containing the columns data

### Usage

~~~jsx {}
columns?: [
	{
		id: string,
		label?: string,
		collapsed?: boolean,
		limit?: number | object,
		strictLimit?: boolean,
		css?: string
	},
	{...} // other columns data
];
~~~

### Parameters

For each column you can specify the following parameters (data):

- `id` - (required) a column **ID**. It is used for managing the column via the corresponding methods 
- `label` - (optional) a column label. It is displayed in the column section
- `collapsed` - (optional) a current state of the column. If ***true***, the column is collapsed initially. Default value is ***false*** (expanded state)
- `limit` - (optional) this parameter may take one of the two types of values:
	- `number` - a limit of cards in the current column
	- `object` - an object with the limits of cards for each row (swimlane) by its ID
- `strictLimit` - (optional) a strict limit mode. If ***true***, a user will not be able to create new cards over the specified number via the **limit** parameter. Default value is ***false*** 
- `css` - (optional) defines css styles for a separate column

:::info
If you want to load new data for columns dynamically, you can use the [**parse()**](../../methods/js_kanban_parse_method) method!
:::

### Example

~~~jsx {1-22,25}
const columns = [
	{ 
		label: "Backlog", 
		id: "backlog",
		collapsed: true,
		limit: 3,
		strictLimit: true,
		css: "red" 
	},
	{ 
		label: "In progress", 
		id: "inprogress",
		collapsed: false,
		limit: {
			// limit the number of cards for the "Feature" and "Task" rows of the "In progress" column
			feature: 3, 
			task: 2
		},
		strictLimit: false
	},
	{ label: "Done", id: "done" }
];

new kanban.Kanban("#root", {
	columns,
	cards,
	rows,
	// other parameters
});
~~~

**Change log:**
- Starting from v1.1 the **columns** property is optional
- The **collapsed** parameter was added in v1.1
- The **limit** parameter was added in v1.1
- The **strictLimit** parameter was added in v1.1
- The **css** parameter was added in v1.4

**Related article:** [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**Related samples:** 
- [Kanban. Limits for columns and swimlanes](https://snippet.dhtmlx.com/2blo6hx8)
- [Kanban. Custom CSS for columns](https://snippet.dhtmlx.com/2w9h9bi8)