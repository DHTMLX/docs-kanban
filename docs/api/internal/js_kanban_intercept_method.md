---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.intercept()

### Description

@short: Enables catching and blocking internal events before they happen.

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameters

- `event` - (required) the event to listen for
- `callback` - (required) the function to run (its arguments depend on the event being intercepted)

### Events

:::info
You can check out the complete list of Kanban internal events [**here**](/api/overview/main_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// prevent cards from being moved to the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
});
~~~
