---
sidebar_label: delete-row
title: delete-row Event
description: You can learn about the delete-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-row

### Description

@short: Fires when removing a row

### Usage

~~~jsx {}
"delete-row": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-row** event can take an object with the following parameters:

- `id` - (required) the ID of the row to be deleted

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
// subscribe on the "delete-row" event
board.api.on("delete-row", (obj) => {
	console.log(obj.id);
});
~~~
