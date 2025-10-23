---
sidebar_label: setSort()
title: setSort Method
description: You can learn about the setSort method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setSort()

### Description

@short: Organizes cards based on the given sorting criteria

### Usage

~~~jsx {}
setSort(
    {
        by?: string | function, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### Parameters

This method accepts either an object with sorting options or *null*. Within the object, you can define the following:

- `by` - (optional) specifies the card property to sort by. It can be a *string* or a *function* that returns the value to sort on
- `dir` - (optional) sets the sorting direction, either *"asc"* or *"desc"*
- `columnId` - (optional) identifies the column whose cards should be sorted
- `preserve` - (optional) controls whether the sorting order is maintained (*false* by default)

:::info
When **preserve** is set to *false*, sorting applies only once. This means that if cards are added or moved afterward, the sorting won’t be kept and the order may change. If set to *true*, the sorting will stay consistent even after cards are added or moved. To turn off preserving, call **setSort()** with *null*.
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// sort the cards in ascending order by the "label" parameter
board.setSort({ 
    by: (obj) => obj.label, // or by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**Change log:** The method was added in v1.2