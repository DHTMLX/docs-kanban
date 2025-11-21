---
sidebar_label: links
title: links Config
description: Explore the links configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# links

### Description

@short: Optional. This is an array of objects that holds the links data.

### Usage

~~~jsx {}
links?: [
    {
        id: string | number,
        source: string | number,
        target: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // other links data
];
~~~

### Parameters

Each link can include the following details:

- `id` - (required) the unique identifier of the link
- `source` - (required) the card ID where the link starts (for example, “Task A is required for Task B”)
- `target` - (required) the card ID where the link ends (for example, “Task B depends on Task A”)
- `relation` - (required) the type of link. You can choose from these types:
    - ***"relatesTo"*** - indicates a dependency where the current task is connected to another
    - ***"requiredFor"*** - shows that one task must be completed before the other
    - ***"duplicate"*** - marks tasks that are duplicates of each other
    - ***"parent"*** - indicates a parent (master) and child (slave) task relationship

:::info
To update links data dynamically, you can use the [**setConfig()**](api/methods/js_kanban_setconfig_method.md) or [**parse()**](api/methods/js_kanban_parse_method.md) method!
:::

### Example

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        source: 2,
        target: 5,
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

**Change log:** This property was updated in v1.7:
    - The **masterId** parameter was replaced by **source**
    - The **slaveId** parameter was replaced by **target**

**Related articles:** [Working with data](guides/working_with_data.md)

**Related sample:** [Kanban. Links between tasks](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)