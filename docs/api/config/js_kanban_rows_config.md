---
sidebar_label: rows
title: rows Config
description: You can learn about the rows config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rows

### Description

@short: Optional. An array of objects containing the rows (swimlanes) data

### Usage

~~~jsx {}
rows?: [
	{
		id: string,
		label?: string,
		collapsed?: boolean
	},
	{...} // other rows data
];
~~~

:::info
To create Swimlanes you need to specify the corresponding data in the array of the **rows** property. You can collapse/expand, rename, delete and move swimlanes via UI or using [related API](../../../../kanban/howtos/#how-to-work-with-rows-swimlanes)
:::

### Parameters

For each row (swimlane) you can specify the following parameters (data):

- `id` - (required) a row (swimlane) **ID**. It is used for managing the row via the corresponding methods
- `label` - (optional) a row (swimlane) label. It is displayed in the row section
- `collapsed` - (optional) a row (swimlane) state. If **true**, the row is collapsed by default

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
	rows, // swimlanes data
	// other parameters
});
~~~

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?mode=wide)