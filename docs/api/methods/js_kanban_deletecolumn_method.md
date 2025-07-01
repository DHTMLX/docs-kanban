---
sidebar_label: deleteColumn()
title: deleteColumn Method
description: You can learn about the deleteColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteColumn()

### Description

@short: Deletes a specified column from the Kanban datastore.

### Usage

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the column to remove

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// remove column by its id
board.deleteColumn({ id: "backlog" });
~~~
