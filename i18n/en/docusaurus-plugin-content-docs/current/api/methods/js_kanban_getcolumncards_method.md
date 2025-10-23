---
sidebar_label: getColumnCards()
title: getColumnCards Method
description: You can learn about the getColumnCards method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getColumnCards()

### Description

@short: Retrieves an array containing data objects for all cards within a specified column

### Usage

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### Parameters

- `id` - (required) the ID of the column you want to access

### Returns

This method returns an array filled with data objects representing all the cards in the specified column

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// retrieve data objects for all cards in the column with ID 1
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**Change log**: The method was added in v1.7