---
sidebar_label: updateRow()
title: JS Kanban updateRow method
description: You can learn about the updateRow method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# updateRow()

### Description

Updates the row data by its ID

### Usage

`updateRow: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current row

:::note
Note, the ID of the row to be updated is required. Besides ID you can specify only the row label.
:::

### Example

```jsx
// update a label of the row with the "feature" ID
kanban.updateRow({
	id: "feature",
	label: "New Row"
});
```
