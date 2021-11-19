---
sidebar_label: api.getState()
title: JS Kanban api.getState method
description: You can learn about the api.getState method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.getState()

### Description

Gets an object with the current properties of the JS Kanban ***StateStore***

### Usage

```js
api.getState() => object;
```

### Returns

The method returns an object with the following properties:

```js
{
	dragItemId: string | number,
	before: string | number,
	overAreaId: string | number,
	overAreaMeta: object,
	dropAreaItemsCoords: array,
	dropAreasCoords: array,
	dragItemsCoords: array,
	selected: array
}
```  

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the state of JS Kanban
const state = board.api.getState();
console.log(state);
```
