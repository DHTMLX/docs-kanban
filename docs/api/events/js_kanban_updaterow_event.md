---
sidebar_label: update-row
title: update-row Event
description: You can learn about the update-row event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# update-row

### Description

@short: Fires when updating row data

### Usage

~~~jsx {}
"update-row": ({
	id: string | number,
	row?: object,
	replace?: boolean,
	skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback of the **update-row** event can take an object with the following parameters:

- `id` - (required) the ID of the row to be updated
- `row` - (optional) the new data object of the row. The full list of the **row** parameters can be found [**here**](api/config/js_kanban_rows_config.md)
- `replace` - (optional) enables/disables fully data replacing

	:::note
	If you set the `replace` parameter to *true*, the old data will be fully replaced by the new ones. Otherwise, the method will update only the values you passed.
	:::

- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

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
// subscribe on the "update-row" event
board.api.on("update-row", (obj) => {
	console.log(obj);
});
~~~

**Change log**:
- The **id** and **row** parameters were added in v1.1
- The **replace** parameter was added in v1.3