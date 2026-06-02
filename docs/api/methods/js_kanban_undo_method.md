---
sidebar_label: undo()
title: undo Method API
description: Read the undo method API for DHTMLX Kanban. Learn how to revert the last board operation.
---

# undo()

### Description

@short: Reverts the last operation in Kanban

:::info
The `undo()` method works with the [`history: true`](api/config/js_kanban_history_config.md) config only!
:::

### Usage

~~~jsx {}
undo(): void;
~~~

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// makes one step back in history of Kanban
board.undo();
~~~

**Change log:** The method was added in v1.3
