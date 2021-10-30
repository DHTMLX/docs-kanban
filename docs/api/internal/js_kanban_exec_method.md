---
sidebar_label: api.exec()
title: JS Kanban API
description: You can learn about the api.exec method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.exec()

### Description

Allows triggering the inner events

### Usage

```js
api.exec(event: string, config: object) => void;
```

### Parameters

- `event: string` - an event to be fired
- `config: object` - the config object with parameters

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

```jsx {8}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});

// select the card with the 1 ID
board.api.exec("select-card", { id: 1 });
```
