---
sidebar_label: columnKey
title: columnKey Config
description: Explore the columnKey configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# columnKey

### Description

@short: Optional. Specifies which column a card belongs to.

:::info
To organize cards into columns, assign a key (**column** or a *custom* one) to the **ID** of the target column within the card data object. The **columnKey** property in the widget configuration should be set to this key.
:::

### Usage

~~~jsx {}
columnKey?: string;
~~~

### Default config

:::note
If you don’t set a column key using the **columnKey** property, the widget defaults to using the **"column"** key. In that case, the **column** key in the card data object must be set to the appropriate column **ID**.

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