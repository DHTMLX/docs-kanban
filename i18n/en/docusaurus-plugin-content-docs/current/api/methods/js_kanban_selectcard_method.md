---
sidebar_label: selectCard()
title: selectCard Method
description: You can learn about the selectCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# selectCard()

### Description

@short: Highlights a card using the given ID.

### Usage

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the card to be selected 
- `groupMode` - (optional) turns on or off the ability to select multiple cards at once (**false** by default)

:::info
When **groupMode** is set to **true**, calling **selectCard()** won’t clear the selection of other cards
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