---
sidebar_label: deleteColumn()
title: deleteColumn Method API
description: Read the deleteColumn method API for DHTMLX Kanban. Learn how to remove a column from the board by its ID.
---

# deleteColumn()

### Description

@short: Removes the specified column from datastore of Kanban

### Usage

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the column to be deleted

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
