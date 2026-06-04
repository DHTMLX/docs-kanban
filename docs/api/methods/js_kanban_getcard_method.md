---
sidebar_label: getCard()
title: getCard Method API
description: Read the getCard method API for DHTMLX Kanban. Learn how to get a card data object by its ID.
---

# getCard()

### Description

@short: Gets a data object of the card by the specified ID

### Usage

~~~jsx {}
getCard(id: string | number): object;
~~~

### Parameters

- `id` - (required) the ID of the target card 

### Returns

The method returns the data object of the card with the specified ID

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// get the data object of the card with the 1 ID
const card_data = board.getCard(1);
console.log(card_data);
~~~
