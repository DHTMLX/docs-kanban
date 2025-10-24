---
sidebar_label: redo
title: redo Event
description: Explore the redo event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# redo

### Description

@short: Triggered when an action that was undone gets repeated

### Usage

~~~jsx {}
"redo": () => void;
~~~

:::info
To work with internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "redo" event
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**Change log**: This event was introduced in v1.7