---
sidebar_label: getCards()
title: getCards REST Method API
description: Read the getCards REST method API for DHTMLX Kanban. Learn how to get a promise with cards data.
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

**Related articles:** [Working with server](guides/working_with_server.md)
