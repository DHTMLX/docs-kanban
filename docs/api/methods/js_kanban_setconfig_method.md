---
sidebar_label: setConfig()
title: Kanban setConfig method
description: You can learn about the setConfig method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setConfig()

### Description

Sets the config parameters of the Kanban widget

### Usage

```js
setConfig: (config: object) => void;
```

### Parameters

- `config: object` - the object of the Kanban configuration

:::tip
Using this method, you can set the configuration parameters of the Kanban widget as well as load data to it. The method changes only the parameters you passed
:::

### Example

```jsx {7-14}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// set the configuration parameters of Kanban
board.setConfig({
	editorAutoSave: false,
	columnKey: "stage",
	rowKey: "type",
	cardShape,
	editorShape,
	/*other parameters*/
});
```
