---
sidebar_label: parse()
title: JS Kanban moveCard method
description: You can learn about the parse method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# parse()

### Description

Parses data into JS Kanban

### Usage

`parse: ({
	column: object,
	row: object,
	cards: object
}) => void;`

### Parameters

- `column: object` - the object of the columns data
- `row: object` - the object of the rows data
- `cards: object` - the object of the cards data

### Details

:::info
To parse data via the **parse()** method, you need to reset initial data in the constructor of JS Kanban.

```jsx
const kanban = new Kanban("kanban_container", {
	// resets initial data, to parse new ones
	columns: [],
	cards: [],
	rows: []
});
```
:::

### Example

```jsx
// parse data into JS Kanban
kanban.parse({
	columns,
	rows,
	cards
});
```
