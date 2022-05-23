---
sidebar_label: setSort()
title: setSort Method
description: You can learn about the setSort method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setSort()

### Description

@short: Sorts cards by the specified parameters

### Usage

~~~jsx {}
setSort(
	{
		by?: string, // by?: ((card: object) => any),
		dir?: "asc" | "desc",
		columnId?: string | number,
		preserve?: boolean
	} | null
): void;
~~~

### Parameters

The method can take an object of the sorting parameters or the *null* value. In the object you can specify the following parameters:

- `by` - (optional) the card field for sorting. This parameter can be set to the *string* or *function* value. The function needs to return the card field for sorting
- `dir` - (optional) the order of sorting. The possible values are *"asc"* and *"desc"*
- `columnId` - (optional) the ID of column to be sorted
- `preserve` - (optional) enables/disables preserving of sorting state (*false* by default)

:::info
If the **preserve** parameter is set to *false*, the sorting will be applied once. It means that after adding or moving cards, the sorting state will not be preserved (the order will be changed). Otherwise, the sorting state will be preserved even after adding new cards or moving them. To reset preserving, call the **setSort()** method with the ***null*** parameter.
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// sort the cards in ascending order by the "label" parameter
board.setSort({ 
	by: (obj) => obj.label, // or by: "label"
	dir: "asc",
	columnId: "backlog",
	preserve: false
});
~~~

**Change log:** The method was added in v1.2