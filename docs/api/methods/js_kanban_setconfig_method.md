---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setConfig()

### Description

@short: Updates the Kanban with new configuration settings

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) an object containing the Kanban configuration options. Check the full list of properties [here](/api/overview/main_overview.md#kanban-properties)

:::tip
This method allows you to adjust the Kanban widget settings and load data into it. Note that it doesn't affect history (modifying history is not supported) or themes (use the [`setTheme()`](/api/methods/js_kanban_settheme_method.md) method for that).
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

// update Kanban configuration with new parameters
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
                        
// update Toolbar configuration with new items
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
