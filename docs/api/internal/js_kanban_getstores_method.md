---
sidebar_label: api.getStores()
title: getStores Method API
description: Read the getStores method API for DHTMLX Kanban. Learn how to get an object with the board DataStore properties.
---

# api.getStores()

### Description

@short: Gets an object with the DataStore properties of Kanban

### Usage

~~~jsx {}
api.getStores(): object;
~~~

### Returns

The method returns an object with the **DataStore** parameters:

~~~jsx {}
{
    data: DataStore // ( object of parameters )
}
~~~

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// get the DataStore object of Kanban
const store = board.api.getStores();
console.log(store);
~~~

**Change log:** The method was updated in v1.2
