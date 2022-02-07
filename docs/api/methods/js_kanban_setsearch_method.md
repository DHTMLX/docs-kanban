---
sidebar_label: setSearch()
title: setSearch Method
description: You can learn about the setSearch method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setSearch()

### Description

@short: Looks for the needed cards by the specified parameters

### Usage

~~~jsx {}
setSearch({
	value: string,
	by?: string
}): void;
~~~

:::info
Using this method, you can search for the needed cards by the specified parameters. If you call the **setSearch()** method without parameters, it will clear the search bar and highlighting of the cards
:::

### Parameters

- `value` - (required) the value to search 
- `by` - (optional) the card field for searching

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// highlight the cards that match the parameters
board.setSearch({ value: "Integration", by: "label" });
~~~
