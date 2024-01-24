---
sidebar_label: selectCard()
title: selectCard Method
description: You can learn about the selectCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# selectCard()

### Description

@short: Selects a card by the specified ID

### Usage

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the selected card 
- `groupMode` - (optional) enables/disables multiselecting of cards (**false** by default)

:::info
If you set the **groupMode** parameter to **true**, the **selectCard()** method will not reset selecting of the other elements
:::

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// select the card with the 1 ID
board.selectCard({
    id: 1,
    groupMode: true
});
~~~
