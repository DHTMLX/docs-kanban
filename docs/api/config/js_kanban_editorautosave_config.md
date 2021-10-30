---
sidebar_label: editorAutoSave
title: JS Kanban editorAutoSave property
description: You can learn about the editorAutoSave property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# editorAutoSave

### Description

Enables/disables an **autosave mode** of JS Kanban

### Usage

```js
editorAutoSave?: boolean // (true by default)
```

:::info
Using this parameter, you can disable an autosave mode of JS Kanban. If you set the **editorAutoSave** property to *false*, the editor will display the "Save" button to save edited data
:::

### Example

```jsx {3}
new kanban.Kanban("#root", {
	...,
	editorAutoSave: false // disable autosaving
});
```
