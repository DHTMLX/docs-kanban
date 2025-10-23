---
sidebar_label: add-card
title: add-card Event
description: You can learn about the add-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
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
- `rowId` - (optional) the ID of the row where the card will be placed
- `before` - (optional) the ID of the card before which the new card should be inserted
- `select` - (optional) controls whether the newly added card is selected
- `card` - (optional) the data object representing the new card. You can find the full list of card parameters [here](api/config/js_kanban_cards_config.md)
- `skipProvider` - (optional) controls whether the request to the server is skipped

:::info
To manage internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
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