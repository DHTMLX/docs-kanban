---
sidebar_label: set-edit
title: set-edit Event
description: You can learn about the set-edit event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# set-edit

### Description

@short: Fires when toggling an editor

### Usage

~~~jsx {}
"set-edit": ({ cardId: string | number } | null) => void;
~~~

### Parameters

The callback of the **set-edit** event can take the *null* value or an object with the following parameter:

- `cardId` - (required) the ID of the card to be edited

:::note
The ***null*** value is used when closing editor
:::

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
// subscribe on the "set-edit" event
board.api.on("set-edit", (obj) => {
	console.log(obj);
});
~~~

**Change log:** The event was added in v1.2