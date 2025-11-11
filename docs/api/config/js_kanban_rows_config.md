---
sidebar_label: rows
title: rows Config
description: You can learn about the rows config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rows

### Description

@short: Optional. An array of objects containing the rows (swimlanes) data

### Usage

~~~jsx {}
rows?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        css?: string,
    }, {...} // other row data
];
~~~

:::info
To create Swimlanes you need to specify the corresponding data in the array of the **rows** property. You can collapse/expand, rename, delete and move swimlanes via UI or using [related API](howtos.md#how-to-work-with-rows-swimlanes)
:::

### Parameters

For each row (swimlane) you can specify the following parameters (data):

- `id` - (required) a row (swimlane) **ID**. It is used for managing the row via the corresponding methods
- `label` - (optional) a row (swimlane) label. It is displayed in the row section
- `collapsed` - (optional) a current state of the row (swimlane). If ***true***, the row is collapsed initially. Default value is ***false*** (expanded state)
- `css` - (optional) defines css styles for a separate row

:::info
If you want to load new data for rows (swimlanes) dynamically, you can use the [**setConfig()**](api/methods/js_kanban_setconfig_method.md) or [**parse()**](api/methods/js_kanban_parse_method.md) method!
:::

### Example

~~~jsx {1-4,9}
const rows = [
    { label: "Feature", id: "feature", collapsed: false, css: "red" },
    { label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows, // swimlanes data
    // other parameters
});
~~~

**Change log:** The ***css*** parameter was added in v1.4

**Related articles:**
- [Working with data](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
