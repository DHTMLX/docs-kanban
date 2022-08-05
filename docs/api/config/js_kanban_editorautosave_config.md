---
sidebar_label: editorAutoSave
title: editorAutoSave Config
description: You can learn about the editorAutoSave config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
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
