---
sidebar_label: deleteLink()
title: deleteLink Method API
description: Read the deleteLink method API for DHTMLX Kanban. Learn how to remove a link from the board by its ID.
---

# deleteLink()

### Description

@short: Removes the specified link from datastore of Kanban

### Usage

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the link to be deleted

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// remove link by its id
board.deleteLink({ id: 5 });
~~~

**Change log:** The method was added in v1.5
