---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.exec()

### Description

@short: allows triggering the inner events

### Usage

~~~jsx {}
api.exec: (
	event: string,
	config: object
) => void;
~~~

### Parameters

- `event` - (mandatory) an event to be fired 
- `config` - (mandatory) the config object with parameters 

### Event list

- **"add-card"**
- **"add-column"**
- **"add-row"**
- **"delete-card"**
- **"delete-column"**
- **"delete-row"**
- **"move-card"**
- **"unselect-card"**
- **"update-card"**
- **"update-column"**
- **"update-row"**
- **"select-card"**
- **"set-search"**

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// select the card with the 1 ID
board.api.exec("select-card", { id: 1 });
~~~
