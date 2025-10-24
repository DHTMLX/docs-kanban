---
sidebar_label: set-sort
title: set-sort Event
description: You can learn about the set-sort event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# set-sort

### Description

@short: Triggered when cards are sorted

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

The callback for the **set-sort** event accepts either *null* or an object containing the following options:

- `by` - (optional) specifies the card field used for sorting (*string* or *function*)
- `dir` - (optional) defines the sorting direction, either *"asc"* or *"desc"*
- `preserve` - (optional) controls whether the sorting state is kept
- `columnId` - (optional) identifies the column to be sorted by its ID

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
// subscribe on the "set-sort" event
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.2