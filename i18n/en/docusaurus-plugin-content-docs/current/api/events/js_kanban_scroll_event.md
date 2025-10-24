---
sidebar_label: scroll
title: scroll Event
description: Explore the scroll event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# scroll

### Description

@short: Triggered when scrolling to specific elements

### Usage

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Parameters

The callback for the **scroll** event receives an object with these parameters:

- `id` - (required) the ID of the element to scroll to
- `to` - (required) the type of element to scroll to. Possible values: *"column"*, *"row"*, or *"card"*
- `options` - (optional) an object with scrolling options. You can find the full list of parameters [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
To work with inner events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "scroll" event
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.2