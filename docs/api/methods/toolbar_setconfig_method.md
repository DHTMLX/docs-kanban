---
sidebar_label: setConfig()
title: Toolbar setConfig Method API
description: Read the Toolbar setConfig method API for DHTMLX Kanban. Learn how to update Toolbar configuration at runtime.
---

# setConfig()

### Description

@short: Sets new configuration parameters of Toolbar

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Toolbar configuration. See the full list of properties [here](api/overview/main_overview.md#toolbar-properties)

:::note
The method changes only the parameters you passed.
:::

### Example

~~~jsx {6-8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// set new configuration parameters of Toolbar
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~
