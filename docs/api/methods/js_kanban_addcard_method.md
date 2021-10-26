---
sidebar_label: addCard()
title: JS Kanban addCard method
description: You can learn about the addCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# addCard()

### Description

Adds a new card into JS Kanban

### Usage
`
addCard: ({
	rowId: string,
	colId: string,
	overCardId: string,
	card: object
}) => void;
`

### Parameters

- `rowId: string` - the **ID** of the target row
- `colId: string` - the **ID** of the target column
- `overCardId: string` - the **ID** of the card, before which the new card will be placed  
- `card: object` - the data object of the new card

### Example

```jsx
// add new card into the "backlog" column
kanban.addCard({
	colId: "backlog",
	card: { label: "New card" }
});
```
