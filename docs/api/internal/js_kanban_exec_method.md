---
sidebar_label: api.exec()
title: exec Method API
description: Read the exec method API for DHTMLX Kanban. Learn how to trigger board actions and internal events programmatically.
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
The full list of the Kanban internal events can be found [**here**](api/overview/main_overview.md/#kanban-events)
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
