---
sidebar_label: getAreaCards()
title: JS Kanban getAreaCards method
description: You can learn about the getAreaCards method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# getAreaCards()

### Description

Gets an array with the data objects of all cards of the column (and row)

### Usage

```js
getAreaCards: ( columnId: string | number, rowId?: string | number ) => array;
```

### Parameters

- `columnId: string | number` - the **ID** of the target column (*mandatory*)
- `rowId?: string | number` - the **ID** of the target row

### Returns

The method returns an array with the data objects of the cards

:::info
If JS Kanban includes **columns** without **rows**, the method requires only the ***columnId*** parameter. In this case, the method returns the array with the data objects of all cards of the specified column.

If JS Kanban includes **columns** and **rows**, the method requires both the ***columnId*** and ***rowId*** parameters. In this case, the method returns the array with the data objects of the cards of only these column and row.
:::

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get an array with the cards data objects of the specified column and row
board.getAreaCards("column_id", "row_id");
```
