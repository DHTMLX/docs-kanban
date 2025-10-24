---
sidebar_label: delete-comment
title: delete-comment Event
description: Explore the delete-comment event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# delete-comment

### Description

@short: Triggered when a card comment is deleted

### Usage

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-comment** event receives an object containing these parameters:

- `id` -  (optional) the ID of the comment being deleted
- `cardId` - (required) the ID of the card from which the comment is deleted
- `skipProvider` - (optional) controls whether the request to the server is sent or not

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
// listen to the "delete-comment" event
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**Change log:** This event was introduced in v1.4