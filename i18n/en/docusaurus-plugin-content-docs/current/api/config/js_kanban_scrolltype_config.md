---
sidebar_label: scrollType
title: scrollType Config
description: You can learn about the scrollType config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# scrollType

### Description

@short: Optional. Specifies the scrolling behavior type

### Usage

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
Using `scrollType: "column"` allows each column to be scrolled independently.
:::

### Default config

~~~jsx {}
scrollType: "default"
~~~

:::important
When combining [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) with `scrollType: "default"`, make sure to set a fixed height for cards using the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Without this, cards won't appear properly.
When you use [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) with `scrollType: "column"`, you should also fix the height of cards using the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Although a variable height of cards is supported for this type of layout, it may not work in a stable manner with custom card content.
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

**Change log:** This property was introduced in v1.2

**Related articles:** [Configuration](guides/configuration.md#cards)

**Related sample:** [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)