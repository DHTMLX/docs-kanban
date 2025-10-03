---
sidebar_label: duplicate-card
title: duplicate-card Event
description: You can learn about the duplicate-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# duplicate-card

### Description

@short: Fires when duplicating a card

### Usage

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### Parameters

The callback of the **duplicate-card** event can take an object with the following parameters:

- `id` - (required) the ID of the card to be duplicated
- `card` - (optional) the data object of the new card. The full list of the card parameters can be found [here](api/config/js_kanban_cards_config.md)
- `select` - (optional) enables/disables selecting new added card

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
// subscribe on the "duplicate-card" event
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**Change log:** The `select` parameter was added in v1.5.10
