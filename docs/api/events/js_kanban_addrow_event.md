---
sidebar_label: add-row
title: add-row Event
description: You can learn about the add-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-row

### Description

@short: Fires when adding a new row

### Usage

~~~jsx {}
"add-row": ({
	id?: string | number,
	row?: object,
	before?: string | number
}) => void;
~~~

### Parameters

The callback of the **add-row** event can take an object with the the following parameters:

- `id` - (optional) the ID of the new row
- `row` - (optional) the data object of the new row. The full list of the **row** parameters can be found [**here**](api/config/js_kanban_rows_config.md)
- `before` - (optional) the ID of the row, before which the new row will be placed

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// subscribe on the "add-row" event 
board.api.on("add-row", (obj) => {
	console.log(obj.id);
});
~~~

**Change log**: The **id**, **before** and **row** parameters were added in v1.1
