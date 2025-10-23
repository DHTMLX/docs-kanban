---
sidebar_label: delete-row
title: delete-row Event
description: You can learn about the delete-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# delete-row

### Description

@short: Triggers when a row is being removed

### Usage

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### Parameters

The callback for the **delete-row** event receives an object with the following properties:

- `id` - (required) specifies the ID of the row that will be deleted
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
// listen for the "delete-row" event
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~