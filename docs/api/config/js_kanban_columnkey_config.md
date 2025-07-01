---
sidebar_label: columnKey
title: columnKey Config
description: Explore the columnKey configuration in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# columnKey

### Description

@short: Optional. Specifies which column a card belongs to.

:::info
To assign cards to specific columns, it's necessary to use a key (**column** or a *custom* one) and set it to the corresponding column's **ID** within the card data object. The **columnKey** property should be set to this key in the widget's configuration.
:::

### Usage

~~~jsx {}
columnKey?: string;
~~~

### Default config

:::note
If you don't provide a custom column key using the **columnKey** property, the widget defaults to using the **"column"** key! In this scenario, the card data object should have the **column** key set to the appropriate column **ID**.

~~~jsx {3}
const cards = [
    {
        column: "backlog",
        // other data
    }
];
~~~
:::

### Example

~~~jsx {4,8,15}
const cards = [
    {
        label: "Backlog task",
        column_custom_key: "backlog"
    },
    {
        label: "In progress task",
        column_custom_key: "inprogress"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    columnKey: "column_custom_key",
    // other parameters
});
~~~
