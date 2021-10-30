---
sidebar_label: rowKey
title: JS Kanban rowKey property
description: You can learn about the rowKey property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# rowKey

### Description

Defines belonging the card to the **row**

### Usage

```js
rowKey?: string
```  

:::info
To distribute the cards into rows, you need to specify a **custom key** and set it to the ID of the desired row (in the card data object). The **rowKey** property needs to be set to this custom key in the widget config.
:::

### Example

```jsx {15}
const cards = [
	{
		label: "Backlog task",
		custom_key: "feature"
	},
	{
		label: "In progress task",
		custom_key: "done"
	}
];

new kanban.Kanban("#root", {
	...,
	cards,
	rowKey: "custom_key"
});
```
