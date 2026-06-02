---
sidebar_label: destructor()
title: destructor Method API
description: Read the destructor method API for DHTMLX Kanban. Learn how to destroy the board and detach all related event listeners.
---

# destructor()

### Description

@short: Removes all HTML elements of Kanban, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// remove Kanban
board.destructor();
~~~
