---
sidebar_label: add-column
title: add-column Event
description: You can learn about the add-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-column

### Description

@short: Fires when adding a new column

### Usage

~~~jsx {}
"add-column": ({
	id?: string | number,
	column?: object
}) => void;
~~~

### Parameters

The callback of the **add-column** event can take an object with the following parameters:

- `id` - (optional) the new column **ID**
- `column` - (optional) the data object of the new column. The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md) 

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
// subscribe on the "add-column" event
board.api.on("add-column", (obj) => {
	console.log(obj.label);
});
~~~

**Change log**: The **id** and **column** parameters were added in v1.1