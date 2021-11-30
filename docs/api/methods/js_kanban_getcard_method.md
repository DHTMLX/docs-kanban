---
sidebar_label: getCard()
title: Kanban getCard method
description: You can learn about the getCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# getCard()

### Description

Gets a data object of the card with the specified ID

### Usage

```js
getCard: (id: string | number) => object;
```

### Parameters

- `id: string | number` - the **ID** of the target card

### Returns

The method returns the data object of the card with the specified ID

### Example

```jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the data object of the card with the 1 ID
board.getCard(1);
```
