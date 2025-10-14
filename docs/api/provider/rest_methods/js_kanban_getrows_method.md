---
sidebar_label: getRows()
title: getRows REST Method
description: You can learn about the getRows REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getRows()

### Description

@short: Gets a promise with the rows data

:::info
The **getRows()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~jsx {}
getRows(): promise;
~~~

### Returns

The **getRows()** method sends a request to the server by the **GET** method and returns a **promise** with the rows data

### Example

~~~jsx {2,7}
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
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**Related articles:** [Working with server](guides/working_with_server.md)
