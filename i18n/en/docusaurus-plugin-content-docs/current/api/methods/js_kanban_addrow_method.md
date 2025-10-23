---
sidebar_label: addRow()
title: addRow Method
description: You can learn about the addRow method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addRow()

### Description

@short: Inserts a new row into the Kanban board

### Usage

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### Parameters

- `id` - (optional) specifies the ID for the new row
- `row` - (optional) provides the data object representing the new row
- `before` - (optional) indicates the ID of the row before which the new row will be inserted 

:::info
You can find the complete list of **row** parameters [**here**](api/config/js_kanban_rows_config.md)
:::

### Example

~~~jsx {8-15}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// add new row
board.addRow({
    id: "extra_row",
    row: {
        label: "Extra row",
        collapsed: false
    },
    before: "row_2"
});
~~~

**Change log**: The **id**,  **row**, and **before** parameters were introduced in v1.1