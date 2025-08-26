---
sidebar_label: rows
title: rows Config
description: Explore the rows config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# rows

### Description

@short: Optional. An array of objects that holds the rows (swimlanes) data

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
To set up Swimlanes, provide the relevant data in the **rows** array. You can collapse/expand, rename, delete, and move swimlanes either through the UI or by using the [related API](/howtos/#how-to-work-with-rows-swimlanes).
:::

### Parameters

Each row (swimlane) can include the following parameters:

- `id` - (required) the row (swimlane) **ID** used for handling the row through its methods
- `label` - (optional) the label for the row (swimlane), shown in the row area
- `collapsed` - (optional) indicates if the row (swimlane) starts collapsed. If ***true***, it's collapsed initially. The default is ***false*** (expanded)
- `css` - (optional) applies CSS styles to an individual row

:::info
To dynamically load new row (swimlane) data, the [`parse()`](/api/methods/js_kanban_parse_method) method can be used.
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
    rows, // swimlane data
    // other parameters
});
~~~

**Change log:** The ***css*** parameter was introduced in v1.4

**Related articles:**
- [Working with data](/guides/working_with_data)
- [updateRow()](/api/methods/js_kanban_updaterow_method)

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
