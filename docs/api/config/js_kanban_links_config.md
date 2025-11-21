---
sidebar_label: links
title: links Config
description: You can learn about the links config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# links

### Description

@short: Optional. An array of objects containing the links data

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

For each link you can specify the following parameters (data):

- `id` - (required) the ID of the link
- `source` - (required) the card ID at the start of the link (e.g. "Task A is required for Task B")
- `target` - (required) the card ID at the end of the link (e.g. "Task B depends on Task A")
- `relation` - (required) the type of link. Here you can specify the following types:
    - ***"relatesTo"*** -  defines dependency between tasks where the current task is bound to other one
    - ***"requiredFor"*** - defines dependency between tasks where one task requires the other one to be done
    - ***"duplicate"*** - defines dependency between duplicated tasks
    - ***"parent"*** - defines dependency between parent (master) and child (slave) tasks

:::info
If you want to load new data for links dynamically, you can use the [**setConfig()**](api/methods/js_kanban_setconfig_method.md) or [**parse()**](api/methods/js_kanban_parse_method.md) method!
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

**Change log:** The property was updated in v1.7:
    - The **masterId** parameter was replaced with the **source** parameter
    - The **slaveId** parameter was replaced with the **target** parameter

**Related articles:** [Working with data](guides/working_with_data.md)

**Related sample:** [Kanban. Links between tasks](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
