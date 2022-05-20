---
sidebar_label: deleteCard()
title: deleteCard Method
description: You can learn about the deleteCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteCard()

### Description

@short: Removes the specified card from datastore of Kanban

### Usage

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the card to be deleted 

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// remove card by its id
board.deleteCard({ id: 1 });
~~~
