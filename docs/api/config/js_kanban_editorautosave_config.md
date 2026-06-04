---
sidebar_label: editorAutoSave
title: editorAutoSave Config API
description: Read the editorAutoSave configuration API for DHTMLX Kanban. Learn how to enable or disable autosave in the card editor.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Starting from version 1.3, the `editorAutoSave` property is **deprecated**. To manage the "autosave" mode, use the [`editor`](api/config/js_kanban_editor_config.md) property!
:::

### Description

@short: Optional. Enables/disables an autosave mode

:::info
Using this parameter, you can enable/disable an autosave mode of Kanban. If you set the **editorAutoSave** property to **false**, the editor will display the "Save" button to save edited data
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
    editorAutoSave: false, // disable autosaving
    // other parameters
});
~~~
