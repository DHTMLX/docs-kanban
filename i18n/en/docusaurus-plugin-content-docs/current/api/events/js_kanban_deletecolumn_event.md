---
sidebar_label: delete-column
title: delete-column Event
description: Explore the delete-column event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code examples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# delete-column

### Description

@short: Triggered when a column is removed

### Usage

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **delete-column** event receives an object with these properties:

- `id` - (required) the identifier of the column being deleted
- `skipProvider` - (optional) controls whether the request is sent to the server or not

:::info
To manage internal events, refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "delete-column" event 
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~