---
sidebar_label: destructor()
title: Toolbar destructor Method API
description: Read the Toolbar destructor method API for DHTMLX Kanban. Learn how to destroy the Toolbar and detach all related event listeners.
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
