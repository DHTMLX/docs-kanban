---
sidebar_label: deleteRow()
title: deleteRow Method API
description: Read the deleteRow method API for DHTMLX Kanban. Learn how to remove a row from the board by its ID.
---

# deleteRow()

### Description

@short: Removes the specified row from datastore of Kanban

### Usage

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the row to be deleted 

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// remove row by its id
board.deleteRow({ id: "feature" });
~~~
