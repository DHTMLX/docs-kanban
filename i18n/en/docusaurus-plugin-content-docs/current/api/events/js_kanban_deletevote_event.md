---
sidebar_label: delete-vote
title: delete-vote Event
description: You can learn about the delete-vote event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-vote

### Description

@short: Triggered when a user removes a vote from a card

### Usage

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-vote** event receives an object with these properties:

- `cardId` - (required) the ID of the card from which the vote will be removed
- `skipProvider` - (optional) controls whether the request to the server should be skipped

:::info
To work with internal events, you can refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "delete-vote" event
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Change log:** The event was introduced in v1.4