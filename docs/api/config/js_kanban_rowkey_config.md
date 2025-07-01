---
sidebar_label: rowKey
title: rowKey Config
description: Explore the rowKey configuration in the DHTMLX JavaScript Kanban library documentation. Find developer guides and API references, experiment with code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# rowKey

### Description

@short: Optional. Specifies how a card is assigned to a row.

:::info
To organize cards into rows (swimlanes), you'll need to define a **custom key** that matches the **ID** of the row in each card's data. Then, set the **rowKey** property in the widget's configuration to this *custom key*.
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
