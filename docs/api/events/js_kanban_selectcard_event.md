---
sidebar_label: select-card
title: select-card Event
description: Discover how the select-card event works in the DHTMLX JavaScript Kanban library. Explore developer guides and API references, check out code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# select-card

### Description

@short: Triggered when a card is selected

### Usage

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### Parameters

The callback for the **select-card** event receives an object with these properties:

- `id` - (required) the ID of the card that was selected
- `groupMode` - (optional) indicates multiselect mode (defaults to false)

:::info
To manage internal events, you can use the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "select-card" event
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~
