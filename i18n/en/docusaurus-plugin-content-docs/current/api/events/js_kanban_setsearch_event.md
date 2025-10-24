---
sidebar_label: set-search
title: set-search Event
description: Find out about the set-search event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# set-search

### Description

@short: Triggered when a search is performed on cards

### Usage

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Parameters

The callback for the **set-search** event receives an object containing these parameters:

- `value` - (required) the search term
- `by` - (optional) the card field to search within

:::info
To work with internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen to the "set-search" event
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~