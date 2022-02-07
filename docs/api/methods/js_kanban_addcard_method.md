---
sidebar_label: addCard()
title: addCard Method
description: You can learn about the addCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
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
	card?: object
}): void;
~~~

### Parameters

- <code title = "string | number" >columnId</code> - (required) the ID of the target column 
- <code title = "string | number" >id</code> -  (optional) the ID of the new card
- <code title = "string | number" >rowId</code> - (optional) the ID of the target row
- <code title = "string | number" >before</code> - (optional) the ID of the card, before which the new card will be placed  
- <code title = "object" >card</code> - (optional) the data object of the new card. 

:::tip
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
