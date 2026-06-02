---
sidebar_label: serialize()
title: serialize Method API
description: Read the serialize method API for DHTMLX Kanban. Learn how to serialize the board data to JSON.
---

# serialize()

### Description

@short: Serializes the Kanban data to JSON

### Usage

~~~jsx {}
serialize(): object;
~~~

### Returns

The method returns the object of Kanban data 

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...],
    links: [{...}, {...}, ...]
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
