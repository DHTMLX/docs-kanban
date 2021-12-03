---
sidebar_label: updateRow()
title: Kanban updateRow method
description: You can learn about the updateRow method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# updateRow()

### Description

Updates the row data by its ID

### Usage

~~~jsx {}
updateRow: (config: object) => void;
~~~

### Parameters

- `config: object` - the new data object of the current row (*mandatory*)

:::info
Note, the ID of the row to be updated is required. Other row parameters can be found [**here**](../config/js_kanban_rows_config.md)
:::

### Example

~~~jsx {8-12}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});
// update a label of the row with the "feature" ID
board.updateRow({
	id: "feature",
	label: "New Row",
	collapsed: true
});
~~~
