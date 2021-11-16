---
sidebar_label: unselectCard()
title: JS Kanban unselectCard method
description: You can learn about the unselectCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# unselectCard()

### Description

Unselects card(s) by its ID

### Usage

```js
unselectCard: ({ id: string | number }) => void;
```

:::info
To unselect all cards, call the **unselectCard()** method without parameters
:::

### Parameters

- `id: string | number` - the **ID** of the card to be unselected

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// unselect the card with the 1 ID
board.unselectCard({ id: 1 });
```
