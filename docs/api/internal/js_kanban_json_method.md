---
sidebar_label: export.json()
title: json Method
description: You can learn about the json method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# export.json()

### Description

@short: Exports Kanban data into a JSON file

### Usage

~~~jsx {}
export.json(): void;
~~~

:::info
The method exports data of Kanban to a JSON file with the following structure:
~~~jsx {}
{
	"cards": [],
	"columns": [],
	"rows": []
}
~~~
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// export the Kanban data to JSON ()
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**Change log:** The method was added in v1.3