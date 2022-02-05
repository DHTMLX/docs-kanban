---
sidebar_label: editorAutoSave
title: editorAutoSave Config
description: You can learn about the editorAutoSave config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editorAutoSave

### Description

@short: enables/disables an autosave mode of Kanban

### Usage

~~~jsx {}
editorAutoSave?: boolean; // (true by default)
~~~

### Parameters

- `editorAutoSave` - (optional) if **true**, the **autosave** mode of Kanban is enabled 

:::info
Using this parameter, you can enable/disable an autosave mode of Kanban. If you set the **editorAutoSave** property to **false**, the editor will display the "Save" button to save edited data
:::

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
