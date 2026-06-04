---
sidebar_label: renderType
title: renderType Config API
description: Read the renderType configuration API for DHTMLX Kanban. Learn how to enable lazy rendering and optimize large boards.
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
When you use `renderType: "lazy"` with [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md), you should also fix the height of cards via the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Although a variable height of cards is supported for this type of layout, it may not work in a stable manner with custom card content.

If `cardHeight` is not set, the widget falls back to an experimental approximation of card heights based on [`cardShape`](api/config/js_kanban_cardshape_config.md). For boards with a custom [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md), supply a custom [`getCardHeight`](api/config/js_kanban_getcardheight_config.md) function instead.
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
