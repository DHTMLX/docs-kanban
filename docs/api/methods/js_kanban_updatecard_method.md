---
sidebar_label: updateCard()
title: updateCard Method
description: You can learn about the updateCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateCard()

### Description

Updates the card data by its ID

### Usage

~~~jsx {}
updateCard: (config: object) => void;
~~~

### Parameters

- `config: object` - the new data object of the current card (*mandatory*)

:::info
Note, the **ID** of the card to be updated is required. Other card parameters can be found [**here**](../config/js_kanban_cards_config.md).
:::

### Example

~~~jsx {7-13}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// update data of the card with the 1 ID
board.updateCard({
	id: 1,
	label: "New Label",
	type: "feature",
	stage: "inprogress",
	/*other parameters*/
});
~~~
