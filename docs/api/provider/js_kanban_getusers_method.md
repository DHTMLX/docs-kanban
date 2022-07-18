---
sidebar_label: getUsers()
title: getUsers REST Method
description: You can learn about the getUsers REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getUsers()

### Description

@short: Gets a promise with the users data

:::info
The **getUsers()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~jsx {}
getUsers(): promise;
~~~

### Returns

The **getUsers()** method sends a request to the server by the **GET** method and returns a **promise** with the users data

### Example

~~~jsx {2,5}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
	restProvider.getUsers(),
	restProvider.getCards(),
	restProvider.getColumns(),
]).then(([users, cards, columns, rows]) => {
	const board = new kanban.Kanban("#root", {
		cards,
		columns,
		editorShape: [
			...kanban.defaultEditorShape,
			{
				type: "multiselect", 
				key: "users",
				label: "Users",
				values: users
			}
		]
	});
	board.api.setNext(restProvider);
});
~~~

**Related articles:** [Working with server](../../../guides/working_with_server)
