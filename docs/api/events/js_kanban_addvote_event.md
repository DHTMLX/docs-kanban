---
sidebar_label: add-vote
title: add-vote Event API
description: Read the add-vote event API for DHTMLX Kanban. Learn how to handle the event triggered when a user adds a new vote.
---

# add-vote

### Description

@short: Fires when a user adds a new vote

### Usage

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **add-vote** event can take an object with the following parameters:

- `cardId` - (required) the ID of the card, to which the vote to be added
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
// subscribe on the "add-vote" event
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Change log:** The event was added in v1.4
