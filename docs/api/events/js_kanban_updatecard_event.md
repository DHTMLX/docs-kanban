---
sidebar_label: update-card
title: update-card Event
description: You can learn about the update-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-card

### Description

@short: fires when updating a card data

### Usage

~~~jsx {}
"update-card": (config: object) => void;
~~~

### Parameters

The callback of the **update-card** event can take an object with the following parameters:

- `config` - (mandatory) the new data object of the current card. The full list of the card parameters can be found [here](api/config/js_kanban_cards_config.md)

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// subscribe on the "update-card" event
board.api.on("update-card", (obj) => {
	console.log(obj);
});
~~~
