---
sidebar_label: getAreaCards()
title: getAreaCards Method
description: Explore the getAreaCards method in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# getAreaCards()

### Description

@short: Retrieves an array containing data objects for all cards within the specified column (and row, if provided).

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
When the Kanban board has only **columns** and no **rows**, provide just the ***columnId***. The method will return all card data objects within that column.

If the Kanban board includes both **columns** and **rows**, you can specify both ***columnId*** and ***rowId***. This will return all card data objects located in the specified column and row.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// retrieve an array of card data objects for the given column and row
board.getAreaCards("column_id", "row_id");
~~~