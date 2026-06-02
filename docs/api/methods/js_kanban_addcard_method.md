---
sidebar_label: addCard()
title: addCard Method API
description: Read the addCard method API for DHTMLX Kanban. Learn how to add a new card to the board.
---

# addCard()

### Description

@short: Adds a new card into Kanban

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

- `columnId` - (required) the ID of the target column 
- `id` -  (optional) the ID of the new card
- `rowId` - (optional) the ID of the target row
- `before` - (optional) the ID of the card, before which the new card will be placed  
- `select` - (optional) enables/disables selecting new added card
- `card` - (optional) the data object of the new card

:::info
The full list of the **card** parameters can be found [**here**](api/config/js_kanban_cards_config.md)
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
You can also specify the ID of the new card in the **card** object
:::
