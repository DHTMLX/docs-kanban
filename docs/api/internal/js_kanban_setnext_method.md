---
sidebar_label: api.setNext()
title: setNext Method
description: You can learn about the setNext method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.setNext()

### Description

Allows adding some action into the **Event Bus** order

### Usage

~~~jsx {}
api.setNext(next: any) => void;
~~~

### Parameters

- `next: any` - the action to be included into the **Event Bus** order  (*mandatory*)

### Example

~~~jsx {15}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
	restProvider.getCards(),
	restProvider.getColumns(),
	restProvider.getRows()
]).then(([cards, columns, rows]) => {
	const board = new kanban.Kanban("#root", {
		cards,
		columns,
		rows,
		rowKey: "row"
	});
	board.api.setNext(restProvider);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order to perform operations with data (*adding*, *deleting* etc) and send the corresponding requests to the server
:::
