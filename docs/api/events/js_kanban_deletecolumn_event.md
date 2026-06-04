---
sidebar_label: delete-column
title: delete-column Event API
description: Read the delete-column event API for DHTMLX Kanban. Learn how to handle the event triggered when removing a column.
---

# delete-column

### Description

@short: Fires when removing a column

### Usage

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **delete-column** event can take an object with the following parameter:

- `id` - (required) the ID of the column to be deleted
- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "delete-column" event 
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~
