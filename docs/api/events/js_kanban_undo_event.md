---
sidebar_label: undo
title: undo Event
description: You can learn about the undo event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# undo

### Description

@short: Fires when reverting the last operation in Kanban

### Usage

~~~jsx {}
"undo": () => void;
~~~

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "undo" event
board.api.on("undo", () => {
    console.log("Undo operation");
});
~~~

**Change log**: The event was added in v1.7
