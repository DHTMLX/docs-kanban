---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.on()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.on(
	event: string,
	handler: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)

### Events

:::info
The full list of the Kanban internal events can be found [**here**](api/api_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// output the card data in console when its moving
board.api.on("move-card", ({ id, columnId }) => {
	console.log({ id, columnId });
});
~~~
