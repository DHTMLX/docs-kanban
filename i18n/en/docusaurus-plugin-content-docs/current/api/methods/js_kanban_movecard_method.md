---
sidebar_label: moveCard()
title: moveCard Method
description: You can learn about the moveCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# moveCard()

### Description

@short: Moves a card to a specified column (and row)

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

- `id` - (required) the ID of the card to be moved  
- `columnId` - (required) the ID of the column where the card will be placed  
- `rowId` - (optional) the ID of the row where the card will be positioned  
- `before` - (optional) the ID of the card before which the moved card will be inserted  

:::info
If the **rowKey** property is set in the widget configuration, the **rowId** parameter in the **moveCard()** method must be provided.
:::

### Example

~~~jsx {9-14}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// move the card with ID 1
// it will be placed into the "inprogress" column and the "feature" row,  
// before the card with ID 8
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~