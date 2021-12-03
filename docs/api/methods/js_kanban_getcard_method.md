---
sidebar_label: getCard()
title: getCard Method
description: You can learn about the getCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getCard()

### Description

Gets a data object of the card by the specified ID

### Usage

~~~jsx {}
getCard: (id: string | number) => object;
~~~

### Parameters

- `id: string | number` - the **ID** of the target card (*mandatory*)

### Returns

The method returns the data object of the card with the specified ID

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// get the data object of the card with the 1 ID
board.getCard(1);
~~~
