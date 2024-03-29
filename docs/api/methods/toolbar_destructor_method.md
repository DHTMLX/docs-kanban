---
sidebar_label: destructor()
title: destructor Method
description: You can learn about the destructor method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# destructor()

### Description

@short: Removes all HTML elements of Toolbar, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {6}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// remove Toolbar
toolbar.destructor();
~~~
