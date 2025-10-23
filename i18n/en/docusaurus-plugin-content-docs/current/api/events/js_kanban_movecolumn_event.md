---
sidebar_label: move-column
title: move-column Event
description: Learn about the move-column event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try out examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# move-column

### Description

@short: Triggered when a column is moved

### Usage

~~~jsx {}
"move-column": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **move-column** event receives an object with these properties:

- `id` - (required) the ID of the column being moved
- `before` - (optional) the ID of the column before which the moved column will be inserted. If this isn’t specified, the column will be placed at the end of the board
- `skipProvider` - (optional) controls whether the request to the server is suppressed

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
// subscribe on the "move-column" event
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.1