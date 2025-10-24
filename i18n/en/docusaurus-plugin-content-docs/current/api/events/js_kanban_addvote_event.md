---
sidebar_label: add-vote
title: add-vote Event
description: You can learn about the add-vote event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-vote

### Description

@short: Triggered when a user casts a new vote

### Usage

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **add-vote** event receives an object with these properties:

- `cardId` - (required) the ID of the card where the vote is being added
- `skipProvider` - (optional) controls whether the request to the server should be skipped

:::info
To manage internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
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