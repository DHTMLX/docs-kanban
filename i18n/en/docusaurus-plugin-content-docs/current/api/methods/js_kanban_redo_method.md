---
sidebar_label: redo()
title: redo Method
description: You can learn about the redo method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# redo()

### Description

@short: Reapplies the action that was undone by the undo command

:::info
The `redo()` method only works when the [`history: true`](api/config/js_kanban_history_config.md) configuration is enabled!
:::

### Usage

~~~jsx {}
redo(): void;
~~~

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// redoes the last undone action in Kanban's history
board.redo();
~~~

**Change log:** The method was introduced in v1.3