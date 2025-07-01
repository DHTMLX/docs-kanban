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

- `id` - (optional) the identifier for the new row
- `row` - (optional) the data object representing the new row
- `before` - (optional) the ID of the row that the new row should be inserted before

:::info
A complete list of **row** parameters is available [**here**](/api/config/js_kanban_rows_config.md)
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

**Change log**: The **id**, **row**, and **before** parameters were introduced in v1.1
