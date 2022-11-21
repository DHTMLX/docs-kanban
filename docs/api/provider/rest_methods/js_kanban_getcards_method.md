---
sidebar_label: getCards()
title: getCards REST Method
description: You can learn about the getCards REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getCards()

### Description

@short: Gets a promise with the cards data

:::info
The **getCards()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~jsx {}
getCards(): promise;
~~~

### Returns

The **getCards()** method sends a request to the server by the **GET** method and returns a **promise** with the cards data

### Example

~~~jsx {2,5}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
	restProvider.getCards(),
	restProvider.getColumns()
]).then(([cards, columns]) => {
	const board = new kanban.Kanban("#root", {
		cards,
		columns
	});
	board.api.setNext(restProvider);
});
~~~

**Related articles:** [Working with server](../../../guides/working_with_server)
