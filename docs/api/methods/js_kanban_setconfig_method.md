---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setConfig()

### Description

@short: Sets new configuration parameters of Kanban

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Kanban configuration. See the full list of properties [here](api/api_overview.md#kanban-properties)

:::tip
Using this method, you can configure the Kanban widget as well as load data to it. The method changes only the parameters you passed.
:::

:::important
The `setConfig()` method destroys the current component and initialize a new one. If you use the component with **Toolbar**, you need to call the [`setConfig()`](api/methods/toolbar_setconfig_method.md) method of **Toolbar**, because it uses the internal API of Kanban. See the example below!
:::

### Example

~~~jsx {10-18,20-23}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});

// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// set new configuration parameters of Kanban
board.setConfig({
	editorAutoSave: false,
	columnKey: "stage",
	rowKey: "type",
	cardShape,
	editorShape,
	/*other parameters*/
});

// update configuration parameters of Toolbar
toolbar.setConfig({
	api: board.api
});
~~~
