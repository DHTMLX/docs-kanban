---
sidebar_label: api
title: api Config
description: You can learn about the (Toolbar) api config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# api

### Description

@short: Required. An object with the internal API of Kanban

:::info
In this case, the **internal API of Kanban** is used for **controls** located on the external editor
:::

### Usage

~~~jsx {}
api: object;
~~~

:::info
If you want to use the **external editor**, don't foget to disable the built-in one!
:::

### Example

~~~jsx {5-7,11}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	editor: {
        show: false // hide the built-in editor 
    }
});
// create external editor
new kanban.Editor("#editor", {
	api: board.api
});
~~~

**Change log:** The property was added in v1.4

**Related articles:** [Configuring an external editor](../../../guides/configuration/#configuring-an-external-editor)