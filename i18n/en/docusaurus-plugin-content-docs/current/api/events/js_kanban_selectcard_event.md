---
sidebar_label: select-card
title: select-card Event
description: Discover the select-card event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try out code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
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

The callback for the **select-card** event receives an object with the following properties:

- `id` - (required) the selected card's ID
- `groupMode` - (optional) indicates multiselect mode (defaults to false)

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "select-card" event
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~