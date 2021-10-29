---
sidebar_label: getCard()
title: JS Kanban getCard method
description: You can learn about the getCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# getCard()

### Description

Gets the data object of the card with the specified ID

### Usage

```js
getCard: (id: string | number) => obj;
```

### Parameters

- `id: string | number` - the **ID** of the target card

### Returns

The method returns the data object of the card with the specified ID

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the data object of the card with the 1 ID
board.getCard(1);
```
