---
sidebar_label: add-row
title: add-row Event
description: You can learn about the add-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-row

### Description

@short: Fires when adding a new row

### Usage

~~~jsx {}
"add-row": ({
    id?: string | number,
    label?: string,
    collapsed?: boolean
}) => void;
~~~

### Parameters

The callback of the **add-row** event can take an object with the following parameters:

- `id` - (optional) the ID of the new row
- `label` - (optional) the label of the new row
- `collapsed` - (optional) the state of the new row

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
// subscribe on the "add-row" event 
board.api.on("add-row", (obj) => {
	console.log(obj.id);
});
~~~
