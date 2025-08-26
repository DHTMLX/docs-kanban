---
sidebar_label: updateColumn()
title: updateColumn Method
description: Explore the updateColumn method in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code examples, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# updateColumn()

### Description

@short: Modifies the data of a column using its ID

### Usage

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) specifies the ID of the column you want to update
- `column` - (optional) an object containing the new data for the column. You can find the complete list of **column** parameters [**here**](/api/config/js_kanban_columns_config)
- `replace` - (optional) determines whether to completely replace the existing data

:::note
When `replace` is set to *true*, the existing data will be fully replaced by the new data. If not, only the provided values will be updated.
:::

### Example

~~~jsx {7-16}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// update column data with the "backlog" ID
board.updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**Change log**:
- The **id** and **column** parameters were introduced in v1.1
- The **replace** parameter was added in v1.3
