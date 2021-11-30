---
sidebar_label: addColumn()
title: Kanban addColumn method
description: You can learn about the addColumn method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# addColumn()

### Description

Adds a **new column** into Kanban

### Usage

```js
addColumn: ({
	id?: string | number,
	label?: string
}) => void;
```

### Parameters

- `id?: string | number` -  the **ID** of the new column
- `label?: string` - the **label** of the new column

### Example

```jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new column
board.addColumn({
	id: "extra_column",
	label: "Extra column"
});
```
