---
sidebar_label: serialize()
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# serialize()

### Description

Serializes Kanban data to JSON

### Usage

```js
serialize: () => object;
```

### Returns

The method returns the object of Kanban data  

```jsx
{
	cards: [{...}, {...}, ...],
	rows: [{...}, {...}, ...],
	columns: [{...}, {...}, ...]
}
```

### Example

```jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the object of the Kanban data
board.serialize();
```
