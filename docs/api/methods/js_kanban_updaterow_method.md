---
sidebar_label: updateRow()
title: updateRow Method
description: You can learn about the updateRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateRow()

### Description

@short: Modifies the data of a row based on its ID.

### Usage

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the identifier of the row to update
- `row` - (optional) an object containing the new data for the row. The complete list of **row** parameters is available [**here**](/api/config/js_kanban_rows_config)
- `replace` - (optional) controls whether to completely replace the existing data

:::note
Setting the `replace` parameter to *true* will overwrite the old data entirely with the new data. If not set or false, only the specified values will be updated.
:::

### Example

~~~jsx {8-15}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// update row data with the "feature" ID
board.updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
    replace: true
});
~~~

**Change log**:
- The **id** and **row** parameters were added in v1.1
- The **replace** parameter was added in v1.3
