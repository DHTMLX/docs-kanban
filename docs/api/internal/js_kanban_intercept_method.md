---
sidebar_label: api.intercept()
title: Kanban api.intercept method
description: You can learn about the api.intercept method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.intercept()

### Description

Allows intercepting and preventing the inner events

### Usage

```js
api.intercept(event: string, callback: function) => void;
```

### Parameters

- `event: string` - an event to be fired
- `callback: function` - a callback to be performed

### Event list

- ***"add-card"***
- ***"add-column"***
- ***"add-row"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-row"***
- ***"move-card"***
- ***"unselect-card"***
- ***"update-card"***
- ***"update-column"***
- ***"update-row"***
- ***"select-card"***
- ***"set-search"***

### Example

```jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// forbid moving cards to the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
	if(columnId! == "done" ){
		return false;
	}
});
```
