---
sidebar_label: unselectCard()
title: unselectCard Method
description: You can learn about the unselectCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# unselectCard()

### Description

@short: Deselects the card(s) identified by their ID.

### Usage

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
Calling **unselectCard()** without any arguments will clear the selection from all cards.
:::

### Parameters

- `id` - (required) the unique identifier of the card to be deselected.

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// deselect the card with ID 1
board.unselectCard({ id: 1 });
~~~
