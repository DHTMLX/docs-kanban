---
sidebar_label: select-card
title: select-card Event API
description: Read the select-card event API for DHTMLX Kanban. Learn how to handle the event triggered when selecting a card.
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
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
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
