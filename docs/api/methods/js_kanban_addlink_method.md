---
sidebar_label: addLink()
title: addLink Method API
description: Read the addLink method API for DHTMLX Kanban. Learn how to add a new link between cards.
---

# addLink()

### Description

@short: Adds a new link into Kanban

### Usage

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the new link
- `link` - (required) the data object of the new link. The full list of the link parameters can be found [here](api/config/js_kanban_links_config.md)

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
        source: 4,
        target: 6,
        relation: "relatesTo",
    }
});
~~~

**Change log:** The method was added in v1.5
