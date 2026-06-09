---
sidebar_label: redo()
title: redo Method API
description: Read the redo method API for DHTMLX Kanban. Learn how to repeat an action reverted by undo.
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
