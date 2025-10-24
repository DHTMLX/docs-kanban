---
sidebar_label: history
title: history Config
description: Check out the history config in the DHTMLX JavaScript Kanban library docs. Explore developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# history

### Description

@short: Optional. Turns history tracking on or off

:::info
The `history` property lets you enable or disable the Kanban history feature. Setting it to **false** means you won’t be able to use the API or Toolbar controls to manage history.
:::

:::tip
You can also exclude certain actions from the Kanban history by using the [`$meta`](api/common/js_kanban_meta_parameter.md) parameter with methods and events!
:::

### Usage

~~~jsx {}
history?: boolean; 
~~~

### Default config

~~~jsx {}
history: true
~~~

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false, // turn off history management
    // other parameters
});
~~~

**Change log:** This property was introduced in v1.3

**Related articles:** [`undo()`](api/methods/js_kanban_undo_method.md) and [`redo()`](api/methods/js_kanban_redo_method.md)