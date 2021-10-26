---
sidebar_label: updateCard()
title: JS Kanban updateCard method
description: You can learn about the updateCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# updateCard()

### Description

Updates the card data by its ID

### Usage

`updateCard: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current card

:::note
Note, the ID of the card to be updated is required. Other card parameters you can find here (!!! Добавить ссылочку).
:::

### Example

```jsx
// update data of the card with the "1" ID
kanban.updateCard({
	id: "1",
	label: "New Label",
	lane: "task",
	stage: "inprogress"
	/*other parameters*/
});
```
