---
sidebar_label: addLink()
title: addLink Method
description: You can learn about the addLink method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addLink()

### Description

@short: Inserts a new link into the Kanban board.

### Usage

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Parameters

- `id` - (optional) the identifier for the new link
- `link` - (required) the data object representing the new link. The complete list of link parameters is available [here](/api/config/js_kanban_links_config)

### Example

~~~jsx {7-14}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// add new link 
board.addLink({
    id: 3,
    link: {
        masterId: 4,
        slaveId: 6,
        relation: "relatesTo",
    }
});
~~~

**Change log:** This method was introduced in v1.5
