---
sidebar_label: api.setNext()
title: JS Kanban api.setNext method
description: You can learn about the api.setNext method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# api.setNext()

### Description

Allows adding some action into the **Event Bus** order

### Usage

```js
api.setNext(next: any) => void;
```

### Parameters

- `next: any` - the action to be included into the **Event Bus** order

### Example

```jsx {12}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	cards: [],
	columns: [],
	rowKey: "type"
});

const url = "https://master--kanban-node--dev.webix.io";

const restProvider = new kanban.RestDataProvider(url);
// add RestDataProvider into the Event Bus order
board.api.setNext(restProvider);
// load server data into JS Kanban
restProvider.getData().then(data => {
	board.parse(data);
});
```

:::info
We need to include ***RestDataProvider*** into the **Event Bus** order to perform saving and removing data on the server
:::
