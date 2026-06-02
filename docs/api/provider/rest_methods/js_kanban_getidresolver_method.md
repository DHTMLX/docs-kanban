---
sidebar_label: getIDResolver()
title: getIDResolver REST Method API
description: You can learn about the getIDResolver REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getIDResolver()

### Description

@short: Returns a function that resolves temporary client-side IDs to backend IDs

:::info
The `getIDResolver()` method is a part of the **RestDataProvider** service intended for working with server.
:::

### Usage

~~~jsx {}
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Returns

The method returns an `idResolver(id, type)` function:

- `id` — the entity ID to resolve (a temporary client-side ID or a regular ID)
- `type` — the model type the ID belongs to:
    - `1` — card (`CardID`)
    - `2` — row (`RowID`)
    - `3` — column (`ColumnID`)
    - `4` — link (`LinkID`)
    - `5` — comment (`CommentID`)

When the client creates a new entity (card, column, row, link, comment), `RestDataProvider` assigns it a temporary client-side ID and remembers the backend ID returned by the server. The `idResolver(id, type)` function returns the backend ID for any temporary ID it still holds. For IDs that already match the backend, the function returns them unchanged.

### Example

The most common use case is wiring `RestDataProvider` to `kanbanUpdates` in a multiuser setup so that server events targeted at backend IDs apply correctly to entities that still live on the client under temporary IDs:

~~~jsx {6-9}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

// other initialization...

const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);

const events = new kanban.RemoteEvents(url + "/api/v1", token);
events.on(handlers);
~~~

The same resolver function can be used inside custom handlers passed to `RemoteEvents.on()`. See [Customize server events](guides/working_with_server.md#customize-server-events) for a complete example.

**Related articles:** [Working with server: Multiuser backend](guides/working_with_server.md#multiuser-backend)
