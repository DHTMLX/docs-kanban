---
sidebar_label: add-row
title: add-row Event API
description: Read the add-row event API for DHTMLX Kanban. Learn how to handle the event triggered when adding a new row.
---

# add-row

### Description

@short: Fires when adding a new row

### Usage

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **add-row** event can take an object with the the following parameters:

- `id` - (optional) the ID of the new row
- `row` - (optional) the data object of the new row. The full list of the **row** parameters can be found [**here**](api/config/js_kanban_rows_config.md)
- `before` - (optional) the ID of the row, before which the new row will be placed
- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "add-row" event 
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**Change log**: The **id**, **before** and **row** parameters were added in v1.1
