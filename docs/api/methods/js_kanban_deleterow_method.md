---
sidebar_label: deleteRow()
title: Kanban deleteRow method
description: You can learn about the deleteRow method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# deleteRow()

### Description

Removes the specified **row** from datastore of Kanban

### Usage

~~~jsx {}
deleteRow: ({ id: string | number }) => void;
~~~

### Parameters

- `id: string | number` - the **ID** of the row to be deleted (*mandatory*)

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
