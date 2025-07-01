---
sidebar_label: update-column
title: update-column Event
description: Explore the update-column event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# update-column

### Description

@short: Triggered whenever column data is updated.

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

- `id` - (required) identifies the column to update
- `column` - (optional) provides the new data object for the column. You can find the full list of **column** properties [**here**](/api/config/js_kanban_columns_config.md)
- `replace` - (optional) determines whether to replace the entire data set or just update specified fields

:::note
Setting `replace` to *true* means the existing data will be completely replaced by the new data. If false or omitted, only the provided values will be updated.
:::

- `skipProvider` - (optional) controls whether the request to update the server is sent or skipped

:::info
To manage internal events, refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
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
