---
sidebar_label: unselect-card
title: unselect-card Event
description: You can learn about the unselect-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# unselect-card

### Description

@short: Triggered when a card is unselected

### Usage

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameters

The callback for the **unselect-card** event receives an object containing the following property:

- `id` - (required) the ID of the card that was unselected

:::info
To manage internal events, you can refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
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
