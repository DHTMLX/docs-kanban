---
sidebar_label: move-card
title: move-card Event
description: You can learn about the move-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# move-card

### Description

@short: Fires when moving a card

### Usage

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}) => void;
~~~

### Parameters

The callback of the **move-card** event can take an object with the following parameters:

- `id` - (required) the ID of the card that will be moved
- `columnId` - (required) the ID of the column the card will be placed into
- `rowId` - (optional) the ID of the row the card will be placed into
- `before` - (optional) the ID of the card, before which the new card will be placed

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
// subscribe on the "move-card" event
board.api.on("move-card", (obj) => {
	console.log(obj.columnId);
});
~~~

**Related sample:** [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)