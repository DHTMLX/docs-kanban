---
sidebar_label: add-row
title: add-row Event
description: You can learn about the add-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-row

### Description

@short: Triggered whenever a new row is added

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

The callback for the **add-row** event accepts an object with the following optional properties:

- `id` - the identifier for the new row
- `row` - the data object representing the new row. You can find the complete list of **row** parameters [**here**](/api/config/js_kanban_rows_config.md)
- `before` - the ID of the row before which the new row will be inserted
- `skipProvider` - controls whether the request to the server should be prevented or allowed

:::info
To manage internal events, consider using the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "add-row" event 
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**Change log**: The **id**, **before**, and **row** parameters were introduced in v1.1
