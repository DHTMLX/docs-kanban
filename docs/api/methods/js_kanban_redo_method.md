---
sidebar_label: redo()
title: redo Method
description: You can learn about the redo method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# redo()

### Description

@short: Repeats the action that was reverted by the undo action

:::info
The `redo()` method works with the [`history: true`](api/config/js_kanban_history_config.md) config only!
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
// makes one step back in history of Kanban
board.redo();
~~~

**Change log:** The method was added in v1.3