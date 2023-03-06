---
sidebar_label: start-drag-card
title: start-drag-card Event
description: You can learn about the start-drag-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# start-drag-card

### Description

@short: Fires when start dragging a card

### Usage

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### Parameters

The callback of the **start-drag-card** event can take an object with the following parameters:

- `id` - (required) the ID of the dragged card
- `columnId` - (required) the ID of the column where the card currently is
- `rowId` - (optional)  the ID of the row where the card currently is
- `before` - (optional) the ID of a card that is currently after the dragged card in the column
- `source` - (optional) the array of moved cards' IDs

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
// subscribe on the "start-drag-card" event
board.api.on("start-drag-card", (obj) => {
	console.log(obj.columnId);
});
~~~

**Change log:** The event was added in v1.4