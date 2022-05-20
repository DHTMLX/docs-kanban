---
sidebar_label: move-row
title: move-row Event
description: You can learn about the move-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# move-row

### Description

@short: Fires when moving a row

### Usage

~~~jsx {}
"move-row": ({
    id: string | number,
    before : string | number
}) => void;
~~~

### Parameters

The callback of the **move-row** event can take an object with the following parameters:

- `id` - (required) the ID of the row to be moved
- `before` - (required) the ID of the row, the moved one will be placed before it

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
    rows
});
// subscribe on the "move-row" event
board.api.on("move-row", (obj) => {
	console.log(obj);
});
~~~

**Change log:** This event was added in v1.1