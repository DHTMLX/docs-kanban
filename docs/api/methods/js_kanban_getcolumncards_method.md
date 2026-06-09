---
sidebar_label: getColumnCards()
title: getColumnCards Method API
description: Read the getColumnCards method API for DHTMLX Kanban. Learn how to get all cards of a column as an array of data objects.
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
