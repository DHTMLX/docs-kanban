---
sidebar_label: renderType
title: renderType Config
description: You can learn about the renderType config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# renderType

### Description

@short: Optional. Specifies the way cards are rendered.

:::info
This setting is useful when handling a large number of cards. Setting it to *"lazy"* makes the widget render only the cards that are currently visible on the board, which can greatly improve performance.
:::

### Usage

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
When using `renderType: "lazy"` together with [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config), make sure to set a fixed height for cards using the [`cardHeight`](/api/config/js_kanban_cardheight_config) property. Without this, cards may not display properly.
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

**Related articles:** [Configuration](/guides/configuration/#cards)

**Related sample:** [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
