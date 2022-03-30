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
updateColumn(config: object): void;
~~~

### Parameters

- `config` - (required) the new data object of the current column 

:::info
Note, the **ID** of the column to be updated is required. Other column parameters can be found [**here**](api/config/js_kanban_columns_config.md)
:::

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// update a label of the column with the "backlog" ID
board.updateColumn({
	id: "backlog",
	label: "New Column"
});
~~~
