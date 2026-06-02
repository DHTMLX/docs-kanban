---
sidebar_label: set-sort
title: set-sort Event API
description: Read the set-sort event API for DHTMLX Kanban. Learn how to handle the event triggered when sorting cards.
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
