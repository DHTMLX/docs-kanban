---
sidebar_label: start-drag-card
title: start-drag-card Event
description: You can learn about the start-drag-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# start-drag-card

### Description

@short: Triggered when a card begins to be dragged

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

The callback for the **start-drag-card** event receives an object with the following properties:

- `id` - (required) the ID of the card being dragged
- `columnId` - (required) the ID of the column where the card is currently located
- `rowId` - (optional) the ID of the row where the card is currently positioned
- `before` - (optional) the ID of the card that follows the dragged card in the column
- `source` - (optional) an array containing the IDs of the cards being moved

:::info
To work with internal events, the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods) can be used.
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

**Change log:** This event was introduced in version 1.4

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
