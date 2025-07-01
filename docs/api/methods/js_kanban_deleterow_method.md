---
sidebar_label: deleteRow()
title: deleteRow Method
description: You can learn about the deleteRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteRow()

### Description

@short: Deletes the specified row from the Kanban datastore.

### Usage

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the identifier of the row that should be removed 

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// delete a row using its id
board.deleteRow({ id: "feature" });
~~~
