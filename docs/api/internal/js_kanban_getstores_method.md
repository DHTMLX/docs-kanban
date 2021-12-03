---
sidebar_label: api.getStores()
title: getStores Method
description: You can learn about the getStores method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getStores()

### Description

Gets an object with the ***StateStore*** and ***DataStore*** objects of Kanban

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
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the StateStore and DataStore objects of Kanban
const stores = board.api.getStores();
console.log(stores);
```
