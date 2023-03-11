---
sidebar_label: delete-link
title: delete-link Event
description: You can learn about the delete-link event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-link

### Description

@short: Fires when removing a link

### Usage

~~~jsx {}
"delete-link": ({
	id: string | number
}) => void;
~~~

### Parameters

The callback of the **delete-link** event can take an object with the following parameters:

- `id` - (required) the ID of the link to be deleted

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	links
});
// subscribe on the "delete-link" event
board.api.on("delete-link", (obj) => {
	console.log(obj.id);
});
~~~

**Change log:** The event was added in v1.4
