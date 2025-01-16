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

- `config` - (required) the object of the Kanban configuration. See the full list of properties [here](api/overview/main_overview.md#kanban-properties)

:::tip
Using this method, you can configure the Kanban widget as well as load data to it. The method doesn't change history (you cannot change history at all) and themes (use the [`setTheme()`](api/methods/js_kanban_settheme_method.md) method instead).
:::

### Example

~~~jsx {10-20,22-23}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// specify new configuration parameters of Kanban
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* other parameters */
});
                        
// specify new configuration parameters of Toolbar
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
