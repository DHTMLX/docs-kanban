---
sidebar_label: duplicateCard()
title: duplicateCard Method
description: You can learn about the duplicateCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# duplicateCard()

### Description

@short: Creates a duplicate of a card based on the given ID

### Usage

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object,
    select?: boolean
}): void;
~~~

### Parameters

- `id` -  (required) the ID of the card to be duplicated
- `card` - (optional) the data object for the new card. You can find the full list of card parameters [**here**](/api/config/js_kanban_cards_config.md)
- `select` - (optional) determines whether the newly added card will be selected

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
    card: { label: "Duplicated card" },
    select: true
});
~~~

**Change log:** The `select` parameter was added in v1.5.10
