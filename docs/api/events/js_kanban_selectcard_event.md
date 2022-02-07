---
sidebar_label: select-card
title: select-card Event
description: You can learn about the select-card event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# select-card

### Description

@short: Fires when selecting a card

### Usage

~~~jsx {}
"select-card": ({
	id: string | number,
    groupMode?: boolean
}) => void;
~~~

### Parameters

The callback of the **select-card** event can take an object with the following parameters:

- `id` - (required) the ID of the selected card
- `groupMode` - (optional) multiselecting (false by default)

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
// subscribe on the "select-card" event
board.api.on("select-card", (obj) => {
	console.log(obj.id);
});
~~~
