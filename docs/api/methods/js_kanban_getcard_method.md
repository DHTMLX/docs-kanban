---
sidebar_label: getCard()
title: getCard Method
description: You can learn about the getCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getCard()

### Description

@short: Retrieves the data object of a card using its specified ID

### Usage

~~~jsx {}
getCard(id: string | number): object;
~~~

### Parameters

- `id` - (required) the ID of the card you want to access

### Returns

This method returns the data object associated with the card identified by the given ID

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// retrieve the data object for the card with ID 1
board.getCard(1);
~~~
