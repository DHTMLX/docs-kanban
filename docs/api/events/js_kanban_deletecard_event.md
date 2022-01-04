---
sidebar_label: delete-card
title: delete-card Event
description: You can learn about the delete-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-card

### Description

@short: fires when removing a card

### Usage

~~~jsx {}
"delete-card": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-card** event can take an object with the following parameters:

- `id` - (mandatory) the ID of the card to be deleted

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
// subscribe on the "delete-card" event 
board.api.on("delete-card", (obj) => {
	console.log(obj.id);
});
~~~