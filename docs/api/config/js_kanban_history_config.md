---
sidebar_label: history
title: history Config
description: You can learn about the history config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# history

### Description

@short: Optional. Enables/disables managing history

:::info
Using the `history` property you can enable/disable managing history of Kanban. If you set it to **false**, you will not be able to manage history via the API and controls on Toolbar.
:::

### Usage

~~~jsx {}
history?: boolean; 
~~~

### Default config

~~~jsx {}
history: true
~~~

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
	columns,
	cards,
	history: false, // disable managing history
	// other parameters
});
~~~

**Change log:** The property was added in v1.3
