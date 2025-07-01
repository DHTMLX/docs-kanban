---
sidebar_label: moveCard()
title: moveCard Method
description: Explore the moveCard method in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# moveCard()

### Description

@short: Shifts a card to a specified column (and row).

### Usage

~~~jsx {}
moveCard({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}): void;
~~~

### Parameters

- `id` - (required) the card's ID that needs to be moved 
- `columnId` - (required) the target column's ID where the card will be placed 
- `rowId` - (optional) the target row's ID where the card will be positioned
- `before` - (optional) the ID of the card before which the moved card will be inserted

:::info
When the **rowKey** property is set in the widget configuration, providing the **rowId** in the **moveCard()** method becomes *mandatory*!
:::

### Example

~~~jsx {9-14}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// move the card with ID 1
// it will be placed inside the "inprogress" column and the "feature" row,  
// positioned before the card with ID 8
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
