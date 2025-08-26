---
sidebar_label: columns
title: columns Config
description: Explore the columns configuration in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# columns

### Description

@short: Optional. An array of objects containing the columns data

### Usage

~~~jsx {}
columns?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        limit?: number | object,
        strictLimit?: boolean,
        css?: string,
        overlay?: any
    },
    {...} // other columns data
];
~~~

### Parameters

Each column can be configured using the following properties (data):

- `id` - (required) the unique **ID** of the column. This is used to manage the column through its related methods.
- `label` - (optional) the label shown in the column header.
- `collapsed` - (optional) indicates the initial state of the column. When ***true***, the column starts collapsed. The default is ***false*** (expanded).
- `limit` - (optional) can be either of two types:
    - `number` - sets a maximum number of cards allowed in the column.
    - `object` - defines card limits per row (swimlane) by their IDs.
- `strictLimit` - (optional) enables strict limit enforcement. If ***true***, users cannot add more cards than specified in the **limit** parameter. Defaults to ***false***.
- `css` - (optional) applies custom CSS styles to the individual column.
- `overlay` - (optional) adds an overlay layer to a column. This is useful for defining a template that covers the column, for example:

~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
~~~

:::info
To update column data dynamically, you can use the [`parse()`](/api/methods/js_kanban_parse_method) method.
:::

### Example

~~~jsx {1-31,34}
const columns = [
    {
        label: "Backlog",
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true,
        css: "red"
    },
    {
        label: "In progress",
        id: "inprogress",
        collapsed: false,
        limit: {
            // limits the number of cards for the "Feature" and "Task" rows in the "In progress" column
            feature: 3,
            task: 2
        },
        strictLimit: false
    },
    {
        label: "Done",
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">Drop is not allowed</span>
                <span class="disable-drop-description">Only testers can move cards to this
                    column</span>
            </div>`)
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    // other parameters
});
~~~

**Change log:** The **css** and **overlay** properties were introduced in version 1.4.

**Related article:**
- [Working with data](/guides/working_with_data)
- [updateColumn()](/api/methods/js_kanban_updatecolumn_method)

**Related samples:**
- [Kanban. Limits for columns and swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
