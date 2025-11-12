---
sidebar_label: columns
title: columns Config
description: Discover how to configure columns in the DHTMLX JavaScript Kanban library. Explore developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# columns

### Description

@short: Optional. An array of objects holding the columns data

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

Each column can include the following properties (data):

- `id` - (required) the column **ID** used to manage the column via its methods
- `label` - (optional) the column label shown in the column header
- `collapsed` - (optional) the column's initial state. If ***true***, the column starts collapsed. Default is ***false*** (expanded)
- `limit` - (optional) this can be either:
    - `number` - maximum number of cards allowed in the column
    - `object` - an object specifying card limits per row (swimlane) by ID
- `strictLimit` - (optional) enforces the limit strictly. If ***true***, users cannot add cards beyond the set **limit**. Default is ***false*** 
- `css` - (optional) applies custom CSS styles to the column
- `overlay` - (optional) adds an overlay layer to the column. You can specify a template that covers the column like this:

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
    ~~~

:::info
To load new column data dynamically, the [`setConfig()`](../../methods/js_kanban_setconfig_method) or  [`parse()`](../../methods/js_kanban_parse_method) method can be used.
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
            // limits cards in the "Feature" and "Task" rows of the "In progress" column
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

### Custom styling

To style columns with the `css` parameter, define CSS rules for your custom class.

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

If your styles don't apply, check that:

- The selector includes enough context (like parent and DHTMLX internal classes)
- If inline styles override your styles, consider using `!important`

**Change log:** The **css** and **overlay** options were introduced in v1.4

**Related article:**
- [Working with data](guides/working_with_data.md)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**Related samples:**
- [Kanban. Limits for columns and swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)