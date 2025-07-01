---
sidebar_label: deleteLink()
title: deleteLink Method
description: You can learn about the deleteLink method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteLink()

### Description

@short: Deletes the specified link from the Kanban datastore.

### Usage

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) the ID of the link that needs to be removed

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
