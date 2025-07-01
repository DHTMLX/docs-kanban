---
sidebar_label: delete-link
title: delete-link Event
description: You can learn about the delete-link event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-link

### Description

@short: Triggered when a link is deleted

### Usage

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-link** event receives an object with the following properties:

- `id` - (required) the ID of the link that is being deleted
- `skipProvider` - (optional) controls whether the request to the server is suppressed

:::info
To handle internal events, the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods) can be used
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// listen for the "delete-link" event
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**Change log:** This event was introduced in v1.4
