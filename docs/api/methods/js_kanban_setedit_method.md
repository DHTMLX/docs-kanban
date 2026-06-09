---
sidebar_label: setEdit()
title: setEdit Method API
description: Read the setEdit method API for DHTMLX Kanban. Learn how to toggle the card editor.
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
