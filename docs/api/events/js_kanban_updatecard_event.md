---
sidebar_label: update-card
title: update-card Event
description: You can learn about the update-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-card

### Description

@short: Fires when updating card data

### Usage

~~~jsx {}
"update-card": ({
    id: string | number,
    card?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **update-card** event can take an object with the following parameters:

- `id` - (required) the ID of the card to be updated
- `card` - (optional) the new data object of the card. The full list of the **card** parameters can be found [**here**](api/config/js_kanban_cards_config.md)
- `replace` - (optional) enables/disables fully data replacing

    :::note
    If you set the `replace` parameter to *true*, the old data will be fully replaced by the new ones. Otherwise, the method will update only the values you passed.
    :::

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
// subscribe on the "update-card" event
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- The **id** and **card** parameters were added in v1.1
- The **replace** parameter was added in v1.3