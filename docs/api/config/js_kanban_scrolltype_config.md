---
sidebar_label: scrollType
title: scrollType Config
description: You can learn about the scrollType config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# scrollType

### Description

@short: Optional. Defines a type of scrolling

### Usage

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
If you use the `scrollType: "column"` setting, you will be able to scroll each column separately.
:::

### Default config

~~~jsx {}
scrollType: "default"
~~~

:::important
If you combine the [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) and `scrollType: "default"` settings, don't forget to specify a static height for cards via the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Unless you specify it, the cards will not be displayed.
:::

### Example

~~~jsx {5}
new kanban.Kanban("#root", {
	columns,
	cards,
	rows,
	scrollType: "column",
	// other parameters
});
~~~

**Change log:** The property was added in v1.2

**Related articles:** [Configuration](../../../guides/configuration#cards)

**Related sample:** [Kanban. Lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)