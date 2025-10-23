---
sidebar_label: undo()
title: undo Method
description: You can learn about the undo method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# undo()

### Description

@short: Reverts the last operation in Kanban

:::info
The `undo()` method works only when the [`history: true`](api/config/js_kanban_history_config.md) configuration is enabled!
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
// steps back one action in the Kanban's history
board.undo();
~~~

**Change log:** The method was introduced in v1.3