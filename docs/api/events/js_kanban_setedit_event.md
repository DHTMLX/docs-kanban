---
sidebar_label: set-edit
title: set-edit Event
description: You can learn about the set-edit event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# set-edit

### Description

@short: Fires when toggling an editor

### Usage

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Parameters

The callback of the **set-edit** event can take the *null* value or an object with the following parameter:

- `cardId` - (required) the ID of the card to be edited
- `eventSource` - (optional) the ***"select-card"*** action that invokes the ***set-edit*** event

:::note
The ***null*** value is used when closing editor
:::

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
// prevent editing when a user clicks the card once
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Change log:**
    - The event was added in v1.2
    - The ***eventSource*** parameter was added in v1.6

**Related samples:** [Kanban. Open the editor by double-clicking on the task](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
