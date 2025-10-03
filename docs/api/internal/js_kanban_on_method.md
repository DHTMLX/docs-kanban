---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.on()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)
- `config` - (optional) an object that stores the following parameters:
    - `intercept` - (optional) if you set `intercept: true` during event listener creation, this event listener will run before all others
    - `tag` - (optional) an action tag. You can use the tag name to remove an action handler via the [`detach`](api/internal/js_kanban_detach_method.md) method

### Events

:::info
The full list of the Kanban internal events can be found [**here**](api/overview/main_overview.md/#kanban-events)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// output the card data in console when its moving
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
}, {tag: "move"});
~~~

**Change log**: The **config.tag** and **config.intercept** parameters were added in v1.7
