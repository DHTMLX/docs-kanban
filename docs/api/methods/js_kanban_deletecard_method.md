---
sidebar_label: deleteCard()
title: Kanban deleteCard method
description: You can learn about the deleteCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# deleteCard()

### Description

Removes the specified **card** from datastore of Kanban

### Usage

```js
deleteCard: ({ id: string | number }) => void;
```

### Parameters

- `id: string | number` - the **ID** of the card to be deleted

### Example

```jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// remove card by its id
board.deleteCard({ id: 1 });
```
