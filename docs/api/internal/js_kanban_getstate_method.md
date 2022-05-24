---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getState()

### Description

@short: Gets an object with the StateStore properties of Kanban

### Usage

~~~jsx {}
api.getState(): object;
~~~

### Returns

The method returns an object with the following parameters:

~~~jsx {}
{	
	areasMeta: object, 
	before: string | number, 
	cardShape: object,
	cards: array,
	cardsMap: object,
	cardsMeta: object,
	columnKey: string,
	columns: array,
	dragItemId: string | number, 
	dragItemsCoords: array, 
	dropAreaItemsCoords: array, 
	dropAreasCoords: array, 
	edit: object,
	editorShape: array,
	fromAreaMeta: object,
	overAreaId: string | number, 
    overAreaMeta: object,
	readonly: object,
	rowKey: string,
	rows: array,
	scroll: object
	search: object,
	selected: array, 
	sort: object
}
~~~  

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the StateStore of Kanban
const state = board.api.getState();
console.log(state);
~~~

**Change log:** The method was updated in v1.2