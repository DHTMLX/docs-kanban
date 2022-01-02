---
sidebar_label: update-column
title: update-column Event
description: You can learn about the update-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-column

### Description

@short: fires when updating a column data

### Usage

~~~jsx {}
"update-column": (config: object) => void;
~~~

### Parameters

The callback of the **update-column** event can take an object with the following parameters:

- `config` - (mandatory) the new data object of the current column. The full list of the column parameters can be found [here](api/config/js_kanban_columns_config.md)

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
// subscribe on the "update-column" event
board.api.on("update-column", (obj) => {
	console.log(obj);
});
~~~
