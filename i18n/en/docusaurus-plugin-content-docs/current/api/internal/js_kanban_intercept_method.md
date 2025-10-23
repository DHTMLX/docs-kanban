---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.intercept()

### Description

@short: Provides a way to capture and block internal events before they proceed.

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Parameters

- `event` - (required) the event to listen for
- `callback` - (required) the function to execute when the event occurs (arguments depend on the specific event)
- `config` - (optional) an object that can include:
    - `intercept` - (optional) when set to `true`, this listener runs before others
    - `tag` - (optional) a label for the action, useful for removing the handler later with the [`detach`](api/internal/js_kanban_detach_method.md) method

### Events

:::info
You can find the complete list of internal Kanban events [**here**](api/overview/main_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// block moving cards into the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**Change log**: The **config.tag** and **config.intercept** options were introduced in version 1.7