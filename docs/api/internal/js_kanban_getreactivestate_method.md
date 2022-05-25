---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of Kanban

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following parameters:

~~~jsx {}
{
	areasMeta: {
		subscribe: any,
		update: any,
		set: any
	},
	before: {...}, 
	cardShape: {...},
	cards: {...},
	cardsMap: {...},
	cardsMeta: {...},
	columnKey: {...},
	columns: {...},
	dragItemId: {...}, 
	dragItemsCoords: {...}, 
	dropAreaItemsCoords: {...}, 
	dropAreasCoords: {...}, 
	edit: {...},
	editorShape: {...},
	fromAreaMeta: {...},
	overAreaId: {...}, 
    overAreaMeta: {...},
	readonly: {...},
	rowKey: {...},
	rows: {...},
	scroll: {...},
	search: {...},
	selected: {...}, 
	sort: {...}
}
~~~  

### Example

~~~jsx {7-11}
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

**Change log:** The method was updated in v1.2
