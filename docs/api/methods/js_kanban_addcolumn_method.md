---
sidebar_label: addColumn()
title: addColumn Method
description: You can learn about the addColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addColumn()

### Description

@short: Adds a new column into Kanban

### Usage

~~~jsx {}
addColumn({
	id?: string | number,
	column?: object,
	before?: string | number
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the new column
- `column` - (optional) the data object of the new column 
- `before` - (optional) the ID of the column, before which the new column will be placed 

:::info
The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md)
:::

### Example

~~~jsx {7-16}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new column
board.addColumn({
	id: "extra_column",
	column: {
		label: "Extra column",
		limit: 2,
		strictLimit: 2,
		collapsed: true
	},
	before: "column_2"
});
~~~

**Change log**: The **id**, **column** and **before** parameters were added in v1.1