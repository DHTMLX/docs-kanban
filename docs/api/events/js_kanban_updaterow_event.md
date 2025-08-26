---
sidebar_label: update-row
title: update-row Event
description: Discover the update-row event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code samples, live demos, and get a free 30-day trial of DHTMLX Kanban.
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

The callback for the **update-row** event receives an object with these parameters:

- `id` - (required) the identifier of the row being updated
- `row` - (optional) the new data object for the row. Find the complete list of **row** parameters [**here**](/api/config/js_kanban_rows_config)
- `replace` - (optional) controls whether the data is fully replaced or partially updated

:::note
Setting `replace` to *true* will completely overwrite the old data with the new one. If omitted or false, only the specified values will be updated.
:::

- `skipProvider` - (optional) controls whether the request to the server is suppressed

:::info
To manage internal events, refer to the [**Event Bus methods**](/api/overview/main_overview/#event-bus-methods)
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
- The **id** and **row** parameters were introduced in v1.1
- The **replace** parameter was added in v1.3
