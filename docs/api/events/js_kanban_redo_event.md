---
sidebar_label: redo
title: redo Event
description: You can learn about the redo event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# redo

### Description

@short: Fires when repeating the action that was reverted by the undo action

### Usage

~~~jsx {}
"redo": () => void;
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
// subscribe on the "redo" event
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**Change log**: The event was added in v1.7
