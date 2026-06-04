---
sidebar_label: deleteCard()
title: deleteCard Method API
description: Read the deleteCard method API for DHTMLX Kanban. Learn how to remove a card from the board by its ID.
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
