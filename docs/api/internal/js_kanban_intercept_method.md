---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.intercept()

### Description

@short: Allows intercepting and preventing the inner events

### Usage

~~~jsx {}
api.intercept(
	event: string,
	callback: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `callback` - (required) a callback to be performed (the callback arguments will depend on the event to be fired)

### Events

:::info
The full list of the Kanban internal events can be found [**here**](api/api_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// forbid moving cards to the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
	if(columnId! == "done" ){
		return false;
	}
});
~~~
