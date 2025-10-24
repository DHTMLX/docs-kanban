---
sidebar_label: rows
title: rows Config
description: Explore the rows configuration in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and a free 30-day trial of DHTMLX Kanban.
---

# rows

### Description

@short: Optional. An array of objects representing the rows (swimlanes) data.

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
To set up Swimlanes, provide the relevant data in the **rows** array. Swimlanes can be collapsed/expanded, renamed, deleted, or moved either through the UI or by using the [related API](howtos.md#how-to-work-with-rows-swimlanes).
:::

### Parameters

Each row (swimlane) can include the following properties:

- `id` - (required) the unique ID of the row (swimlane), used for managing it through the available methods.
- `label` - (optional) the label shown in the row section.
- `collapsed` - (optional) indicates whether the row (swimlane) starts collapsed. If ***true***, it will be collapsed initially. The default is ***false*** (expanded).
- `css` - (optional) applies custom CSS styles to the individual row.

:::info
To update rows (swimlanes) data dynamically, the [**parse()**](api/methods/js_kanban_parse_method.md) method can be used.
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

**Change log:** The ***css*** parameter was introduced in v1.4

**Related articles:**
- [Working with data](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)