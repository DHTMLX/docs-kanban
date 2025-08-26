---
sidebar_label: editorAutoSave
title: editorAutoSave Config
description: You can learn about the editorAutoSave config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

#

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Starting with version 1.3, the `editorAutoSave` property is **deprecated**. To control the "autosave" mode, please use the [`editor`](/api/config/js_kanban_editor_config) property instead.
:::

### Description

@short: Optional. Turns the autosave mode on or off

:::info
This setting lets you enable or disable autosave in the Kanban editor. When the **editorAutoSave** property is set to **false**, the editor will show a "Save" button to manually save changes.
:::

### Usage

~~~jsx {}
editorAutoSave?: boolean; // (true by default)
~~~

### Default config

~~~jsx {}
editorAutoSave: true
~~~

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorAutoSave: false, // disable autosave
    // other parameters
});
~~~
