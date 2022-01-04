---
sidebar_label: delete-column
title: delete-column Event
description: You can learn about the delete-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-column

### Description

@short: fires when removing a column

### Usage

~~~jsx {}
"delete-column": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-column** event can take an object with the following parameters:

- `id` - (mandatory) the ID of the column to be deleted

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
// subscribe on the "delete-column" event 
board.api.on("delete-column", (obj) => {
	console.log(obj.id);
});
~~~