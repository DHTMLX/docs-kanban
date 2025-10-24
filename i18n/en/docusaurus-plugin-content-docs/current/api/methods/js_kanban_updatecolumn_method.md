---
sidebar_label: updateColumn()
title: updateColumn Method
description: You can learn about the updateColumn method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateColumn()

### Description

@short: Modifies the data of a column using its ID

### Usage

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the unique identifier of the column to update
- `column` - (optional) an object containing the new data for the column. You can find the complete list of **column** parameters [**here**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) determines whether to completely replace the existing data

    :::note
    Setting `replace` to *true* will overwrite the old data entirely with the new data. If omitted or set to false, only the specified values will be updated.
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
- The **id** and **column** parameters were introduced in v1.1
- The **replace** parameter was introduced in v1.3