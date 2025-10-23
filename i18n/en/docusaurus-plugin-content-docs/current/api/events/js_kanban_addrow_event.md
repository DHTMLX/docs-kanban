---
sidebar_label: add-row
title: add-row Event
description: Explore the add-row event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API reference, try sample code and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# add-row

### Description

@short: Triggered when a new row is added

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

The callback for the **add-row** event accepts an object with these options:

- `id` - (optional) the identifier for the new row
- `row` - (optional) the data object representing the new row. You can find the full list of **row** parameters [**here**](api/config/js_kanban_rows_config.md)
- `before` - (optional) the ID of the existing row that the new row will be inserted before
- `skipProvider` - (optional) controls whether the request to the server is prevented or allowed

:::info
To work with internal events, you can refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe to the "add-row" event 
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**Change log**: The **id**, **before**, and **row** parameters were introduced in v1.1