---
sidebar_label: api.getReactiveState()
title: Kanban api.getReactiveState method
description: You can learn about the api.getReactiveState method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.getReactiveState()

### Description

Gets an object with the reactive properties of the Kanban ***StateStore***

### Usage

```js
api.getReactiveState() => object;
```

### Returns

The method returns an object with the following properties:

```js
{
	dragItemId: {
		subscribe: any,
		update: any,
		set: any
	},
	before: {...},
	overAreaId: {...},
	overAreaMeta: {...},
	dropAreaItemsCoords: {...},
	dropAreasCoords: {...},
	dragItemsCoords: {...},
	selected: {...}
}
```  

### Example

```jsx {8-11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});

// subscribe on the card selection
board.api.getReactiveState().selected.subscribe((value) => {
	console.log(value);
	// other actions
});
```
