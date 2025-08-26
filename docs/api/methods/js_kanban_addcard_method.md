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
- `id` - (optional) the identifier for the new card  
- `rowId` - (optional) the ID of the row where the card should be placed  
- `before` - (optional) the ID of the card before which the new card will be inserted  
- `select` - (optional) determines whether the new card will be selected upon addition  
- `card` - (optional) the data object representing the new card  

:::info
A complete list of **card** parameters is available [**here**](/api/config/js_kanban_cards_config)
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
It's also possible to include the card ID inside the **card** object
:::
