---
sidebar_label: addCard()
title: JS Kanban addCard method
description: You can learn about the addCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# addCard()

### Description

Adds a new card into JS Kanban

### Usage

```js
addCard: ({
	columnId: string | number,
	id?: string | number,
	rowId?: string | number,
	before?: string | number,
	card?: object
}) => void;
```

### Parameters

- `columnId: string | number` - the **ID** of the target column
- `id?: string | number` -  the **ID** of the new card
- `rowId?: string | number` - the **ID** of the target row
- `before?: string | number` - the **ID** of the card, before which the new card will be placed  
- `card?: object` - the data object of the new card

### Example

```jsx {7-12}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new card into the "backlog" column
board.addCard({
	id: 1,
	columnId: "backlog",
	card: { label: "New card" }
});
```

:::tip
You can also specify the ID of the new card in the **card** object
:::
