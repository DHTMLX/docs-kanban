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
	cardHeight: {...},
	cardShape: {...},
	cards: {...},
	cardsMap: {...},
	cardsMeta: {...},
	columnKey: {...},
	columnShape: {...},
	columns: {...},
	currentUser: {...},
	dragItemId: {...},
	dragItemsCoords: {...},
	edit: {...},
	history: {...},
	layout: {...},
	links: {...},
	overAreaId: {...},
	readonly: {...},
	rowKey: {...},
	rowShape: {...},
	rows: {...},
	scroll: {...},
	search: {...},
	selected: {...},
	sort: {...}
}
~~~  

### Example

~~~jsx {7-37}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});
// get the Reactive State of Kanban
const state = board.api.getReactiveState();

// subscribe on the columns changes and output the array of columns
state.columns.subscribe((data) => {
	console.log(data);
});

// subscribe on the cards changes and output the array of cards
state.cards.subscribe((data) => {
	console.log(data);
});

// subscribe on the rows changes and output the array of rows
state.rows.subscribe((data) => {
	console.log(data);
});

// subscribe on the card selection and output the IDs of the selected cards
state.selected.subscribe((data) => {
	console.log(data);
});

// set new selection 
state.selected.set([1, 2]);

// update selection
state.selected.update((data) => {
	data.push(3);
	return data;
});
~~~

**Change log:** The method was updated in v1.4
