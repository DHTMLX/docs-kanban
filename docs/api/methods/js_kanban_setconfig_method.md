---
sidebar_label: setConfig()
title: JS Kanban setConfig method
description: You can learn about the setConfig method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setConfig()

### Description

Sets the configuration parameters of the JS Kanban widget 

### Usage

`setConfig: (config: object) => void;`

### Parameters

- `config: object` - the object of the JS Kanban configuration

### Details

Using this method, you can set the configuration parameters of the JS Kanban widget as well as load data to it.

### Example

```jsx
// set the configuration parameters of the JS Kanban widget
kanban.setConfig({
	editorAutoSave: false,
	stage: "stage",
	lane: "type",
	cardShape,
	editorShape,
	/*other parameters*/
});
```
