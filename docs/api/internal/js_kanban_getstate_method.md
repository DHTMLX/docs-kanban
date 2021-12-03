---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getState()

### Description

Gets an object with the current properties of the Kanban ***StateStore***

### Usage

~~~jsx {}
api.getState() => object;
~~~

### Returns

The method returns an object with the following properties:

~~~jsx {}
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
~~~  

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the state of Kanban
const state = board.api.getState();
console.log(state);
~~~
