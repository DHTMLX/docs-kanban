---
sidebar_label: update-column
title: update-column Event
description: You can learn about the update-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-column

### Description

@short: Triggered when a column's data is updated

### Usage

~~~jsx {}
"update-column": ({
    id: string | number,
    column?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **update-column** event receives an object with the following properties:

- `id` - (required) the identifier of the column to update
- `column` - (optional) an object containing the new data for the column. You can find the full list of **column** properties [**here**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) controls whether the data should be completely replaced or partially updated

    :::note
    Setting `replace` to *true* will overwrite the old data entirely. If omitted or set to false, only the provided values will be updated.
    :::

- `skipProvider` - (optional) controls whether the update request should be sent to the server or not

:::info
To manage internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "update-column" event
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- The **id** and **column** parameters were introduced in v1.1
- The **replace** parameter was added in v1.3