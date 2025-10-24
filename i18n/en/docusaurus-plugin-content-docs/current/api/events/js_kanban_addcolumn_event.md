---
sidebar_label: add-column
title: add-column Event
description: Explore the add-column event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# add-column

### Description

@short: Triggered when a new column is added

### Usage

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### Parameters

The callback for the **add-column** event receives an object with these optional properties:

- `id` - the ID of the new column, if specified
- `column` - the data object for the new column. You can find the complete list of **column** parameters [**here**](api/config/js_kanban_columns_config.md)
- `before` - the ID of the column before which the new column will be inserted
- `skipProvider` - controls whether the request to the server is prevented or allowed

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "add-column" event
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**Change log**: Starting from v1.1, the **id**, **before**, and **column** parameters were introduced