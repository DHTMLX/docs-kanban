---
sidebar_label: unselect-card
title: unselect-card Event API
description: Read the unselect-card event API for DHTMLX Kanban. Learn how to handle the event triggered when unselecting a card.
---

# unselect-card

### Description

@short: Fires when unselecting a card

### Usage

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **unselect-card** event can take an object with the following parameter:

- `id` - (required) the ID of the card to be unselected

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
// subscribe on the "unselect-card" event
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~
