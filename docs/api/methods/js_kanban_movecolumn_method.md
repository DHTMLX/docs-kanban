---
sidebar_label: moveColumn()
title: moveColumn Method
description: You can learn about the moveColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# moveColumn()

### Description

@short: Moves a column to the new position

### Usage

~~~jsx {}
moveColumn({
	id: string | number,
	before: string | number
}): void;
~~~

### Parameters

- `id` - (required) the ID of the column to be moved
- `before` - (required) the ID of the column, the moved one will be placed before it

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// move the "backlog" column and place it before the "done" one
board.moveColumn({
	id: "backlog",
	before: "done"
});
~~~

**Change log:** The method was added in v1.1
