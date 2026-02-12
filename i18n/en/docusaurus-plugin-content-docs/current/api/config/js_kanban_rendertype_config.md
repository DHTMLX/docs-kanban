---
sidebar_label: renderType
title: renderType Config
description: You can learn about the renderType config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# renderType

### Description

@short: Optional. Specifies the way cards are rendered.

:::info
This setting is useful when dealing with a large number of cards. When set to *"lazy"*, the widget renders only the cards visible on the board, which can greatly improve performance.
:::

### Usage

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
When using `renderType: "lazy"` together with [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md), make sure to set a fixed height for cards using the [`cardHeight`](api/config/js_kanban_cardheight_config.md) option. Without this, cards may not display properly.
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

**Change log:** This property was introduced in v1.2

**Related articles:** [Configuration](guides/configuration.md#cards)

**Related sample:** [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)