---
sidebar_label: selectCard()
title: selectCard Method API
description: Read the selectCard method API for DHTMLX Kanban. Learn how to select a card by its ID.
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
