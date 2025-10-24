---
sidebar_label: move-row
title: move-row Event
description: Explore the move-row event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# move-row

### Description

@short: Triggered when a row is moved

### Usage

~~~jsx {}
"move-row": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **move-row** event receives an object with these properties:

- `id` - (required) the ID of the row being moved
- `before` - (optional) the ID of the row before which the moved row will be inserted. If omitted, the row will be added at the end of the board
- `skipProvider` - (optional) controls whether the request to the server is prevented or allowed

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// listen for the "move-row" event
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.1