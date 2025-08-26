---
sidebar_label: move-column
title: move-column Event
description: Explore the move-column event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# move-column

### Description

@short: Triggered when a column is moved

### Usage

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **move-column** event receives an object with these properties:

- `id` - (required) the ID of the column being moved
- `before` - (required) the ID of the column before which the moved column will be placed
- `skipProvider` - (optional) controls whether the request to the server is skipped or not

:::info
To manage internal events, you can refer to the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "move-column" event
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**Change log:** This event was introduced in v1.1
