---
sidebar_label: renderType
title: renderType Config
description: You can learn about the renderType config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# renderType

### Description

@short: Optional. Defines a type of cards rendering

:::info
This property is used when working with a big number of cards. If set it to *"lazy"*, the widget will render only the visual part of cards you can view on the board. It can significantly enhance the widget performance.
:::

### Usage

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
If you combine the `renderType: "lazy"` and [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) settings, don't forget to specify a static height for cards via the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Unless you specify it, the cards will not be displayed correctly.
When you use `renderType: "lazy"` with [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md), you should also fix the height of cards. Although a variable height of cards is supported for this type of layout, it may not work in a stable manner with custom card content.
:::

### Default config

~~~jsx {}
renderType: "default"
~~~

### Example

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    // other parameters
});
~~~

**Change log:** The property was added in v1.2

**Related articles:** [Configuration](guides/configuration.md#cards)

**Related sample:** [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
