---
sidebar_label: set-sort
title: set-sort Event
description: You can learn about the set-sort event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# set-sort

### Description

@short: Triggered whenever cards are sorted.

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

The callback for the **set-sort** event can receive either *null* or an object containing the following properties:

- `by` - (optional) specifies the card field used for sorting (*string* or *function*)
- `dir` - (optional) indicates the sorting direction, either *"asc"* or *"desc"*
- `preserve` - (optional) determines whether to keep the current sorting state
- `columnId` - (optional) identifies which column is being sorted

:::info
To work with inner events, refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "set-sort" event
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.2
