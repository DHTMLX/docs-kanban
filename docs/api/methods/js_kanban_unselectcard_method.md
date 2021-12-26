---
sidebar_label: unselectCard()
title: unselectCard Method
description: You can learn about the unselectCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# unselectCard()

### Description

@short: unselects card(s) by its ID

### Usage

~~~jsx {}
unselectCard: ({ id: string | number }) => void;
~~~

:::info
To unselect all cards, call the **unselectCard()** method without parameters
:::

### Parameters

- `id` - (mandatory) the **ID** of the card to be unselected 

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
