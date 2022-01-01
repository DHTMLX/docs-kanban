---
sidebar_label: getAreaCards()
title: getAreaCards Method
description: You can learn about the getAreaCards method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getAreaCards()

### Description

@short: gets an array with data objects of all cards of the specified column (and row)

### Usage

~~~jsx {}
getAreaCards(
	columnId: string | number,
	rowId?: string | number
): array;
~~~

### Parameters

- `columnId` - (mandatory) the **ID** of the target column 
- `rowId` - (optional) the **ID** of the target row

### Returns

The method returns an array with the data objects of the cards

:::info
If Kanban includes **columns** without **rows**, the method requires only the ***columnId*** parameter. In this case, the method returns the array with the data objects of all cards of the specified column.

If Kanban includes **columns** and **rows**, the method requires both the ***columnId*** and ***rowId*** parameters. In this case, the method returns the array with the data objects of the cards of only these column and row.
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get an array with the cards data objects of the specified column and row
board.getAreaCards("column_id", "row_id");
~~~
