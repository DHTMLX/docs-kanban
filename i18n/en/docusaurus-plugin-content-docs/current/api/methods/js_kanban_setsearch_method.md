---
sidebar_label: setSearch()
title: setSearch Method
description: You can learn about the setSearch method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setSearch()

### Description

@short: Finds cards based on the specified criteria

### Usage

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
This method allows searching for cards using the given parameters. If you call **setSearch()** without any arguments, it will clear the search input and remove any card highlighting.
:::

### Parameters

- `value` - (required) the text to search for  
- `by` - (optional) the card field to perform the search on

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// highlight the cards that match the parameters
board.setSearch({ value: "Integration", by: "label" });
~~~