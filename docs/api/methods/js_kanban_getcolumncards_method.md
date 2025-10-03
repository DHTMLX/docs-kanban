---
sidebar_label: getColumnCards()
title: getColumnCards Method
description: You can learn about the getColumnCards method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getColumnCards()

### Description

@short: Gets an array that stores data objects of all cards in the specific column

### Usage

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### Parameters

- `id` - (required) the ID of the target column

### Returns

The method returns an array that stores data objects of all cards in the specific column

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// get data objects of all card within the column with the 1 ID
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**Change log**: The method was added in v1.7
