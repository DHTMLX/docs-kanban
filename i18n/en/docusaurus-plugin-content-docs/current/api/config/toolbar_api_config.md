---
sidebar_label: api
title: api Config
description: Explore the (Toolbar) api config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# api

### Description

@short: Required. An object representing the internal API of Kanban.

:::info
Here, the **internal API of Kanban** refers to the **controls** that are part of the Toolbar.
:::

### Usage

~~~jsx {}
api: object;
~~~

### Example

~~~jsx {7}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

**Related articles:** [Configuration](guides/configuration.md#toolbar)

**Related sample:** [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)