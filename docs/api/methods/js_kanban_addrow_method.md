---
sidebar_label: addRow()
title: addRow Method
description: You can learn about the addRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addRow()

### Description

@short: Adds a new row into Kanban

### Usage

~~~jsx {}
addRow(config: object): void;
~~~

### Parameters

- `config` - (required) the data object of the new row 

:::info
Note, the **ID** of the new row is required. Other row parameters can be found [**here**](api/config/js_kanban_rows_config.md)
:::

### Example

~~~jsx {7-11}
// create Kanban
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
~~~
