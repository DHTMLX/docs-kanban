---
sidebar_label: history
title: history Config
description: You can learn about the history config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# history

### Description

@short: Optional. Enables/disables managing history of changes

:::info
Using the `history` property you can enable/disable managing history of Kanban. If you set it to **false**, you will not be able to manage history via the API and controls on Toolbar.
:::

:::tip
You can also skip some operations in the history of Kanban using the [`$meta`](api/common/js_kanban_meta_parameter.md) parameter with methods and events!
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

**Change log:** The property was added in v1.3

**Related articles:** [`undo()`](api/methods/js_kanban_undo_method.md) and [`redo()`](api/methods/js_kanban_redo_method.md)
