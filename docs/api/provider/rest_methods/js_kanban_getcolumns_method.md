---
sidebar_label: getColumns()
title: getColumns REST Method API
description: Read the getColumns REST method API for DHTMLX Kanban. Learn how to get a promise with columns data.
---

# getColumns()

### Description

@short: Gets a promise with the columns data

:::info
The **getColumns()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~jsx {}
getColumns(): promise;
~~~

### Returns

The **getColumns()** method sends a request to the server by the **GET** method and returns a **promise** with the columns data

### Example

~~~jsx {2,6}
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
