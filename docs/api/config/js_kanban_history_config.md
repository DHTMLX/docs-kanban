---
sidebar_label: history
title: history Config
description: This section covers the history config in the DHTMLX JavaScript Kanban library. Explore developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# history

### Description

@short: Optional. Controls whether the history of changes is tracked

:::info
The `history` property lets you turn history management on or off for Kanban. Setting it to **false** means the history can't be controlled via the API or toolbar controls.
:::

:::tip
It's also possible to exclude certain operations from the Kanban history by using the [`$meta`](/api/common/js_kanban_meta_parameter) parameter with methods and events!
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
    history: false, // disable managing history
    // other parameters
});
~~~

**Change log:** This property was introduced in version 1.3

**Related articles:** [`undo()`](/api/methods/js_kanban_undo_method) and [`redo()`](/api/methods/js_kanban_redo_method)
