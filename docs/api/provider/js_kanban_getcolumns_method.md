---
sidebar_label: getColumns()
title: JS Kanban getColumns method
description: You can learn about the getColumns method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# getColumns()

### Description

Returns a **promise** with the *columns data*

:::info
The **getColumns()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

```js
getColumns: () => promise;
```

### Returns

The **getColumns()** method sends a query to the server by the **GET** method and returns a **promise** with the columns data

### Example

```jsx {2,6}
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
