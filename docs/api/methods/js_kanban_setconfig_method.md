---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setConfig()

### Description

@short: Sets the config parameters of the Kanban widget

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Kanban configuration. See the full list of the parameters [here](api/api_overview.md#kanban-properties)

:::tip
Using this method, you can set the configuration parameters of the Kanban widget as well as load data to it. The method changes only the parameters you passed
:::

### Example

~~~jsx {7-14}
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
~~~
