---
sidebar_label: columnKey
title: JS Kanban columnKey property
description: You can learn about the columnKey property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# columnKey

### Description

Defines belonging the card to the **column**

### Usage

```js
columnKey?: string
```

### Example

```jsx {15}
const cards = [
	{
		label: "Backlog task",
		custom_key: "backlog"
	},
	{
		label: "In progress task",
		custom_key: "inprogress"
	}
];

new kanban.Kanban("#root", {
	...,
	cards,
	columnKey: "custom_key"
});
```
