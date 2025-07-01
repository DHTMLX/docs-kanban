---
sidebar_label: Working with server
title: Working with Server
description: You can explore how to work with Server in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with server

JavaScript Kanban can handle both client-side and server-side data. It doesn't have any special backend requirements, so it can connect to any backend platform that supports REST APIs.

:::info
The widget comes with built-in **Go** and **Node** backend options, but custom server scripts are also supported.
:::

## RestDataProvider

JavaScript Kanban offers the **RestDataProvider** service, which fully supports REST APIs for backend operations. This service makes it easy to communicate with your server and perform these data actions:

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

The **RestDataProvider** service includes several REST methods for loading data dynamically:

- [`getCards()`](/api/provider/rest_methods/js_kanban_getcards_method.md) - returns a promise with the ***cards data***
- [`getColumns()`](/api/provider/rest_methods/js_kanban_getcolumns_method.md) - returns a promise with the ***columns data***
- [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method.md) - returns a promise with the ***links data***
- [`getRows()`](/api/provider/rest_methods/js_kanban_getrows_method.md) - returns a promise with the ***rows data***
- [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method.md) - returns a promise with the ***users data***

## Interacting with backend

To connect to the server, just hook **RestDataProvider** up to your server scripts. If you're using the built-in backends, you can find them here:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

You're also free to set up your own backend.

:::tip
If you have a custom backend, check out the [**REST API routes**](/api/overview/rest_routes_overview/) section for more details.
:::

Connecting **RestDataProvider** to the backend is straightforward: just use the **kanban.RestDataProvider** constructor and pass the server **URL**.

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
To enable data operations like adding or deleting items and sending requests to the server, **RestDataProvider** needs to be included in the **Event Bus** chain using [**api.setNext()**](/api/internal/js_kanban_setnext_method.md).
:::

### Example

Here's a snippet showing how to connect **RestDataProvider** to a **Go** backend and load data from the server:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

Kanban boards are popular tools for businesses of all sizes, and multiuser support can really improve the experience. With this feature, multiple users can manage the same cards on a Kanban board in real-time - no page reloads needed. This makes collaboration smoother and helps everyone stay updated on changes as they happen.

To set up a multiuser backend, start by getting authorized on the server before initializing the Kanban board. For this, you can use a simple `login(url: string)` function:

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

This function is just a demo for authorization-every user gets authorized with an ID of 1. After logging in, the server sends back a token that should be included in future requests. To handle this automatically, use the `RestDataProvider.setHeaders()` method, which adds custom headers to each request. By default, the server expects the token in the `"Remote-Token":<value>` header:

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

Once you've got the token, you can initialize the Kanban widget like this:

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

After setting up the widget, you'll need to add a WebSocket to listen for server events. Here's how you can do it:

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

- `handlers` - these are the client functions that react to server events
- `events` - this object connects to the server and listens for incoming events
- `RemoteEvents.on(handlers)` - attaches the handlers to the server events

Adding a multiuser backend like this makes it much easier for people to work together and instantly see any updates right in the UI.

### Example

Here's a snippet showing how to set up a multiuser backend so users can see each other's changes in real time:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customization of server events

You can customize how server events are handled. To do this, pass your own **handlers** object to the `RemoteEvents.on(handlers)` method. Structure your **handlers** object like this:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Whenever something changes on the server, it returns the name of the modified element, which may vary depending on your backend logic.

Updates on the client side are passed in the **obj** argument of `function(obj: any)`. The operation type is specified with the `type: string` field, which can have values like:

- For **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- For **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- For **links**: `"add-link"`, `"delete-link"`
- For **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

Check out this code example:

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

The `RestDataProvider.getIDResolver()` method gives you a function to sync client IDs with server IDs. When you create something new (*card/column/row*) on the client, it first gets a temporary ID, and the real server ID is stored in the store. The `idResolver()` function helps keep these IDs in sync. The signature is `idResolver(id: TID, type: number)`.

Here's how the `type` values are mapped:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

If you want to avoid sending a new request to the server, use the `skipProvider: true` flag when calling `board.api.exec()`.

Once the custom handlers are hooked up, you have full control over how server events are handled on the client side.

## Grouping two or more statuses into a single column

Sometimes you might want to show cards from different statuses in one column (for example, having a single column for cards with *To do* and *Unassigned* statuses).

To set this up, add a custom field (like **status**) that holds the card's current status. The **column** field will store the common status.

Then, define rules for grouping cards. For instance, you might group cards into columns using these statuses:

- *todo*, *unassigned* - for the **Open** column
- *dev*, *testing* - for the **Inprogress** column
- *merged*, *released* - for the **Done** column

There are a couple of ways to implement this grouping:

- [Server side](#server-side-grouping)
- [Server side + client side](#server-side--client-side-grouping)

### Server side grouping

If you want to handle grouping on the server, your backend needs to be able to push data to the client using [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (see [Multiuser backend](#multiuser-backend)).

When the server receives a request to update a card, it should check the **status** field. For example, with [Go](https://go.dev/), this might look like:

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

So, when a card's status changes, the server logic assigns it to the right column and lets the client know (using WebSockets) to move the card to that column.

### Server side + client side grouping

With a combined approach, the server provides grouping rules, and the client uses them to decide which column a card belongs to based on its status.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

An example set of rules might look like this:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Next, add logic on the client to check a card's status and move it to the right column:

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

This lets you control which columns cards appear in, based on other fields.

### Example

Here's a snippet showing how to use server-side logic to group two or more statuses into a single column in real time:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
