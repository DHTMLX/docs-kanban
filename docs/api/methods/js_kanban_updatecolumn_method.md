---
sidebar_label: updateColumn()
title: JS Kanban updateColumn method
description: You can learn about the updateColumn method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# updateColumn()

### Description

Updates the column data by its ID

### Usage

`updateColumn: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current column

:::note
Note, the ID of the column to be updated is required. Besides ID you can specify only the column label.
:::

### Example

```jsx
// update a label of the column with the "backlog" ID
kanban.updateColumn({
	id: "backlog",
	label: "New Column"
});
```
