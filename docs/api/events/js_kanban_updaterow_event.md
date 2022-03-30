---
sidebar_label: update-row
title: update-row Event
description: You can learn about the update-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-row

### Description

@short: Fires when updating a row data

### Usage

~~~jsx {}
"update-row": (config: object) => void;
~~~

### Parameters

The callback of the **update-row** event can take the following parameter:

- `config` - (required) the new data object of the current row. The full list of the row parameters can be found [here](api/config/js_kanban_rows_config.md)

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
// subscribe on the "update-row" event
board.api.on("update-row", (obj) => {
	console.log(obj);
});
~~~
