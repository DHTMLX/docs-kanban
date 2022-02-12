---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Migration to newer versions

## 1.0 -> 1.1

### Api

The [`columns`](../../api/config/js_kanban_columns_config) property was extended by the new parameters. Starting from v1.1, you can use the ***collapsed, limit*** and ***strictLimit*** configurations.

~~~jsx title="Before v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="From v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true 
    }, ...
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // other parameters
});
~~~
