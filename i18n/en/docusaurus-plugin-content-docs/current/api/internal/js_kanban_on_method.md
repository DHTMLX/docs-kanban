---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.on()

### Description

@short: Provides a way to attach handlers to internal events.

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Parameters

- `event` - (required) the event that will trigger the handler
- `handler` - (required) the function to execute when the event occurs (its arguments depend on the specific event)
- `config` - (optional) an object that can include:
    - `intercept` - (optional) setting `intercept: true` makes this listener run before others
    - `tag` - (optional) a label for the handler, which can be used to remove it later via the [`detach`](api/internal/js_kanban_detach_method.md) method

### Events

:::info
You can find the complete list of Kanban internal events [**here**](api/overview/main_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// log card data to the console when a card is moved
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
}, {tag: "move"});
~~~

**Change log**: The **config.tag** and **config.intercept** options were introduced in v1.7