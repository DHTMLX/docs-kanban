---
sidebar_label: undo
title: undo Event
description: Discover the undo event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# undo

### Description

@short: Triggered when the last action in Kanban is undone

### Usage

~~~jsx {}
"undo": () => void;
~~~

:::info
To manage internal events, you can utilize the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "undo" event
board.api.on("undo", () => {
    console.log("Undo operation");
});
~~~

**Change log**: This event was introduced in v1.7