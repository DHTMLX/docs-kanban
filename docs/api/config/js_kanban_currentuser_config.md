---
sidebar_label: currentUser
title: currentUser Config
description: You can learn about the currentUser config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# currentUser

### Description

@short: Optional. Represents the ID of the current user

:::note
The current user ID should match one of the IDs listed in the [`cardShape.users`](/api/config/js_kanban_cardshape_config) property. If this ID isn't provided, comments will be accessible only in read-only mode.
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

**Change log:** This property was introduced in version 1.4

**Related sample:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
