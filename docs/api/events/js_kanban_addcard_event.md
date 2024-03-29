---
sidebar_label: add-card
title: add-card Event
description: You can learn about the add-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-card

### Description

@short: Fires when adding a new card

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

The callback of the **add-card** event can take an object with the following parameters:

- `columnId` - (required) the ID of the target column
- `id` - (optional) the ID of the new card
- `rowId` - (optional) the ID of the target row
- `before` - (optional) the ID of the card, before which the new card will be placed
- `select` - (optional) enables/disables selecting new added card
- `card` - (optional) the data object of the new card. The full list of the card parameters can be found [here](api/config/js_kanban_cards_config.md)
- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

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
// subscribe on the "add-card" event
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
