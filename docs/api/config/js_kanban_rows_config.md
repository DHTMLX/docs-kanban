---
sidebar_label: rows
title: JS Kanban rows property
description: You can learn about the rows property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# rows

### Description

Array of objects containing the **rows data**

### Usage

```jsx
rows?: [
	{
		id: string, // a row ID
		label?: string, // a row label
		collapsed?: boolean  // a row state
	}, ...
]
```
:::info
If you want to load the rows data via the **parse()** method, set the **rows** property to the empty array
:::

### Example

```jsx {8}
const rows = [
	{ label: "Feature", id: "feature", collapsed: false },
	{ label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
	...,
	rows
});
```
