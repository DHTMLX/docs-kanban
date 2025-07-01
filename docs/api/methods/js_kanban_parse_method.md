---
sidebar_label: parse()
title: parse Method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# parse()

### Description

@short: Loads data into the Kanban board

### Usage

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array
}): void;
~~~

### Parameters

- [`columns`](/api/config/js_kanban_columns_config.md) - (optional) an array containing column data objects
- [`rows`](/api/config/js_kanban_rows_config.md) - (optional) an array containing row data objects
- [`cards`](/api/config/js_kanban_cards_config.md) - (optional) an array containing card data objects

### Example

~~~jsx {4-8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// load data into Kanban
board.parse({
    columns,
    cards,
    rows
});
~~~

**Change log:** Starting from v1.1, it's no longer necessary to reset the initial data in the constructor before parsing new data

**Related articles:** [Working with Data](/guides/working_with_data#loading-data-from-local-source)
