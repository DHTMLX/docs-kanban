---
sidebar_label: delete-comment
title: delete-comment Event API
description: Read the delete-comment event API for DHTMLX Kanban. Learn how to handle the event triggered when deleting a card comment.
---

# delete-comment

### Description

@short: Fires when deleting a card comment

### Usage

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **delete-comment** event can take an object with the following parameters:

- `id` -  (optional) the ID of the comment to be deleted
- `cardId` - (required) the ID of the card which comment to be deleted
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
// subscribe on the "delete-comment" event
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**Change log:** The event was added in v1.4
