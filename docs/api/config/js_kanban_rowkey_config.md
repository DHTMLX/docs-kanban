---
sidebar_label: rowKey
title: rowKey Config
description: You can learn about the rowKey config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rowKey

### Description

@short: Optional. Defines belonging the card to the row

:::info
To distribute the cards into rows (swimlanes), you need to specify a **custom key** and set it to the **ID** of the desired row in the card data object. The **rowKey** property needs to be set to this *custom key* in the widget configuration object
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

**Related sample:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?mode=wide)