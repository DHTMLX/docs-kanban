---
sidebar_label: add-card
title: add-card Event
description: Discover how the add-card event works in the DHTMLX JavaScript Kanban library. Explore developer guides, API references, test code samples, check out live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# add-card

### Description

@short: Triggered when a new card is added

### Usage

~~~jsx {}
"add-card": ({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object,
    skipProvider?: boolean,
}) => void;
~~~

### Parameters

The callback for the **add-card** event receives an object with these properties:

- `columnId` - (required) the ID of the column where the card will be added
- `id` - (optional) the ID assigned to the new card
- `rowId` - (optional) the ID of the row where the card should be placed
- `before` - (optional) the ID of the card that the new card will be inserted before
- `select` - (optional) determines if the newly added card should be selected
- `card` - (optional) the data object representing the new card. Complete details of card parameters are available [here](/api/config/js_kanban_cards_config.md)
- `skipProvider` - (optional) controls whether the request to the server should be skipped

:::info
To manage internal events, refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "add-card" event
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
