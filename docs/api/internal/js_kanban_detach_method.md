---
sidebar_label: api.detach()
title: detach Method
description: You can learn about the detach method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.detach()

## Description

@short: Allows removing/detaching an event listener

## Usage

~~~jsx
api.detach(tag: number | string | symbol ): void;
~~~

## Parameters

- `tag` - the tag used to identify an event handler during its creation

### Example

~~~jsx {11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

board.api.on("move-card", ({ id, columnId }) => {
    console.log("Move the card");
}, { tag: "move" });

board.api.detach("move");
~~~

**Change log**: The internal method was added in v1.7
