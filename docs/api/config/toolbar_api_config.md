---
sidebar_label: api
title: Toolbar api Config API
description: Read the Toolbar api configuration API for DHTMLX Kanban. Learn how to connect the Toolbar to the internal Kanban API.
---

# api

### Description

@short: Required. An object with the internal API of Kanban

:::info
In this case, the **internal API of Kanban** is used for **controls** located on Toolbar
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
