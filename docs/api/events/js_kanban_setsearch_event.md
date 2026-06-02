---
sidebar_label: set-search
title: set-search Event API
description: Read the set-search event API for DHTMLX Kanban. Learn how to handle the event triggered when searching for cards.
---

# set-search

### Description

@short: Fires when searching for cards

### Usage

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Parameters

The callback of the **set-search** event can take an object with the following parameters:

- `value` - (required) the value to search
- `by` - (optional) the card field for searching

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
// subscribe on the "set-search" event
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
