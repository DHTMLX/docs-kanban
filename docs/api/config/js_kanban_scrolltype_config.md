---
sidebar_label: scrollType
title: scrollType Config
description: Explore the scrollType config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code examples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# scrollType

### Description

@short: Optional. Specifies how scrolling behaves.

### Usage

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
When `scrollType` is set to `"column"`, each column can be scrolled independently.
:::

### Default config

~~~jsx {}
scrollType: "default"
~~~

:::important
If you use [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config) together with `scrollType: "default"`, make sure to set a fixed card height using the [`cardHeight`](/api/config/js_kanban_cardheight_config) property. Without this, cards won't appear.
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

**Related articles:** [Configuration](/guides/configuration/#cards)

**Related sample:** [Kanban. Fixed headers, lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
