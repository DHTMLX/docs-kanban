---
sidebar_label: end-drag-card
title: end-drag-card Event
description: You can learn about the end-drag-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# end-drag-card

### Description

@short: Triggered when a card dragging action ends

### Usage

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Parameters

The callback for the **end-drag-card** event receives an object with the following details:

- `id` - (required) the ID of the card that was dragged
- `columnId` - (required) the ID of the column where the card is now located
- `rowId` - (optional) the ID of the row where the card is placed
- `before` - (optional) the ID of the card that follows the dragged card in the column
- `source` - (optional) an array containing the IDs of the moved cards

:::info
To manage internal events, you can use the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen to the "end-drag-card" event
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Change log:** This event has been available since v1.4

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
