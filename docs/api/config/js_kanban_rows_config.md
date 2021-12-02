---
sidebar_label: rows
title: rows Config
description: You can learn about the rows config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rows

### Description

An array of objects containing the **rows data**

### Usage

```jsx
rows?: [
	{
		id: string, // a row ID
		label?: string, // a row label
		collapsed?: boolean  // a row state
	},
	{...} // other rows data
]
```
:::info
If you want to load the rows data via the [**parse()**](../../methods/js_kanban_parse_method) method, set the **rows** property to the empty array
:::

### Example

```jsx {1-4,9}
const rows = [
	{ label: "Feature", id: "feature", collapsed: false },
	{ label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});
```
