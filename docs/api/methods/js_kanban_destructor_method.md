---
sidebar_label: destructor()
title: JS Kanban destructor method
description: You can learn about the destructor method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# destructor()

### Description

Removes all HTML elements of the JS Kanban, and detaches all related events

### Usage

```js
destructor: () => void;
```

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// remove JS Kanban
board.destructor();
```
