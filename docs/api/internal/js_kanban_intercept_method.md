---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.intercept()

### Description

@short: allows intercepting and preventing the inner events

### Usage

~~~jsx {}
api.intercept: (
	event: string,
	callback: function
) => void;
~~~

### Parameters

- `event` - (mandatory) an event to be fired 
- `callback` - (mandatory) a callback to be performed

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

~~~jsx {7-11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// forbid moving cards to the column with the "done" ID
board.api.intercept("move-card", ({ id, columnId }) => {
	if(columnId! == "done" ){
		return false;
	}
});
~~~
