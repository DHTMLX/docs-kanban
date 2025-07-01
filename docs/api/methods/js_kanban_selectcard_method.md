---
sidebar_label: selectCard()
title: selectCard Method
description: You can learn about the selectCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# selectCard()

### Description

@short: Highlights a card based on the given ID.

### Usage

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the card to be selected 
- `groupMode` - (optional) toggles the ability to select multiple cards at once (defaults to **false**)

:::info
When **groupMode** is set to **true**, the **selectCard()** method keeps the current selection intact while adding the new card to the selection.
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
