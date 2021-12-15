---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.on()

### Description

Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.on(
	event: string,
	handler: function
) => void;
~~~

### Parameters

- `event: string` -  an event to be fired (*mandatory*)
- `handler: function` - a handler to be attached (*mandatory*)

### Event list

- ***"add-card"***
- ***"add-column"***
- ***"add-row"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-row"***
- ***"move-card"***
- ***"unselect-card"***
- ***"update-card"***
- ***"update-column"***
- ***"update-row"***
- ***"select-card"***
- ***"set-search"***

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// output the card data in console when its moving
board.api.on("move-card", ({ id, columnId }) => {
	console.log({ id, columnId });
});
~~~
