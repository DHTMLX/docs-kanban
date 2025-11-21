---
sidebar_label: set-sort
title: set-sort Event
description: You can learn about the set-sort event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# set-sort

### Description

@short: Fires when sorting cards

### Usage

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### Parameters

The callback of the **set-sort** event can take the *null* value or an object with the following parameters:

- `by` - (optional) the card field for sorting (*string* or *function*)
- `dir` - (optional) the order of sorting. The possible values are *"asc"* and *"desc"*
- `preserve` - (optional) enables/disables preserving of sorting state
- `columnId` - (optional) the ID of column to be sorted

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
// subscribe on the "set-sort" event
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**Change log:** The event was added in v1.2
