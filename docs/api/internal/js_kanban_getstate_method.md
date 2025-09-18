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
    scroll: object,
    search: object,
    selected: array,
    sort: object,

    // deprecated parameters
    /*
        areasMeta: object,
        before: string | number,
        cardsMap: object,
        cardsMeta: object,
        dragItemId: string | number,
        dragItemsCoords: array,
        edit: object,
        layout: string,
        overAreaId: string | number,
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object
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
