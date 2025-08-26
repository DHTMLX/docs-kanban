---
sidebar_label: delete-card
title: delete-card Event
description: Explore the delete-card event in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# delete-card

### Description

@short: Triggered when a card is removed

### Usage

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-card** event receives an object with these properties:

- `id` - (required) the identifier of the card being deleted
- `skipProvider` - (optional) controls whether to block sending the request to the server

:::info
To manage internal events, refer to the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "delete-card" event 
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
