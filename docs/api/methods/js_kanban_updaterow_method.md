---
sidebar_label: updateRow()
title: updateRow Method
description: You can learn about the updateRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateRow()

### Description

@short: Updates the row data by its ID

### Usage

~~~jsx {}
updateRow({
	id: string | number,
	row?: object
}): void;
~~~

### Parameters

- `id` - (required) the ID of the row to be updated
- `row` - (optional) the new data object of the row

:::info
The full list of the **row** parameters can be found [**here**](api/config/js_kanban_rows_config.md)
:::

### Example

~~~jsx {8-14}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});
// update row data with the "feature" ID
board.updateRow({
	id: "feature",
	row: {
		label: "Updated row",
		collapsed: true
	}
});
~~~

**Change log**: The **id** and **row** parameters were added in v1.1
