---
sidebar_label: addColumn()
title: addColumn Method
description: You can learn about the addColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addColumn()

### Description

@short: Adds a new column into Kanban

### Usage

~~~jsx {}
addColumn({
	id?: string | number,
	label?: string
}): void;
~~~

### Parameters

- `id` - (optional) the **ID** of the new column
- `label` - (optional) the **label** of the new column

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new column
board.addColumn({
	id: "extra_column",
	label: "Extra column"
});
~~~
