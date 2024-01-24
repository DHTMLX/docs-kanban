---
sidebar_label: updateColumn()
title: updateColumn Method
description: You can learn about the updateColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateColumn()

### Description

@short: Updates the column data by its ID

### Usage

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the column to be updated
- `column` - (optional) the new data object of the column. The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) enables/disables fully data replacing

    :::note
    If you set the `replace` parameter to *true*, the old data will be fully replaced by the new ones. Otherwise, the method will update only the values you passed.
    :::

### Example

~~~jsx {7-16}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// update column data with the "backlog" ID
board.updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**Change log**: 
- The **id** and **column** parameters were added in v1.1
- The **replace** parameter was added in v1.3