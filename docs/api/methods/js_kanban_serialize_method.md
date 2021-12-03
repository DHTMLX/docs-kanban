---
sidebar_label: serialize()
title: Kanban serialize method
description: You can learn about the serialize method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# serialize()

### Description

Serializes Kanban data to JSON

### Usage

~~~jsx {}
serialize: () => object;
~~~

### Returns

The method returns the object of Kanban data  

~~~jsx {}
{
	cards: [{...}, {...}, ...],
	rows: [{...}, {...}, ...],
	columns: [{...}, {...}, ...]
}
~~~

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the object of the Kanban data
board.serialize();
~~~
