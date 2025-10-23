---
sidebar_label: currentUser
title: currentUser Config
description: Explore the currentUser configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try live demos and code samples, and download a free 30-day trial of DHTMLX Kanban.
---

# currentUser

### Description

@short: Optional. Specifies the ID of the current user.

:::note
The current user ID should match one of the IDs listed in the [`cardShape.users`](api/config/js_kanban_cardshape_config.md) property. If this ID is not set, comments will be available in read-only mode.
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

**Change log:** This property was introduced in v1.4

**Related sample:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)