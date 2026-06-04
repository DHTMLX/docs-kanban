---
sidebar_label: parse()
title: parse Method API
description: Read the parse method API for DHTMLX Kanban. Learn how to load cards, columns, rows, and board data from JSON.
---

# parse()

### Description

@short: Parses data into Kanban

The `parse()` method is an alias for [`setConfig()`](/api/methods/js_kanban_setconfig_method) restricted to data-related properties (`cards`, `columns`, `rows`, `links`). Both methods perform the same operation under the hood for these properties.

:::tip Prefer setConfig()
Use the [`setConfig()`](/api/methods/js_kanban_setconfig_method) method that accepts the same data properties **plus** other Kanban configuration option. Call `setConfig()` once for all props instead of calling `parse()` for data and `setConfig()` for the other props (such as [`columnKey`](api/config/js_kanban_columnkey_config.md), [`rowKey`](api/config/js_kanban_rowkey_config.md), [`cardShape`](api/config/js_kanban_cardshape_config.md)):

~~~js
// instead of two calls
kanban.setConfig({ columnKey: "type" });
kanban.parse({ columns });

// use one
kanban.setConfig({
    columnKey: "type",
    columns
});
~~~
:::

### Usage

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array,
    links?: array
}): void;
~~~

### Parameters

- [`columns`](api/config/js_kanban_columns_config.md) - (optional) the array of objects of the columns data
- [`rows`](api/config/js_kanban_rows_config.md) - (optional) the array of objects of the rows data
- [`cards`](api/config/js_kanban_cards_config.md) - (optional) the array of objects of the cards data
- [`links`](api/config/js_kanban_links_config.md) - (optional) the array of objects of the links data

### Example

~~~jsx {4-9}
// create Kanban
const board = new kanban.Kanban("#root", {});
// parse data into Kanban
board.parse({
    columns,
    cards,
    rows,
    links
});

// equivalent call via setConfig()
// board.setConfig({ columns, cards, rows, links });
~~~

**Change log:** Starting from v1.1 you don't need to reset initial data in constructor before parsing new data

**Related articles:** [Working with Data](guides/working_with_data.md#load-data-from-a-local-source)
