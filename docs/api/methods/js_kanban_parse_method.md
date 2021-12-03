---
sidebar_label: parse()
title: Kanban moveCard method
description: You can learn about the parse method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# parse()

### Description

Parses data into Kanban

### Usage

~~~jsx {}
parse: ({
	columns?: object,
	rows?: object,
	cards?: object
}) => void;
~~~

### Parameters

- `columns?: object` - the object of the columns data
- `rows?: object` - the object of the rows data
- `cards?: object` - the object of the cards data

### Details

:::info
To parse data via the **parse()** method, you need to reset initial data in the Kanban constructor

~~~jsx {}
new kanban.Kanban("#root", {
	// resets initial data, to parse new ones
	columns: [],
	rows: [],
	cards: []
});
~~~
:::

### Example

~~~jsx {8-12}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns: [],
	cards: [],
	rows: []
});
// parse data into Kanban
board.parse({
	columns,
	cards,
	rows
});
~~~

**Related articles:** [Working with Data](../../../guides/working_with_data#loading-data-from-local-source)
