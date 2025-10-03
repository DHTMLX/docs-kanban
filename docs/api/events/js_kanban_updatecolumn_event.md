---
sidebar_label: update-column
title: update-column Event
description: You can learn about the update-column event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-column

### Description

@short: Fires when updating column data

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

The callback of the **update-column** event can take an object with the following parameter:

- `id` - (required) the ID of the column to be updated
- `column` - (optional) the new data object of the column. The full list of the **column** parameters can be found [**here**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) enables/disables fully data replacing

    :::note
    If you set the `replace` parameter to *true*, the old data will be fully replaced by the new ones. Otherwise, the method will update only the values you passed.
    :::

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
// subscribe on the "update-column" event
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- The **id** and **column** parameters were added in v1.1
- The **replace** parameter was added in v1.3