---
sidebar_label: config
title: config Config
description: You can learn about the config config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# config

### Description

@short: Optional. An object of settings for configuring the external editor of Kanban

### Usage

~~~jsx {}
config?: {
	autoSave?: boolean,
	debounce?: number
}; 
~~~

:::info
If you want to use the **external editor**, don't foget to disable the built-in one!
:::

### Parameters

- `autoSave` - (optional) enables/disables an autosave mode of the external editor
- `debounce` - (optional) time of delay of autosaving data (works with the ***autoSave: true*** parameter only)

### Default config

~~~jsx {}
config: {
	autoSave: true,
	debounce: 100
}
~~~

### Example

~~~jsx {5-7,12-15}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	editor: {
        show: false // hide the built-in editor 
    }
});
// create external editor
new kanban.Editor("#editor", {
	api: board.api,
	config: {
		autoSave: true,
		debounce: 2000
	}
});
~~~

**Change log:** The property was added in v1.4

**Related articles:** [Configuring an external editor](../../../guides/configuration/#configuring-an-external-editor)
