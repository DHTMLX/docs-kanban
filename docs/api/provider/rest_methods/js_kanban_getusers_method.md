---
sidebar_label: getUsers()
title: getUsers REST Method API
description: Read the getUsers REST method API for DHTMLX Kanban. Learn how to get a promise with users data.
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

~~~jsx {2,8,21}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
    restProvider.getUsers(),
]).then(([cards, columns, rows, users]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type",
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

**Change log:** The method was added in v1.3

**Related articles:** [Working with server](guides/working_with_server.md)
