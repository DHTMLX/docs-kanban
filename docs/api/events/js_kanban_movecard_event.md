---
sidebar_label: move-card
title: move-card Event
description: You can learn about the move-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# move-card

### Description

@short: Triggered when a card is moved

### Usage

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **move-card** event receives an object with the following properties:

- `id` - (required) the ID of the card that is being moved
- `columnId` - (required) the ID of the column where the card will be placed
- `rowId` - (optional) the ID of the row where the card will be placed
- `before` - (optional) the ID of the card before which the moved card will be inserted
- `skipProvider` - (optional) controls whether the request to the server should be prevented

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
// subscribe on the "move-card" event
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
