---
sidebar_label: addCard()
title: addCard Method
description: You can learn about the addCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addCard()

### Description

@short: Inserts a new card into the Kanban board

### Usage

~~~jsx {}
addCard({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object
}): void;
~~~

### Parameters

- `columnId` - (required) the ID of the column where the card will be added  
- `id` -  (optional) the ID to assign to the new card  
- `rowId` - (optional) the ID of the row where the card should be placed  
- `before` - (optional) the ID of an existing card that the new card will be inserted before  
- `select` - (optional) whether the newly added card should be selected  
- `card` - (optional) the data object defining the new card

:::info
You can find the complete list of **card** parameters [**here**](api/config/js_kanban_cards_config.md)
:::

### Example

~~~jsx {7-12}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// add new card into the "backlog" column
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});
~~~

:::tip
The ID of the new card can also be specified inside the **card** object
:::