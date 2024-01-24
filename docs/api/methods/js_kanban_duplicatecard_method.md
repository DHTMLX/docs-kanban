---
sidebar_label: duplicateCard()
title: duplicateCard Method
description: You can learn about the duplicateCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# duplicateCard()

### Description

@short: Duplicates a card by the specified ID

### Usage

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object
}): void;
~~~

### Parameters

- `id` -  (required) the ID of the card to be duplicared
- `card` - (optional) the data object of the new card. The full list of the card parameters can be found [**here**](api/config/js_kanban_cards_config.md)

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// duplicate a card with the 1 ID
board.duplicateCard({
    id: 1,
    card: { label: "Duplicated card" }
});
~~~

**Change log:** The method was added in v1.3