---
sidebar_label: addRow()
title: addRow Method
description: You can learn about the addRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addRow()

### Description

Adds a **new row** into Kanban

### Usage

~~~jsx {}
addRow: ({
	id?: string | number,
	label?: string,
	collapsed?: boolean
}) => void;
~~~

### Parameters

- `id?: string | number` -  the **ID** of the new row
- `label?: string` - the **label** of the new row
- `collapsed?: boolean` - the **state** of the new row

### Example

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new row
board.addRow({
	id: "extra_row",
	label: "Extra row",
	collapsed: false
});
~~~
