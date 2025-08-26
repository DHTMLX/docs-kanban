---
sidebar_label: set-edit
title: set-edit Event
description: Explore the set-edit event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API reference, try live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# set-edit

### Description

@short: Triggered when the editor is toggled

### Usage

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Parameters

The callback for the **set-edit** event accepts either *null* or an object with these properties:

- `cardId` - (required) the ID of the card being edited
- `eventSource` - (optional) indicates the ***"select-card"*** action that triggered the ***set-edit*** event

:::note
A ***null*** value means the editor is being closed
:::

:::info
To manage internal events, the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods) can be used
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// block editing when a user single-clicks a card
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Change log:**
  - The event was introduced in v1.2
  - The ***eventSource*** parameter was added in v1.6

**Related samples:** [Kanban. Open the editor by double-clicking on the task](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
