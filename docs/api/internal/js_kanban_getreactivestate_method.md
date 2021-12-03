---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getReactiveState()

### Description

Gets an object with the reactive properties of the Kanban ***StateStore***

### Usage

~~~jsx {}
api.getReactiveState() => object;
~~~

### Returns

The method returns an object with the following properties:

~~~jsx {}
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
~~~  

### Example

~~~jsx {8-11}
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
~~~
