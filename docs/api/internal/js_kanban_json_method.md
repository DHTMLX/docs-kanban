---
sidebar_label: export.json()
title: json Method API
description: Read the json method API for DHTMLX Kanban. Learn how to export board data and work with JSON task structures.
---

# export.json()

### Description

@short: Exports Kanban data into a JSON file

### Usage

~~~jsx {}
export.json(): void;
~~~

:::info
The method exports data of Kanban to a JSON file with the following structure:
~~~jsx {}
{
    "cards": [],
    "columns": [],
    "rows": []
}
~~~
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// export the Kanban data to JSON ()
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**Change log:** The method was added in v1.3
