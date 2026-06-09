---
sidebar_label: unselectCard()
title: unselectCard Method API
description: Read the unselectCard method API for DHTMLX Kanban. Learn how to unselect cards by their IDs.
---

# unselectCard()

### Description

@short: Unselects card(s) by its ID

### Usage

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
To unselect all cards, call the **unselectCard()** method without parameters
:::

### Parameters

- `id` - (required) the ID of the card to be unselected 

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// unselect the card with the 1 ID
board.unselectCard({ id: 1 });
~~~
