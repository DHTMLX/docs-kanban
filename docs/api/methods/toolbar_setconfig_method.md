---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setConfig()

### Description

@short: Sets new config parameters of Toolbar

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Toolbar configuration. See the full list of properties [here](api/api_overview.md#toolbar-properties)

### Example

~~~jsx {6-8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// set new config parameters of Toolbar
toolbar.setConfig({
	items: ["search", "spacer", "sort"]
});
~~~
