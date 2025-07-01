---
sidebar_label: deleteCard()
title: deleteCard Method
description: You can learn about the deleteCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteCard()

### Description

@short: Deletes a specific card from the Kanban's datastore.

### Usage

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the unique identifier of the card to remove

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// delete a card by its id
board.deleteCard({ id: 1 });
~~~
