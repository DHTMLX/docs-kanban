---
sidebar_label: update-row
title: update-row Event
description: Explore the update-row event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# update-row

### Description

@short: Triggered when a row's data is updated

### Usage

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **update-row** event accepts an object with these properties:

- `id` - (required) identifies the row to update
- `row` - (optional) contains the new data for the row. You can find all available **row** parameters [**here**](api/config/js_kanban_rows_config.md)
- `replace` - (optional) controls whether the existing data is completely replaced

    :::note
    Setting `replace` to *true* will overwrite all old data with the new data. If not set, only the specified values will be updated.
    :::

- `skipProvider` - (optional) controls whether to skip sending the update request to the server

:::info
To work with internal events, refer to the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen to the "update-row" event
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**Change log**:
- Added **id** and **row** parameters in v1.1
- Added **replace** parameter in v1.3