---
sidebar_label: api.getStores()
title: JS Kanban api.getStores method
description: You can learn about the api.getStores method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.getStores()

### Description

Gets an object with the ***StateStore*** and ***DataStore*** objects of JS Kanban

### Usage

```js
api.getStores() => object;
```

### Returns

The method returns an object with *StateStore* and *DataStore*:

```js
{
	state: StateStore, // ( object )
	data: DataStore // ( object )
}
```

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the StateStore and DataStore objects of JS Kanban
const stores = board.api.getStores();
console.log(stores);
```
