---
sidebar_label: start-drag-card
title: start-drag-card Event
description: You can learn about the start-drag-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# start-drag-card

### Description

@short: Triggered when a card drag operation begins

### Usage

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Parameters

The callback for the **start-drag-card** event receives an object containing these properties:

- `id` - (required) the ID of the card being dragged
- `columnId` - (required) the ID of the column where the card is currently located
- `rowId` - (optional) the ID of the row where the card is currently located
- `before` - (optional) the ID of the card that comes immediately after the dragged card in the column
- `source` - (optional) an array of IDs representing the cards being moved

:::info
To work with internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
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

**Change log:** The event was introduced in v1.4

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)