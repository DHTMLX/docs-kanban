---
sidebar_label: getSelection()
title: getSelection Method API
description: Read the getSelection method API for DHTMLX Kanban. Learn how to get the IDs of the currently selected cards.
---

# getSelection()

### Description

@short: Gets an array with ID(s) of the selected card(s)

### Usage

~~~jsx {}
getSelection(): array;
~~~

### Returns

The method returns an array with ID(s) of the selected card(s)

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// gets an array with IDs of the selected cards
board.getSelection();
~~~
