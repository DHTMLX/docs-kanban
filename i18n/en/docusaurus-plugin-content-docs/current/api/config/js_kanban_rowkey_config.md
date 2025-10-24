---
sidebar_label: rowKey
title: rowKey Config
description: You can learn about the rowKey config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rowKey

### Description

@short: Optional. Specifies which row a card belongs to.

:::info
To organize cards into rows (swimlanes), you need to define a **custom key** in the card data object that matches the **ID** of the target row. Then, set the **rowKey** property in the widget configuration to this *custom key*.
:::

### Usage

~~~jsx {}
rowKey?: string;
~~~  

### Example

~~~jsx {4,8,16}
const cards = [
    {
        label: "Backlog task",
        row_custom_key: "feature"
    },
    {
        label: "In progress task",
        row_custom_key: "done"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    rowKey: "row_custom_key",
    // other parameters
});
~~~

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)