---
sidebar_label: duplicate-card
title: duplicate-card Event
description: Explore the duplicate-card event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# duplicate-card

### Description

@short: Triggered when a card is duplicated

### Usage

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### Parameters

The callback for the **duplicate-card** event receives an object with these properties:

- `id` - (required) the ID of the card being duplicated
- `card` - (optional) the data object for the new card. You can find the full list of card parameters [here](api/config/js_kanban_cards_config.md)
- `select` - (optional) controls whether the newly added card is selected

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
// listen for the "duplicate-card" event
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**Change log:** The `select` parameter was introduced in v1.5.10