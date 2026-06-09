---
sidebar_label: undo
title: undo Event API
description: Read the undo event API for DHTMLX Kanban. Learn how to handle the event triggered when reverting the last operation in Kanban.
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
