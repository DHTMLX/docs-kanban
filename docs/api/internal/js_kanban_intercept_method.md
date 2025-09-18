---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.intercept()

### Description

@short: Allows intercepting and preventing the inner events

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: {tag?: number | string }
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `callback` - (required) a callback to be performed (the callback arguments will depend on the event to be fired)
- `config` - (optional) an object that stores an action `tag` name. You can use the tag name to remove an action handler via the [`detach`](api/internal/js_kanban_detach_method.md) method

### Events

:::info
The full list of the Kanban internal events can be found [**here**](api/overview/main_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// forbid moving cards to the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**Change log**: The **tag** parameter was added in v1.7
