---
sidebar_label: deleteRow()
title: JS Kanban deleteRow method
description: You can learn about the deleteRow method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# deleteRow()

### Description

Removes the specified row from datastore of JS Kanban

### Usage

```js
deleteRow: ({ id: string | number }) => void;
```

### Parameters

- `id: string | number` - the **ID** of the row to be deleted

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// remove row by its id
board.deleteRow({ id: "feature" });
```
