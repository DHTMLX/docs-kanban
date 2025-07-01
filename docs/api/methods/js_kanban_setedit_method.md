---
sidebar_label: setEdit()
title: setEdit Method
description: You can learn about the setEdit method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setEdit()

### Description

@short: Switches the Kanban card editor on or off

### Usage

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### Parameters

This method accepts either *null* or an object with the following property:

- `cardId` - (required) the ID of the card you want to edit

:::note
To close the editor, use the **setEdit()** method with a ***null*** argument
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// open the editor for the specified card ID
board.setEdit({ cardId: 1 });
~~~

**Change log:** The method was introduced in v1.2
