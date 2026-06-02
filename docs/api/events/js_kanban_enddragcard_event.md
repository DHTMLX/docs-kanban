---
sidebar_label: end-drag-card
title: end-drag-card Event API
description: Read the end-drag-card event API for DHTMLX Kanban. Learn how to handle the event triggered when stop dragging a card.
---

# end-drag-card

### Description

@short: Fires when stop dragging a card

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

The callback of the **end-drag-card** event can take an object with the following parameters:

- `id` - (required) the ID of the dragged card
- `columnId` - (required) the ID of the column where the card currently is
- `rowId` - (optional)  the ID of the row where the card currently is
- `before` - (optional) the ID of a card that is currently after the dragged card in the column
- `source` - (optional) the array of moved cards' IDs

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "end-drag-card" event
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Change log:** The event was added in v1.4

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
