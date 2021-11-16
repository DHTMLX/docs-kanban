---
sidebar_label: getCards()
title: JS Kanban getCards method
description: You can learn about the getCards method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# getCards()

### Description

Returns a **promise** with the *cards data*

:::info
The **getCards()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

```js
getCards: () => promise;
```

### Returns

The **getCards()** method sends a query to the server by the **GET** method and returns a **promise** with the cards data

### Example

```jsx {2,5}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
	restProvider.getCards(),
	restProvider.getColumns()
]).then(([cards, columns]) => {
	const board = new kanban.Kanban("#root", {
		cards,
		columns
	});
	board.api.setNext(restProvider);
});
```
