---
sidebar_label: moveCard()
title: moveCard Method
description: You can learn about the moveCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# moveCard()

### Description

@short: moves a card to the specified column (and row)

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

- `id` - (mandatory) the **ID** of the card that will be moved 
- `columnId` - (mandatory) the **ID** of the column the card will be placed into 
- `rowId` - (optional) the **ID** of the row the card will be placed into
- `before` - (optional) the **ID** of the card, before which the new card will be placed

:::info
If you specify the **rowKey** property in the widget config, the **rowId** parameter of the **moveCard()** method is *mandatory*!
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
