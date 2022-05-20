---
sidebar_label: updateColumn()
title: updateColumn Method
description: You can learn about the updateColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateColumn()

### Description

@short: Updates the column data by its ID

### Usage

~~~jsx {}
updateColumn({
	id: string | number,
	column?: object
}): void;
~~~

### Parameters

- `id` - (required) the ID of the column to be updated
- `column` - (optional) the new data object of the column

:::info
The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md)
:::

### Example

~~~jsx {7-15}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// update column data with the "backlog" ID
board.updateColumn({
	id: "backlog",
	column: {
		label: "Updated column",
		limit: 3,
		strictLimit: 3,
		collapsed: true
	}
});
~~~

**Change log**: The **id** and **column** parameters were added in v1.1
