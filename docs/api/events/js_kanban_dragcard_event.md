---
sidebar_label: drag-card
title: drag-card Event
description: You can learn about the drag-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# drag-card

### Description

@short: This event triggers whenever a card is moved using drag-and-drop.

### Usage

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### Parameters

The callback for the **drag-card** event receives an object with the following properties:

- `id` - (required) the ID of the card being dragged
- `columnId` - (required) the ID of the column where the card is currently located
- `rowId` - (optional) the ID of the row where the card is currently located
- `before` - (optional) the ID of the card that appears immediately after the dragged card in the column
- `source` - (optional) an array containing the IDs of the cards that were moved

:::info
To manage internal events, you can use the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "drag-card" event
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Change log:** This event has been available since version 1.4

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
