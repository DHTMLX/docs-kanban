---
sidebar_label: getLinks()
title: getLinks REST Method
description: You can learn about the getLinks REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getLinks()

### Description

@short: Retrieves a promise containing the links data

:::info
The **getLinks()** method belongs to the **RestDataProvider** service, designed for server interactions.
:::

### Usage

~~~jsx {}
getLinks(): promise;
~~~

### Returns

The **getLinks()** method makes a **GET** request to the server and returns a **promise** that resolves with the links data.

### Example

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
]).then(([cards, columns, links]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links
    });
    board.api.setNext(restProvider);
});
~~~

**Change log:** This method was introduced in version 1.5

**Related articles:** [Working with server](//guides/working_with_server)
