---
sidebar_label: columnKey
title: columnKey Config API
description: Read the columnKey configuration API for DHTMLX Kanban. Learn how to bind cards to columns by a custom data key.
---

# columnKey

### Description

@short: Optional. Defines belonging the card to the column

:::info
To distribute the cards into columns, you need to specify a key (**column** or *custom* one) and set it to the **ID** of the desired column in the card data object. The **columnKey** property needs to be set to this key in the widget configuration object
:::

### Usage

~~~jsx {}
columnKey?: string;
~~~

### Default config

:::note
Unless you register a column key via the **columnKey** property, the widget will use the **"column"** key by default! In this case, you need to set the **column** key to the needed column **ID** in the card data object

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
