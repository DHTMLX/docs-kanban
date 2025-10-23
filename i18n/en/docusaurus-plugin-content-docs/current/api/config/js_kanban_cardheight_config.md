---
sidebar_label: cardHeight
title: cardHeight Config
description: You can learn about the cardHeight config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardHeight

### Description

@short: Optional. Sets the height of the cards.

### Usage

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
When using [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) together with [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md), it's important to define a fixed height for cards using the `cardHeight` property. Without this, cards won’t be visible.
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

**Change log:** This property was introduced in version 1.2

**Related articles:** [Configuration](guides/configuration.md#cards)

**Related sample:** [Kanban. Lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)