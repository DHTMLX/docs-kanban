---
sidebar_label: addRow()
title: addRow Method API
description: Read the addRow method API for DHTMLX Kanban. Learn how to add a new row (swimlane) to the board.
---

# addRow()

### Description

@short: Adds a new row into Kanban

### Usage

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the new row
- `row` - (optional) the data object of the new row
- `before` - (optional) the ID of the row, before which the new row will be placed 

:::info
The full list of the **row** parameters can be found [**here**](api/config/js_kanban_rows_config.md)
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

**Change log**: The **id**,  **row** and **before** parameters were added in v1.1
