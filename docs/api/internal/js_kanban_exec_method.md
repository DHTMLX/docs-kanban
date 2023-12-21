---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.exec()

### Description

@short: Allows triggering the inner events

### Usage

~~~jsx {}
api.exec(
	event: string,
	config: object
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `config` - (required) the config object with parameters (see the event to be fired)

### Events

:::info
The full list of the Kanban internal events can be found [**here**](api/api_overview.md/#kanban-events)
:::

### Example

~~~jsx {7,9-12}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// select the card with the 1 ID
board.api.exec("select-card", { id: 1 });
// add new card without sending changes to the server
board.api.exec("add-card", { 
	columnId: "backlog",
	skipProvider: true, 
});
~~~

**Related sample:** [Kanban. Preserve sorting](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)
