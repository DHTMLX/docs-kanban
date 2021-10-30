---
sidebar_label: columns
title: JS Kanban columns property
description: You can learn about the columns property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# columns

### Description

Array of objects containing the **columns data**. This parameter is mandatory

### Usage

```js
columns: [
	{
		id: string, // a column ID
		label?: string // a column label
	}, ...
]
```

:::info
If you want to load the columns data via the **parse()** method, set the **columns** property to the empty array
:::

### Example

```jsx {8}
const columns = [
	{ label: "Backlog", id: "backlog" },
	{ label: "In progress", id: "inprogress" },
	{ label: "Done", id: "done" }
];

new kanban.Kanban("#root", {
	columns,
	...
});
```
