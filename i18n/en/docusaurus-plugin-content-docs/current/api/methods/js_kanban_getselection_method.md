---
sidebar_label: getSelection()
title: getSelection Method
description: You can learn about the getSelection method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# getSelection()

### Description

@short: Retrieves an array containing the ID(s) of the currently selected card(s).

### Usage

~~~jsx {}
getSelection(): array;
~~~

### Returns

This method returns an array with the ID(s) of the selected card(s).

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// retrieves an array of IDs for the selected cards
board.getSelection();
~~~