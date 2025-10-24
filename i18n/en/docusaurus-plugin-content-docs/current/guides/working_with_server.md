---
sidebar_label: Working with server
title: Working with Server
description: You can explore how to work with Server in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Working with server

JavaScript Kanban makes it easy to work with both client and server data. The widget doesn’t have strict backend requirements and can connect to any backend platform that supports the REST API (RESTful API).

:::info
The widget comes with built-in **Go** and **Node** backends, but you’re free to use your own server scripts too.
:::

## RestDataProvider

JavaScript Kanban includes the **RestDataProvider** service, which is fully compatible with REST APIs for backend integration. With it, you can interact with your server and perform these data operations:

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

The **RestDataProvider** service offers special REST methods for loading data dynamically:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) - returns a promise with ***cards data***
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) - returns a promise with ***columns data***
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) - returns a promise with ***links data***
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) - returns a promise with ***rows data***
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) - returns a promise with ***users data***

## Interacting with backend  

To work with the server, just connect **RestDataProvider** to your server scripts. If you’re using the built-in backend, you’ll find the scripts here:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

Or you can set up your own backend.

:::tip
If you’re using a custom backend, check out the [**REST API routes**](api/overview/rest_routes_overview.md) for more details.
:::

To hook up **RestDataProvider** to your backend, just call the **kanban.RestDataProvider** constructor and pass in the backend **URL**.

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
Make sure to include **RestDataProvider** in the **Event Bus** chain with [**api.setNext()**](api/internal/js_kanban_setnext_method.md) so you can add, delete, and update data—and send requests to your server.
:::

### Example

Here’s a snippet showing how to connect **RestDataProvider** to the **Go** backend and load data from the server:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser backend

Kanban boards are popular for all kinds of teams and companies. To make collaboration smooth for multiple users, there’s a feature that lets everyone manage the same cards in real-time—no page reloads needed. This means users can work together and instantly see each other’s changes, which helps keep everyone in sync.

To set up a multiuser backend, you’ll need to handle authorization on the server before initializing Kanban. Here’s a simple `login(url: string)` function for that:

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

This function just simulates login, and everyone gets authorized with ID 1. After logging in, the server sends back a token. You’ll need to include this token in every request. The `RestDataProvider.setHeaders()` function makes this easy by adding custom headers. By default, the token goes into the `"Remote-Token":<value>` header:

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

Once you have the token, you can initialize the widget like this:

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

After setting up the widget, you’ll want to add a WebSocket to listen for server events. Here’s how to do it:

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

- `handlers` - these handle events coming from the server
- `events` - this connects to the server and listens for incoming events
- `RemoteEvents.on(handlers)` - applies your handlers to server events

With the multiuser backend in place, it’s much easier for teams to collaborate and see updates in real-time right in the UI.

### Example

Check out this snippet to see how to set up a multiuser backend and track changes from other users in real-time:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Customization of server events

You can set up your own logic for handling server events. To do this, just pass a **handlers** object to the `RemoteEvents.on(handlers)` method. The **handlers** object should look like this:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Whenever something changes on the server, it sends back the name of the changed element. These names might vary depending on how your server works.

Any data updated on the client side will be passed as the **obj** argument to `function(obj: any)`. The `type: string` field tells you what operation happened, and can be one of these:

- For **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- For **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- For **links**: `"add-link"`, `"delete-link"`
- For **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

Here’s an example showing how this works:

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

The `RestDataProvider.getIDResolver()` method gives you a function to keep client and server IDs in sync. When you create a new object (card/column/row/link) on the client, it gets a temporary ID and a server ID in the store. The `idResolver()` function helps match up the client ID with the server ID. Here’s how it looks: `idResolver(id: TID, type: number)`

The `type` argument is the model type:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3
- `LinkID` - 4

To keep the client from sending a duplicate request to the server, use `skipProvider: true` when calling `board.api.exec()`.

Once you’ve set up your custom handlers, you can handle server events however you like.

## Grouping two or more statuses into a single column

Sometimes you might want to show cards from different columns all together in a single column (like combining *To do* and *Unassigned* statuses into one column).

To do this, you can add a custom field (for example, **status**) that keeps track of the card’s current status. The **column** field will hold the general column status.

Next, set up rules for grouping cards. For example, you might group cards into columns like this:

- *todo*, *unassigned* go into the **Open** column
- *dev*, *testing* go into the **Inprogress** column
- *merged*, *released* go into the **Done** column

There are a couple of ways to group cards by status into a single column:

- [Server side](#server-side-grouping)
- [Server side + client side](#server-side--client-side-grouping)

### Server side grouping

If you want to do the grouping on the server, your backend needs to send data to the client using [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (see [Multiuser backend](#multiuser-backend)).

When the server handles an update for a card, check the **status** field. Here’s how you might do it in [Go](https://go.dev/), but you can use any backend tech you like.

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

So when a user changes the status, the server checks it and puts the card in the right column. Then, the server uses WebSocket to let the client know the card needs to move.

### Server side + client side grouping

For a mixed approach, get the grouping rules from the server. Then, the client can figure out which column a card belongs to based on its status.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Here’s what the rules might look like:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Now, set up logic to check for changes and move cards to the right column:

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

This way, you can group cards into columns based on other fields.

### Example

Here’s a snippet showing how to set up the server to group two or more statuses into a single column in real-time:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>