---
sidebar_label: api.getStores()
title: getStores Method
description: You can learn about the getStores method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api.getStores()

### Description

@short: Retrieves an object containing the DataStore properties of the Kanban.

### Usage

~~~jsx {}
api.getStores(): object;
~~~

### Returns

This method returns an object that includes the **DataStore** parameters:

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