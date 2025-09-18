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
- ***"add-comment"***
- ***"add-row"***
- ***"add-link"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-comment"***
- ***"delete-row"***
- ***"delete-link"***
- ***"move-card"***
- ***"move-column"***
- ***"move-row"***
- ***"update-card"***
- ***"update-column"***
- ***"update-comment"***
- ***"update-row"***

## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) - gets a promise with the ***cards data***
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) - gets a promise with the ***columns data***
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) - gets a promise with the ***links data***
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) - gets a promise with the ***rows data***
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) - gets a promise with the ***users data***

## Interacting with backend  

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

or you can create a custom one.

:::tip
If you use custom backend, refer to the [**REST API routes**](../../api/overview/rest_routes_overview/) topic for more information!
:::

To connect **RestDataProvider** to the backend, you need to call the **kanban.RestDataProvider** constructor by passing the corresponding **URL** as a parameter.

~~~js {1-2,27}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows()
]).then(([users, cards, columns, links, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links,
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

### Example

In this snippet you can see how to connect **RestDataProvider** to the **Go** backend and load server data:

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
    restProvider.getLinks(),
    restProvider.getRows(),
]).then(([cards, columns, links, rows]) => {
    const board = new Kanban("#root", {
        cards,
        columns,
        links,
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
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

When any change occurs on the server, it returns the name of the modified element. These names can vary depending on the server logic.

The data updated on the client side will be placed in the **obj** argument of the `function(obj: any)` function. To specify an operation, there is a `type: string` field. It can take the following values:

- For **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- For **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- For **links**: `"add-link"`, `"delete-link"`
- For **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

In the following code snippet you can see the implementation details:

~~~js {}
// initialize kanban
const board = new kanban.Kanban(...);
const restProvider = new kanban.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TypeCard = 1;
const TypeRow = 2;
const TypeCol = 3;

const cardsHandler = (obj: any) => {
    obj.card.id = idResolver(obj.card.id, TypeCard);
    obj.card.row = idResolver(obj.card.row, TypeRow);
    obj.card.column = idResolver(obj.card.column, TypeColumn);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
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

The `RestDataProvider.getIDResolver()` method returns a function that is necessary to synchronize client IDs with server IDs. When a new object (*card/column/row/link*) is created on the client side, the resulting object will have a temporary ID and a corresponding server ID in the store. The `idResolver()` function allows synchronizing the client ID with the server ID. This function has the following format: `idResolver(id: TID, type: number)`

The `type` argument is the type of model that takes the following values:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3
- `LinkID` - 4

To prevent the request from being sent to the server, you need to use the `skipProvider: true` flag when calling the `board.api.exec()` method.

And the final step is to apply custom handlers to the server events. In this way you can create your own server event handlers.

## Grouping two or more statuses into a single column

In this section you can see how to display cards from different columns in one column (for example, a common column for cards with *To do* and *Unassigned* statuses).

To implement such grouping, you need to add a custom field (for example, **status**). This field will store a current status of a card. The **column** field will store a common status.

After this you need to create specific rules for grouping cards. In our case, the cards will be grouped in specific columns by the following statuses:

- *todo*, *unassigned* - statuses for the **Open** column
- *dev*, *testing* - statuses for the **Inprogress** column
- *merged*, *released* - statuses for the **Done** column

There are 2 ways how to implement such grouping cards in a single column by 2 or more statuses:

- [Server side](#server-side-grouping)
- [Server side + client side](#server-side--client-side-grouping)

### Server side grouping

If you want to implement the server side grouping, your server should have an ability to send data to client side via [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (see [Multiuser backend](#multiuser-backend)).

In a place, where a server handles a query to update a card, you need to check the **status** field. In our case we use the [Go](https://go.dev/) programming language, but you can use any other backend technologies.

~~~go
func Update(id int, c Card) error {
   // ...
   oldColumn := c.Column
   s := data.Status
   if s == "todo" || s == "unassigned" {
      c.Column = "open"
   } else if s == "dev" || s == "testing" {
      c.Column = "inprogress"
   } else if s == "merged" || s == "released" {
      c.Column = "done"
   }

   db.Save(&c)

   if oldColumn != c.Column {
      // if the column has been updated by the status field,
      // the client should be notified to move the card to the corresponding column

      // need to update the index of the card
      updateCardIndex(&c)

      // notify client to update the column
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Thus, when the user changes the value of the status field, the server logic checks the value and put the card in the corresponding column. After this, the server will use WebSocket to notify the client that the card needs to be moved  to another column.

### Server side + client side grouping

For the mixed server + client approach, you should obtain grouping rules from the server. According to this rules, the client will be able to determine to which column the card will be moved depending on the value of the status field.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

For example, you can specify the following rules:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Next, you need to define a logic, that will check the card changes and move the card to the required column:

~~~js
const updateColumn = card => {
   for (let col in groupingRules) {
      if (groupingRules[col].includes(card.status)) {
         card.column = col;
         break;
      }
   }
};

kanban.api.intercept("move-card", ev => {
   kanban.api.exec("update-card", {
      id: ev.id,
      card: { status: groupingRules[ev.columnId][0],
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

In this way, you can define certain columns for cards depending on other fields.

### Example

The snippet below shows how to configure the server side to group two or more statuses into a single column in a real time:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
