---
sidebar_label: currentUser
title: currentUser Config
description: You can learn about the currentUser config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# currentUser

### Description

@short: Optional. An ID of the current user

:::note
The current user ID needs to correspond to one of the IDs specified in the [`cardShape.users`](api/config/js_kanban_cardshape_config.md) property. If you do not specify this ID, the comments will be available only for reading.
:::

### Usage

~~~jsx {}
currentUser?: string | number; 
~~~

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
	cards,
	columns,
	currentUser: 1,
	// other parameters
});
~~~

**Change log:** The property was added in v1.4

**Related sample:** [Kanban. Comments](https://snippet.dhtmlx.com/f9ponfsg?text=#kanban)