---
sidebar_label: update-card
title: update-card Event
description: Discover the update-card event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# update-card

### Description

@short: Triggered when card data is updated

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

The callback for the **update-card** event accepts an object with these properties:

- `id` - (required) the ID of the card that will be updated
- `card` - (optional) the new card data object. You can find the complete list of **card** parameters [**here**](api/config/js_kanban_cards_config.md)
- `replace` - (optional) controls whether the data is fully replaced or partially updated

    :::note
    When `replace` is set to *true*, the existing data is completely replaced by the new data. If not, only the provided values will be updated.
    :::

- `skipProvider` - (optional) controls whether the update request is sent to the server or not

:::info
To manage internal events, refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "update-card" event
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- The **id** and **card** parameters were introduced in v1.1
- The **replace** parameter was introduced in v1.3