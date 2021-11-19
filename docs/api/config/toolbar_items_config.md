---
sidebar_label: (Toolbar) items
title: Toolbar items property
description: You can learn about the api property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# (Toolbar) items

### Description

An array of controls located in the toolbar of JS Kanban

### Usage

```jsx
items?: [
	"search", // (string) a search bar
	"controls", // (string) controls for adding the columns and rows
	// (string | function) custom controls
]
```

### Example

```jsx {9-12}
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});

new kanban.Toolbar("#toolbar", {
	api: board.api,
	items: [
		"search",
		"controls"
	]
});
```

**Related article:** [Configuration](../../../guides/configuration#toolbar)
