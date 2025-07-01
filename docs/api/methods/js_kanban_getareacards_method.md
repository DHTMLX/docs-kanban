---
sidebar_label: getAreaCards()
title: getAreaCards Method
description: You can learn about the getAreaCards method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getAreaCards()

### Description

@short: Retrieves an array containing data objects for all cards within the specified column (and row).

### Usage

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### Parameters

- `columnId` - (required) the ID of the column to target  
- `rowId` - (optional) the ID of the row to target

### Returns

This method returns an array of data objects representing the cards.

:::info
When the Kanban board has **columns** without **rows**, only the ***columnId*** parameter is needed. In this scenario, the method returns an array containing all card data objects in that column.

If the Kanban board includes both **columns** and **rows**, both the ***columnId*** and ***rowId*** parameters must be provided. The method then returns an array of data objects for cards located in the specified column and row.
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// retrieve an array of card data objects from the specified column and row
board.getAreaCards("column_id", "row_id");
~~~
