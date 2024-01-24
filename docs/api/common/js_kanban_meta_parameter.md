---
sidebar_label: $meta
title: $meta parameter
description: You can learn about the $meta parameter in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# $meta

### Description

@short: An object of extra settings for configuring methods and events of Kanban

:::important
The `$meta` object includes an extra set of parameters used for configuring methods based on the events of Kanban!
:::

### Usage

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### Parameters

The `$meta` object includs the following parameter:

- `skipHistory` - (optional) enables/disables skipping the operations in a history of Kanban

### Example

~~~jsx {11-13}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// add new card and skip this action in history of Kanban
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**Change log:** The `$meta` parameter was added in v1.3

**Related article:** [`history`](api/config/js_kanban_history_config.md)