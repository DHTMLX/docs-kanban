---
sidebar_label: move-column
title: move-column Event
description: You can learn about the move-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# move-column

### Description

@short: Fires when moving a column

### Usage

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
	skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **move-column** event can take an object with the following parameters:

- `id` - (required) the ID of the column to be moved
- `before` - (required) the ID of the column, the moved one will be placed before it
- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

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
// subscribe on the "move-column" event
board.api.on("move-column", (obj) => {
	console.log(obj);
});
~~~

**Change log:** This event was added in v1.1