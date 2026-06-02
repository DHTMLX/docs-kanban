---
sidebar_label: moveCard()
title: moveCard Method API
description: Read the moveCard method API for DHTMLX Kanban. Learn how to move a card to a specific column or row.
---

# moveCard()

### Description

@short: Moves a card to the specified column (and row)

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

- `id` - (required) the ID of the card that will be moved 
- `columnId` - (required) the ID of the column the card will be placed into 
- `rowId` - (optional) the ID of the row the card will be placed into
- `before` - (optional) the ID of the card, before which the new card will be placed

:::info
If you specify the **rowKey** property in the widget config, the **rowId** parameter of the **moveCard()** method is *required*!
:::

### Example

~~~jsx {9-14}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// move the card with an 1 ID
// the item will be placed into the "inprogress" column and the "feature" row,  
// before the card with 8 ID
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
