---
sidebar_label: moveRow()
title: moveRow Method
description: You can learn about the moveRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# moveRow()

### Description

@short: Shifts a row to a new spot within the board.

### Usage

~~~jsx {}
moveRow({
    id: string | number,
    before: string | number
}): void;
~~~

### Parameters

- `id` - (required) the ID of the row that needs to be moved
- `before` - (required) the ID of the row before which the moved row will be positioned

### Example

~~~jsx {8-11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// move the "task" swimlane and place it before the "feature" one
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**Change log:** The method was added in v1.1
