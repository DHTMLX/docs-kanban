---
sidebar_label: set-search
title: set-search Event
description: Discover the set-search event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, explore API references, test code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# set-search

### Description

@short: Triggered when a card search is performed

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
- `by` - (optional) the card field to search by

:::info
To handle internal events, you can use the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "set-search" event
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
