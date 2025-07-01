---
sidebar_label: links
title: links Config
description: Explore the links config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# links

### Description

@short: Optional. This is an array of objects that holds the links data.

### Usage

~~~jsx {}
links?: [
    {
        id: string | number,
        masterId: string | number,
        slaveId: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // other links data
];
~~~

### Parameters

Each link includes the following data fields:

- `id` - (required) the unique ID for the link
- `masterId` - (required) the card ID representing the dominant role in the link (e.g. "Is required for")
- `slaveId` - (required) the card ID representing the passive role in the link (e.g. "Depends on")
- `relation` - (required) the type of link. The available types are:
  - ***"relatesTo"*** - indicates a dependency where the current task is connected to another one
  - ***"requiredFor"*** - shows a dependency where one task needs the other to be completed first
  - ***"duplicate"*** - marks a dependency between duplicated tasks
  - ***"parent"*** - sets a dependency between a parent (master) task and its child (slave) task

:::info
To dynamically load new links data, you can use the [**parse()**](../../methods/js_kanban_parse_method) method!
:::

### Example

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        masterId: 2,
        slaveId: 5,
        relation: "relatesTo",
    }, {...} // other link data
];

new kanban.Kanban("#root", {
   columns,
   cards,
   links
   // other parameters
});
~~~

**Change log:** This property was introduced in v1.4

**Related articles:** [Working with data](/guides/working_with_data)

**Related sample:** [Kanban. Links between tasks](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
