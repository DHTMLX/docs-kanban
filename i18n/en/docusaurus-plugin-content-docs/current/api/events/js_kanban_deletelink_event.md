---
sidebar_label: delete-link
title: delete-link Event
description: Explore the delete-link event in the DHTMLX JavaScript Kanban library documentation. Access developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# delete-link

### Description

@short: Triggered when a link is removed

### Usage

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-link** event receives an object with these properties:

- `id` - (required) the ID of the link being deleted
- `skipProvider` - (optional) controls whether the request to the server is prevented

:::info
To manage internal events, refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
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