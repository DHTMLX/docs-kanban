---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setConfig()

### Description

@short: Updates the Toolbar with new configuration settings.

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) an object containing the Toolbar configuration. Check out the full list of properties [here](api/overview/main_overview.md#toolbar-properties)

:::note
Only the parameters you provide will be updated.
:::

### Example

~~~jsx {6-8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// update Toolbar configuration
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~