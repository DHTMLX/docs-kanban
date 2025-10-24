---
sidebar_label: set-edit
title: set-edit Event
description: Explore the set-edit event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# set-edit

### Description

@short: Triggered when the editor is toggled

### Usage

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Parameters

The callback for the **set-edit** event can either be *null* or an object containing:

- `cardId` - (required) the ID of the card being edited
- `eventSource` - (optional) the ***"select-card"*** action that triggers the ***set-edit*** event

:::note
The ***null*** value indicates that the editor is being closed
:::

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
// block editing when a card is clicked once
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Change log:**
    - The event was introduced in v1.2
    - The ***eventSource*** parameter was added in v1.6

**Related samples:** [Kanban. Open the editor by double-clicking on the task](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)