---
sidebar_label: getSelection()
title: getSelection Method
description: You can learn about the getSelection method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getSelection()

### Description

Gets an array with ID(s) of the selected card(s)

### Usage

```js
getSelection: () => array;
```

### Returns

The method returns an array with ID(s) of the selected card(s)

### Example

```jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});

board.getSelection();
```
