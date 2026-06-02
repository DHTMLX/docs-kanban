---
sidebar_label: api.getState()
title: getState Method API
description: Read the getState method API for DHTMLX Kanban. Learn how to access current board state, cards, links, and configuration.
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
These state properties are readonly. Do not change them to avoid unexpected behavior!
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// get the State of Kanban
const state = board.api.getState();
console.log(state.cards); // output the cards data
console.log(state.columns); // output the columns data
console.log(state.rows); // output the rows data
console.log(state.cardShape); // output the card configuration
//...
~~~

**Change log:** The method was updated in v1.7
