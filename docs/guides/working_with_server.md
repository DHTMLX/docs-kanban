---
sidebar_label: Working with server
title: Working with Server
description: You can explore how to work with Server in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with server

JavaScript Kanban supports both client-side and server-side data. The widget has no special backend requirements and connects to any platform that exposes a REST (RESTful) API.

:::info
The widget ships with built-in backends in Go and Node. You can also use custom server scripts.
:::

## RestDataProvider

JavaScript Kanban includes the `RestDataProvider` service, which fully supports REST API for backend communication. The provider sends and receives the following data operations:

- `"add-card"`
- `"add-column"`
- `"add-comment"`
- `"add-row"`
- `"add-link"`
- `"delete-card"`
- `"delete-column"`
- `"delete-comment"`
- `"delete-row"`
- `"delete-link"`
- `"move-card"`
- `"move-column"`
- `"move-row"`
- `"update-card"`
- `"update-column"`
- `"update-comment"`
- `"update-row"`
- `"add-vote"`
- `"delete-vote"`

## REST methods

The `RestDataProvider` service exposes the following REST methods for dynamic data loading:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) — gets a promise with cards data
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) — gets a promise with columns data
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) — gets a promise with links data
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) — gets a promise with rows data
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) — gets a promise with users data
- [`send()`](api/provider/rest_methods/js_kanban_send_method.md) — sends a custom HTTP request and returns a promise

## Interact with the backend

To interact with the server, connect `RestDataProvider` to backend scripts. Use one of the built-in backends or create your own:

- [Go](https://github.com/web-widgets/kanban-go)
- [Node](https://github.com/web-widgets/kanban-node)

:::tip
For a custom backend, see the [REST API routes](api/overview/rest_routes_overview.md) reference.
:::

To connect `RestDataProvider` to a backend, call the `kanban.RestDataProvider` constructor with the backend URL. The following code snippet creates a provider, fetches initial data, and binds the provider to the Kanban Event Bus:

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
Add `RestDataProvider` to the Event Bus through the [`api.setNext()`](api/internal/js_kanban_setnext_method.md) method. This step lets data operations (adding, deleting, and similar) trigger matching requests to the server.
:::

### Example

The following demo connects `RestDataProvider` to a Go backend and loads server data:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

A multiuser backend lets multiple users edit the same Kanban board in real time without page reloads. The widget connects to the server through a WebSocket, and custom handlers apply incoming changes to the Kanban board.

To enable a multiuser backend, authorize the user on the server before initializing Kanban. The following `login(url)` function fetches and caches a session token:

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

The function simulates authorization (the demo hard-codes `id=1` in the login query, so every fetched session uses ID `1`). After successful authorization, the server returns a token that subsequent requests must include.

To attach the token to every request, call `RestDataProvider.setHeaders()`. By default, the server stores the token in the `"Remote-Token": <value>` header:

~~~js {}
login(url).then(token => {
    // rest provider initialization
    const restProvider = new kanban.RestDataProvider(url);
    // set token as the custom header
    restProvider.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // widget initialization...
});
~~~

After the token arrives, initialize the widget. The following code snippet fetches data and creates the Kanban board:

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

Once the board exists, attach a WebSocket to listen for server events. The following code snippet wires up the `RemoteEvents` handlers:

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

The snippet uses the following identifiers:

- `handlers` — client handlers for server events
- `events` — `RemoteEvents` instance that listens for incoming events from the server

The `events.on(handlers)` call registers the client handlers for the server-side events. The widget now reflects server-side changes in real time.

### Example

The following demo configures the multiuser backend to track other users' changes in real time:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customize server events

To define custom logic for server events, pass a `handlers` object to `RemoteEvents.on(handlers)`. The object follows this structure:

~~~ts {}
{
    cards?: (obj: any) => void;
    columns?: (obj: any) => void;
    links?: (obj: any) => void;
    rows?: (obj: any) => void;
    comments?: (obj: any) => void;
    votes?: (obj: any) => void;
}
~~~

After a change on the server, the response includes the name of the modified element. The names depend on the server logic.

The updated client-side data arrives in the `obj` argument of the `function(obj: any)` callback. The `type: string` field specifies the operation. Allowed values:

- For cards: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- For columns: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- For links: `"add-link"`, `"delete-link"`
- For rows: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`
- For comments: `"add-comment"`, `"update-comment"`, `"delete-comment"`
- For votes: `"add-vote"`, `"delete-vote"`

The following code snippet shows the implementation:

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
    obj.card.column = idResolver(obj.card.column, TypeCol);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // prevent the client from sending the request to the server
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

The `RestDataProvider.getIDResolver()` method returns a function that synchronizes client IDs with server IDs. When the client creates a new object (card, column, row, or link), the object receives a temporary ID together with a server ID stored in the data store. The `idResolver(id: TID, type: number)` function resolves the temporary ID to the server ID.

The `type` argument identifies the model type:

- `CardID` — `1`
- `RowID` — `2`
- `ColumnID` — `3`
- `LinkID` — `4`
- `CommentID` — `5`

To prevent the request from going to the server, pass `skipProvider: true` when you call `board.api.exec()`. The `remoteEvents.on(handlers)` call registers the custom handlers.

## Group statuses into a single column

Display cards from different columns in one column. For example, you can use a single column for cards with `todo` and `unassigned` statuses.

To implement grouping, add a custom field (for example, `status`) that stores the current card status. The `column` field then stores a common status.

Define grouping rules. In the example below, the grouping uses these statuses:

- `todo`, `unassigned` — for the **Open** column
- `dev`, `testing` — for the **Inprogress** column
- `merged`, `released` — for the **Done** column

Two implementation paths are available:

- [Group on the server](#group-on-the-server)
- [Mix server and client grouping](#server-side-client-side-grouping)

### Group on the server

Server-side grouping requires the server to push data to the client through [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (see [Multiuser backend](#multiuser-backend)).

When the server handles a card-update query, check the `status` field. The example below uses [Go](https://go.dev/), but any backend technology works.

The following code snippet maps the `status` field to a target column on the server:

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
      // notify the client to move the card to the corresponding column

      // update the index of the card
      updateCardIndex(&c)

      // notify the client to update the column
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

When the user changes the status field, the server checks the value and puts the card in the target column. The server then uses the WebSocket to notify the client to move the card.

### Mix server and client grouping {#server-side-client-side-grouping}

For the mixed server-plus-client approach, fetch grouping rules from the server. The client uses these rules to determine the target column based on the `status` field.

The following code snippet fetches the rules:

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

A rule object follows this format:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Define logic that checks card changes and moves the card to the matching column. The following code snippet intercepts the `move-card` and `update-card` events:

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
      card: { status: groupingRules[ev.columnId][0] },
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

This approach assigns columns based on other field values.

### Example

The following demo configures the server side to group two or more statuses into a single column in real time:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
