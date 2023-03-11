---
sidebar_label: add-link
title: add-link Event
description: You can learn about the add-link event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-link

### Description

@short: Fires when adding a new link

### Usage

~~~jsx {}
"add-link": ({
	id?: string | number,
	link: object,
}) => void;
~~~

### Parameters

The callback of the **add-link** event can take an object with the following parameters:

- `id` - (optional) the ID of the new link
- `link` - (required) the data object of the new link. The full list of the link parameters can be found [here](api/config/js_kanban_links_config.md)

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	links
});
// subscribe on the "add-link" event
board.api.on("add-link", (obj) => {
	console.log(obj.link.masterId);
});
~~~

**Change log:** The event was added in v1.4
