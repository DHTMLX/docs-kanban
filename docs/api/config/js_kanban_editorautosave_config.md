---
sidebar_label: editorAutoSave
title: editorAutoSave Config
description: You can learn about the editorAutoSave config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editorAutoSave

### Description

Enables/disables an **autosave mode** of Kanban

### Usage

```js
editorAutoSave?: boolean // (true by default)
```

:::info
Using this parameter, you can enable/disable an autosave mode of Kanban. If you set the **editorAutoSave** property to *false*, the editor will display the "Save" button to save edited data
:::

### Example

```jsx {3}
new kanban.Kanban("#root", {
	...,
	editorAutoSave: false // disable autosaving
});
```
