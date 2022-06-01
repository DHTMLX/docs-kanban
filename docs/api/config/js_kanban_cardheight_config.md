---
sidebar_label: cardHeight
title: cardHeight Config
description: You can learn about the cardHeight config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardHeight

### Description

@short: Optional. A height of cards

### Usage

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
If you combine the [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) and [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) settings, don't forget to specify a static height for cards via the `cardHeight` property. Unless you specify it, the cards will not be displayed.
:::

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
	cards,
	columns,
	cardHeight: 150, // px
	// other parameters
});
~~~

**Change log:** The property was added in v1.2

**Related articles:** [Configuration](../../../guides/configuration#cards)
