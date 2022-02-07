---
sidebar_label: unselect-card
title: unselect-card Event
description: You can learn about the unselect-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# unselect-card

### Description

@short: Fires when unselecting a card

### Usage

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **unselect-card** event can take an object with the following parameters:

- `id` - (required) the ID of the card to be unselected

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
// subscribe on the "unselect-card" event
board.api.on("unselect-card", (obj) => {
	console.log(obj.id);
});
~~~
