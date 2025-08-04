---
sidebar_label: columns
title: columns Config
description: You can learn about the columns config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
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

For each column you can specify the following parameters (data):

- `id` - (required) a column **ID**. It is used for managing the column via the corresponding methods 
- `label` - (optional) a column label. It is displayed in the column section
- `collapsed` - (optional) a current state of the column. If ***true***, the column is collapsed initially. Default value is ***false*** (expanded state)
- `limit` - (optional) this parameter may take one of the two types of values:
    - `number` - a limit of cards in the current column
    - `object` - an object with the limits of cards for each row (swimlane) by its ID
- `strictLimit` - (optional) a strict limit mode. If ***true***, a user will not be able to create new cards over the specified number via the **limit** parameter. Default value is ***false*** 
- `css` - (optional) defines css styles for a separate column
- `overlay` - (optional) defines an overlay layer for a separate column. Here you can specify a template that covers a separate column in the following way:

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
    ~~~

:::info
If you want to load new data for columns dynamically, you can use the [`parse()`](../../methods/js_kanban_parse_method) method!
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
            // limit the number of cards for the "Feature" and "Task" rows of the "In progress" column
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

To apply custom styles to columns using the `css` parameter, add CSS rules for your custom class. Make sure your that selector is specific enough to override default styles.

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

If styles are not applied, ensure that:

- Your selector includes enough context (e.g., parent and internal DHTMLX classes)
- You’re not being overridden by inline styles. In such cases, the `!important` may be required (but use it only for overriding inline styles).

**Change log:** The **css** and **overlay** parameters were added in v1.4

**Related article:**
- [Working with data](../../../guides/working_with_data)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**Related samples:**
- [Kanban. Limits for columns and swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Disabling drag and drop to specific columns](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
