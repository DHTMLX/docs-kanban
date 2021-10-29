---
sidebar_label: addRow()
title: JS Kanban addRow method
description: You can learn about the addRow method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# addRow()

### Description

Adds a new row into JS Kanban

### Usage

```js
addRow: ({
	id?: string | number,
	label?: string,
	collapsed?: boolean
}) => void;
```

### Parameters

- `id?: string | number` -  the **ID** of the new row
- `label?: string` - the **label** of the new row
- `collapsed?: boolean` - the **state** of the new row

### Example

```jsx {7-11}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new row
board.addRow({
	id: "extra_row",
	label: "Extra row",
	collapsed: false
});
```
