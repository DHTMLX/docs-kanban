---
sidebar_label: Working with server
title: Working with Server
description: You can explore how to work with Server in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with server

JavaScript Kanban allows working both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API).

:::info
By default, the widget is shipped with the built-in **Go** and **Node** backend. But you can use your custom server scripts as well
:::

## RestDataProvider

JavaScript Kanban has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows interacting with the server and perform the following data operations:

- ***"add-card"***
- ***"add-column"***
- ***"add-row"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-row"***
- ***"move-card"***
- ***"move-column"***
- ***"move-row"***
- ***"update-card"***
- ***"update-column"***
- ***"update-row"***

## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) - gets a promise with the ***cards data***
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) - gets a promise with the ***columns data***
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) - gets a promise with the ***rows data***
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) - gets a promise with the ***users data***

## Interacting with backend  

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

or you can create a custom one.

To connect **RestDataProvider** to the backend, you need to call the **kanban.RestDataProvider** constructor by passing the corresponding **URL** as a parameter.

~~~js {1-2,25}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([users, cards, columns, rows]) => {
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

:::info
You need to include **RestDataProvider** into the **Event Bus** order via the [**api.setNext()**](api/internal/js_kanban_setnext_method.md) method to perform operations with data (*adding*, *deleting* etc) and send the corresponding requests to the server
:::

## Example

In this snippet you can see how to connect **RestDataProvider** to the **Go** backend and load server data dynamically:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

Project management tools, such as our Kanban, are highly sought after by businesses of all sizes. Considering this, it is important to provide a seamless user experience for multiple users. Our new feature allows users to efficiently manage the same cards on the Kanban board in real-time, without the need for page reloads. As a result, end-users can collaborate and stay up-to-date with one another's actions, enhancing productivity and overall satisfaction.

To implement a multiuser backend, you need to get authorization on the server before the Kanban initialization. For this, you can create the `login(url: string)` function:

~~~js {}
const login = (url) => {
    var token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }

    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
};
~~~

This function only simulates authorization, and all users will be authorized with an ID of 1. After successful authorization, the server sends a token that needs to be used in every subsequent request to the server. To automate the token sending, the `RestDataProvider.setHeaders()` function is used. This function adds custom headers to the requests. By default, our server stores the token in the `"Remote-Token":<value>` header:

~~~js {}
login(url).then(token => {
    // rest provider initialization
    const restProvider = new kanban.RestDataProvider(url);
    // set token as the custom header
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // widget initialization...
});
~~~

After receiving the token, you should initialize the widget. It can be done in the following way:

~~~js {}
// widget initialization...
Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
]).then(([cards, columns, rows]) => {
    const board = new Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "row",
        cardShape,
        editorShape,
    });

    // save data from client to server
    board.api.setNext(restProvider);
    
    // multiuser initialization...
});
~~~

After the widget initialization, you need to add WebSocket aimed to listen for events from the server. It can be done in the following way:

~~~js {}
// multiuser initialization...

// get client handlers for server events
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// connect to server events
const events = new RemoteEvents(url + "/api/v1", token);
// attach client handlers on server events
events.on(handlers);
~~~

- `handlers` - the client handlers that handle server events
- `events` - the object that connects to the server and listens for all incoming events
- `RemoteEvents.on(handlers)` - applies client handlers to server events

After integrating the multiuser backend into your app, you can simplify collaboration between users and enable them to keep track of any changes via the UI in a real time.

### Example

The snippet below shows how to configure the multiuser backend to track changes of other users in a real time:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customization of server events

You can define your own logic for handling server events. For this purpose, you need to pass the **handlers** object to the `RemoteEvents.on(handlers)` method. The **handlers** object should have the following structure:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

When any change occurs on the server, it returns the name of the modified element. These names can vary depending on the server logic.

The data updated on the client side will be placed in the **obj** argument of the `function(obj: any)` function. To specify an operation, there is a `type: string` field. It can take the following values:

- For **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- For **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- For **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

In the following code snippet you can see the implementation details:

~~~js {}
// initialize kanban
const kanbanInstance = new kanban.Kanban(...);
const restProvider = new kanban.RestProvider(url);
const idResolver = restProvider.getIDResolver();
const TypeCard = 1;
const TypeRow = 2;
const TypeCol = 3;

const cardsHandler = (obj: any) => {
    obj.card.id = idResolver(obj.card.id, TypeCard);
    obj.card.row = idResolver(obj.card.row, TypeRow);
    obj.card.column = idResolver(obj.card.column, TypeColumn);
    switch (obj.type) {
        "add-card":
            kanbanInstance.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // prevent the client from sending request to the server
            })
            break;
        // other operations
    }
}

// add custom handlers
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

The `RestDataProvider.getIDResolver()` method returns a function that is necessary to synchronize client IDs with server IDs. When a new object (*card/column/row*) is created on the client side, the resulting object will have a temporary ID and a corresponding server ID in the store. The `idResolver()` function allows synchronizing the client ID with the server ID. This function has the following format: `idResolver(id: TID, type: number)`

The `type` argument is the type of model that takes the following values:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

To prevent the request from being sent to the server, you need to use the `skipProvider: true` flag when calling the `kanbanInstance.api.exec()` method.

And the final step is to apply custom handlers to the server events. In this way you can create your own server event handlers.
