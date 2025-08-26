---
sidebar_label: api
title: api Config
description: Explore the (Toolbar) api config in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code examples, live demos, and a free 30-day trial of DHTMLX Kanban.
---

# api

### Description

@short: Required. An object representing Kanban's internal API

:::info
Here, the **internal API of Kanban** refers to the **controls** found on the Toolbar.
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

**Related articles:** [Configuration](/guides/configuration/#toolbar)

**Related sample:** [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
