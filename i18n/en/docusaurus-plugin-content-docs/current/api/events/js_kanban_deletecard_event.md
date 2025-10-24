---
sidebar_label: delete-card
title: delete-card Event
description: You can learn about the delete-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-card

### Description

@short: This event triggers when a card is removed.

### Usage

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-card** event receives an object containing the following properties:

- `id` - (required) the identifier of the card being deleted
- `skipProvider` - (optional) controls whether the request to the server should be skipped

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
// subscribe on the "delete-card" event 
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~