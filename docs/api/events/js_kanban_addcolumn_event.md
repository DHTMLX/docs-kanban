---
sidebar_label: add-column
title: add-column Event
description: You can learn about the add-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-column

### Description

@short: Fires when adding a new column

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

The callback of the **add-column** event can take an object with the following parameters:

- `id` - (optional) the ID of the new column
- `column` - (optional) the data object of the new column. The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md)
- `before` - (optional) the ID of the column, before which the new column will be placed
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
// subscribe on the "add-column" event
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**Change log**: The **id**, **before** and **column** parameters were added in v1.1
