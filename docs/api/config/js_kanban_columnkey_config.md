---
sidebar_label: columnKey
title: columnKey Config
description: You can learn about the columnKey config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# columnKey

### Description

@short: defines belonging the card to the column

### Usage

~~~jsx {}
columnKey?: string;
~~~

### Parameters

- `columnKey` - (optional) defines belonging the card to the **column**

:::info
To distribute the cards into columns, you need to specify a **custom key** and set it to the **ID** of the desired column (in the card data object). The **columnKey** property needs to be set to this custom key in the widget config
:::

### Default config

:::note
Unless you specify a column key via the **columnKey** property, the widget will use the **column** key by default! In this case, you need to specify the **column** key to the needed column **ID** in the card data object

~~~jsx {3}
const cards = [
	{
		column: "backlog",
		// other data
	},
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
