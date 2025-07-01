---
sidebar_label: delete-row
title: delete-row Event
description: Discover how the delete-row event works in the DHTMLX JavaScript Kanban library. Explore developer guides, check out the API reference, test code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# delete-row

### Description

@short: Triggered when a row is removed

### Usage

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### Parameters

The callback for the **delete-row** event accepts an object containing the following parameters:

- `id` - (required) the ID of the row that is being deleted
- `skipProvider` - (optional) controls whether the request is sent to the server or not

:::info
To work with internal events, you can refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "delete-row" event
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~
