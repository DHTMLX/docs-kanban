---
sidebar_label: update-card
title: update-card Event
description: Explore the update-card event in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and a free 30-day trial of DHTMLX Kanban.
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

The callback for the **update-card** event receives an object with these properties:

- `id` - (required) the identifier of the card to update
- `card` - (optional) an object containing the new card data. Check out the full list of **card** attributes [**here**](/api/config/js_kanban_cards_config.md)
- `replace` - (optional) determines whether the existing data is fully replaced

:::note
When `replace` is set to *true*, the old data is completely overwritten by the new data. Otherwise, only the specified values are updated.
:::

- `skipProvider` - (optional) controls whether the update is sent to the server or not

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
// listen to the "update-card" event
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- Added **id** and **card** parameters in v1.1
- Added **replace** parameter in v1.3
