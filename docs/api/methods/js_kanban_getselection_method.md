---
sidebar_label: getSelection()
title: JS Kanban getSelection method
description: You can learn about the getSelection method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
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
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});

board.getSelection();
```
