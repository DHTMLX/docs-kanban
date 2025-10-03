---
sidebar_label: parse()
title: parse Method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# parse()

### Description

@short: Parses data into Kanban

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
~~~

**Change log:** Starting from v1.1 you don't need to reset initial data in constructor before parsing new data

**Related articles:** [Working with Data](../../../guides/working_with_data#loading-data-from-local-source)
