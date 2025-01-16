---
sidebar_label: setEdit()
title: setEdit Method
description: You can learn about the setEdit method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setEdit()

### Description

@short: Toggles an editor of Kanban

### Usage

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### Parameters

The method can take a *null* value or an object with the following parameter:

- `cardId` - (required) the ID of the card to be edited

:::note
To close an editor, call the **setEdit()** method with the ***null*** value
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// open an editor for the card by its ID
board.setEdit({ cardId: 1 });
~~~

**Change log:** The method was added in v1.2
