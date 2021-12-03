---
sidebar_label: (Toolbar) api
title: api Config
description: You can learn about the api config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# (Toolbar) api

### Description

An object with the internal API of Kanban. It is used for the toolbar controls functionality. *This parameter is mandatory!*

### Usage

~~~jsx {}
api: object
~~~

:::info
In this case, the **internal API of Kanban** is used for the *search bar* and *controls for adding columns and rows* located on the Toolbar
:::

### Example

~~~jsx {8}
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	rows
});

new kanban.Toolbar("#toolbar", {
	api: board.api
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#toolbar)
