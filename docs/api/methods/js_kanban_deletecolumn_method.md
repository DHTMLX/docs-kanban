---
sidebar_label: deleteColumn()
title: Kanban deleteColumn method
description: You can learn about the deleteColumn method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# deleteColumn()

### Description

Removes the specified **column** from datastore of Kanban

### Usage

~~~jsx {}
deleteColumn: ({ id: string | number }) => void;
~~~

### Parameters

- `id: string | number` - the **ID** of the column to be deleted (*mandatory*)

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
