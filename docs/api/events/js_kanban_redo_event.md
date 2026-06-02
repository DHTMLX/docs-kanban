---
sidebar_label: redo
title: redo Event API
description: Read the redo event API for DHTMLX Kanban. Learn how to handle the event triggered when repeating the action that was reverted by the undo action.
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
