---
sidebar_label: editorAutoSave
title: Kanban editorAutoSave property
description: You can learn about the editorAutoSave property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# editorAutoSave

### Description

Enables/disables an **autosave mode** of Kanban

### Usage

~~~jsx {}
editorAutoSave?: boolean // (true by default)
~~~

:::info
Using this parameter, you can enable/disable an autosave mode of Kanban. If you set the **editorAutoSave** property to *false*, the editor will display the "Save" button to save edited data
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
