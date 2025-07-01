---
sidebar_label: setSort()
title: setSort Method
description: You can learn about the setSort method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setSort()

### Description

@short: Sorts cards based on the specified criteria

### Usage

~~~jsx {}
setSort(
    {
        by?: string, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### Parameters

The method accepts either an object with sorting options or *null*. Within the object, you can define the following properties:

- `by` - (optional) the card field to use for sorting. This can be a *string* or a *function* that returns the value to sort by
- `dir` - (optional) the sorting direction, which can be either *"asc"* or *"desc"*
- `columnId` - (optional) the ID of the column to apply sorting to
- `preserve` - (optional) controls whether the sorting state is maintained (*false* by default)

:::info
When **preserve** is set to *false*, sorting is applied just once. This means that after cards are added or moved, the sorting order will not be maintained. If **preserve** is enabled, the sort order stays consistent even after cards are added or rearranged. To clear the preserved sorting, use **setSort()** with a ***null*** argument.
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// sort the cards in ascending order by the "label" property
board.setSort({ 
    by: (obj) => obj.label, // or by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**Change log:** The method was added in v1.2
