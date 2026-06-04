---
sidebar_label: delete-card
title: delete-card Event API
description: Read the delete-card event API for DHTMLX Kanban. Learn how to handle the event triggered when removing a card.
---

# delete-card

### Description

@short: Fires when removing a card

### Usage

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **delete-card** event can take an object with the following parameter:

- `id` - (required) the ID of the card to be deleted
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
// subscribe on the "delete-card" event 
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
