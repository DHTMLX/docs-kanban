---
sidebar_label: scroll
title: scroll Event
description: Explore the scroll event in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, try out code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# scroll

### Description

@short: Triggered when scrolling to specified elements

### Usage

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Parameters

The callback for the **scroll** event receives an object with these properties:

- `id` - (required) the ID of the target element
- `to` - (required) specifies the target element type: *"column"*, *"row"*, or *"card"*
- `options` - (optional) an object containing scrolling options. See the full list of parameters [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
To handle inner events, you can use the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe to the "scroll" event
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.2
