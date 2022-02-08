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
		label?: string,
		collapsed?: boolean,
		limit?: number | object,
		strictLimit?: boolean
	},
	{...} // other columns data
];
~~~

### Parameters

For each column you can specify the following parameters (data):

- `id` - (required) a column **ID**. It is used for managing the column via the corresponding methods 
- `label` - (optional) a column label. It is displayed in the column section
- `collapsed` - (optional) a current state of the column. If **true**, the column will be collapsed initially. Default value is **false** (uncollapsed state)
- `limit` - (optional) this parameter may take two types of values:
	- `number` - a limit of cards in the current column
	- `object` - in this object you can specify a limit of cards for each swimlane (row) by its ID in the current column
- `strictLimit` - (optional) a strict limit mode. If **true**, a user will not be able to create new cards over the specified number via the **limit** parameter. Default value is **false** 

:::info
If you want to load the columns data via the [**parse()**](../../methods/js_kanban_parse_method) method, set the **columns** property to the empty array
:::

### Example

~~~jsx {1-21,24}
const columns = [
	{ 
		label: "Backlog", 
		id: "backlog",
		collapsed: true,
		limit: 3,
		strictLimit: true 
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
- The **collapsed** parameter was added in v1.1 
- The **limit** parameter was added in v1.1
- The **strictLimit** parameter was added in v1.1