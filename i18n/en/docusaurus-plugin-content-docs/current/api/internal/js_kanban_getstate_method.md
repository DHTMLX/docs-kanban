---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getState()

### Description

@short: Retrieves an object containing the StateStore properties of the Kanban board.

### Usage

~~~jsx {}
api.getState(): object;
~~~

### Returns

This method returns an object with the following properties:

~~~jsx {}
{
    cardHeight: number | null,
    cards: array,
    cardShape: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    links: array,
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    editorShape: array,
    history: object,
    search: object,
    selected: array,
    sort: object,

    // removed parameters
    /*    
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object,
        before: string | number,
        dragItemId: string | number,
        dragItemsCoords: array,
        overAreaId: string | number,
    /*

    // private parameters
    /*
        edit -> _edit: object,
        layout -> layout: string,
        cardsMap -> _cardsMap: object,
        cardsMeta -> _cardsMeta: object,
        areasMeta -> _areasMeta: object,
        scroll -> _scroll: object,
    */
}
~~~

:::warning
These state properties are read-only. Modifying them may cause unexpected issues!
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// retrieve the current State of the Kanban board
const state = board.api.getState();
console.log(state.cards); // display the cards data
console.log(state.columns); // display the columns data
console.log(state.rows); // display the rows data
console.log(state.cardShape); // display the card configuration
//...
~~~

**Change log:** The method was updated in v1.7