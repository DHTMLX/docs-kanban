---
sidebar_label: Working with Server
title: Working with Server
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Working with Server

JS Kanban allows to work both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API).

:::info
By default, the widget is shipped with the built-in **Go** and **Node** backend. But you can use your custom server scripts as well
:::

## RestDataProvider

JS Kanban has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows to interact with the server and perform the following data operations:

- ***"add-card"***
- ***"add-column"***
- ***"add-row"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-row"***
- ***"move-card"***
- ***"update-card"***
- ***"update-column"***
- ***"update-row"***

## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [getCards](api/provider/js_kanban_getcards_method.md) - gets a promise with the ***cards data***
- [getColumns](api/provider/js_kanban_getcolumns_method.md) - gets a promise with the ***columns data***
- [getRows](api/provider/js_kanban_getrows_method.md) - gets a promise with the ***rows data***

## Interacting with backend  

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

or you can create a custom one.

To connect **RestDataProvider** to the backend, you need to call the **kanban.RestDataProvider** constructor by passing the corresponding **URL** as a parameter.

~~~js {1-2,15}
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
You need to include **RestDataProvider** into the **Event Bus** order via the [**api.setNext()**](api/internal/js_kanban_setnext_method.md) method to perform operations with data (*adding*, *deleting* etc) and send the corresponding requests to the server
:::

## Example

In this snippet you can see how to connect **RestDataProvider** to the **Go** backend and load server data dynamically:

!!![TODO] **Добавить ссылку на сниппет с Go**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
