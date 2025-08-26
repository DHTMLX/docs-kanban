---
sidebar_label: api.on()
title: on Method
description: Learn about the on method in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# api.on()

### Description

@short: Enables the attachment of a handler to internal events

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) the event to listen for 
- `handler` - (required) the function to handle the event (arguments depend on the triggered event)

### Events

:::info
You can find the complete list of Kanban internal events [**here**](/api/overview/main_overview/#kanban-events)
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
});
~~~
