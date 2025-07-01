---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getReactiveState()

### Description

@short: Retrieves an object containing the reactive properties of the Kanban board.

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

This method returns an object with the following properties:

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
// access the Reactive State of the Kanban board
const state = board.api.getReactiveState();

// subscribe to changes in the columns and log the updated array
state.columns.subscribe((data) => {
    console.log(data);
});

// subscribe to changes in the cards and log the updated array
state.cards.subscribe((data) => {
    console.log(data);
});

// subscribe to changes in the rows and log the updated array
state.rows.subscribe((data) => {
    console.log(data);
});

// subscribe to card selection changes and log the selected card IDs
state.selected.subscribe((data) => {
    console.log(data);
});

// set a new selection 
state.selected.set([1, 2]);

// update the selection by adding another card ID
state.selected.update((data) => {
    data.push(3);
    return data;
});
~~~

**Change log:** This method was updated in version 1.4
