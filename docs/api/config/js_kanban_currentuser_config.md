---
sidebar_label: currentUser
title: currentUser Config API
description: Read the currentUser configuration API for DHTMLX Kanban. Learn how to set active users for comments, votes, and collaboration.
---

# currentUser

### Description

@short: Optional. An ID of the current user

:::note
The current user ID needs to correspond to one of the IDs specified in the [`cardShape.users`](api/config/js_kanban_cardshape_config.md) property. If you do not specify this ID, the comments will be available only for reading.
:::

### Usage

~~~jsx {}
currentUser?: string | number; 
~~~

### Example

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    currentUser: 1,
    // other parameters
});
~~~

**Change log:** The property was added in v1.4

**Related sample:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
