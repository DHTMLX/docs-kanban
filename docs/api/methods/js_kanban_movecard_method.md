---
sidebar_label: moveCard()
title: JS Kanban moveCard method
description: You can learn about the moveCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# moveCard()

### Description

Moves the card to the specified column (and row)

### Usage

```js
moveCard: ({
	id: string | number,
	columnId: string | number,
	rowId?: string | number,
	before?: string | number
}) => void;
```

### Parameters

- `id: string | number` - the **ID** of the card that will be moved
- `columnId: string | number` - the **ID** of the column the card will be placed
- `rowId?: string | number` - the **ID** of the row the card will be placed
- `before?: string | number` - the **ID** of the card, before which the new card will be placed

:::info
If you specified the **rowKey** property in the widget config, the **rowId** parameter of the **moveCard** method is *mandatory*!
:::

### Example

```jsx {9-14}
// create JS Kanban
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
```
