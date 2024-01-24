---
sidebar_label: scroll
title: scroll Event
description: You can learn about the scroll event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# scroll

### Description

@short: Fires when scrolling to the specified elements

### Usage

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Parameters

The callback of the **scroll** event can take an object with the following parameters:

- `id` - (required) the ID of the target element
- `to` - (required) the type of the target element. The available values are *"column"*, *"row"* and *"card"*
- `options` - (optional) the object of scrolling options. The full list of the scrolling parameters can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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
// subscribe on the "scroll" event
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**Change log:** The event was added in v1.2