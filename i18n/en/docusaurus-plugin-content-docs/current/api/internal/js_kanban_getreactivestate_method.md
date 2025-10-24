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
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    history: {...},
    links: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    editorShape: {...},
    rows: {...},
    search: {...},
    selected: {...},
    sort: {...},

    // removed parameters
    /*  
        fromAreaMeta: {...},
        dropAreaItemsCoords: {...},
        dropAreasCoords: {...},
        overAreaMeta: {...},  
        before: {...},
        dragItemId: {...},
        dragItemsCoords: {...},
        overAreaId: {...},
    /*

    // private parameters
    /*
        edit -> _edit: {...},
        layout -> layout: {...},
        cardsMap -> _cardsMap: {...},
        cardsMeta -> _cardsMeta: {...},
        areasMeta -> _areasMeta: {...},
        scroll -> _scroll: {...},
    */
}
~~~  

:::warning
These state properties are read-only. Modifying them may lead to unexpected behavior!
:::

### Example

~~~jsx {7-37}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// retrieve the reactive state of the Kanban board
const state = board.api.getReactiveState();

// listen for changes in columns and log the updated array
state.columns.subscribe((data) => {
    console.log(data);
});

// listen for changes in cards and log the updated array
state.cards.subscribe((data) => {
    console.log(data);
});

// listen for changes in rows and log the updated array
state.rows.subscribe((data) => {
    console.log(data);
});

// listen for changes in card selection and log the IDs of selected cards
state.selected.subscribe((data) => {
    console.log(data);
});
~~~

**Change log:** This method was updated in v1.7