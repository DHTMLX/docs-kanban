---
sidebar_label: (Toolbar) items
title: items Config
description: You can learn about the items config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# (Toolbar) items

### Description

@short: Optional. An array of controls arranged in the toolbar of Kanban

### Usage

~~~jsx {}
items?: [
	"search",
	"controls",
	custom_control // string or function
];
~~~

### Parameters

In the **items** array you can specify the following parameters:

- `"search"` - (optional) a search bar
- `"controls"` - (optional) controls for adding the columns and rows
- `custom_control` - (optional) custom control. Here you can specify the custom control(s) both as a **string** or **function**. See the [Customization](../../../guides/customization#custom-toolbar) section

### Example

~~~jsx {9-12}
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});

new kanban.Toolbar("#toolbar", {
	api: board.api,
	items: [
		"search",
		"controls"
	]
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#toolbar) and [Customization](../../../guides/customization#custom-toolbar)
