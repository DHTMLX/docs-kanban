---
sidebar_label: getAreaCards()
title: getAreaCards Method API
description: Read the getAreaCards method API for DHTMLX Kanban. Learn how to get all cards of a column or row as an array of data objects.
---

# getAreaCards()

### Description

@short: Gets an array with data objects of all cards of the specified column (and row)

### Usage

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### Parameters

- `columnId` - (required) the ID of the target column
- `rowId` - (optional) the ID of the target row

### Returns

The method returns an array with data objects of the cards

:::info
If Kanban includes only **columns** without **rows**, you need to pass only the ***columnId*** parameter. In this case, the method returns an array with data objects that include all cards of the specified column.

If Kanban includes **columns** and **rows**, you can pass both ***columnId*** and ***rowId*** parameters. In this case, the method returns an array with data objects that include all cards of the specific column and row.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// get an array with the cards data objects of the specified column and row
board.getAreaCards("column_id", "row_id");
~~~
