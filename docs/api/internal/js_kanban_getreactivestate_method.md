---
sidebar_label: api.getReactiveState()
title: getReactiveState Method API
description: Read the getReactiveState method API for DHTMLX Kanban. Learn how to get an object with the board reactive properties.
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
These state properties are readonly. Do not change them to avoid unexpected behavior!
:::

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
~~~

**Change log:** The method was updated in v1.7
