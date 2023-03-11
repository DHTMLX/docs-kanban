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
		masterId: string | number,
		slaveId: string | number,
		relation: "relatesTo" | "requiredFor" | "duplicate" | "parent",
	}	
	{...} // other links data
];
~~~

### Parameters

For each link you can specify the following parameters (data):

- `id` - (required) the ID of the link
- `masterId` - (required) the card ID which expresses a dominant role in the link (e.g. “Is required for”)
- `slaveId` - (required) the card ID which expresses a passive role in the link (e.g. “Depends on”)
- `relation` - (required) the type of link. Here you can specify the following types:
	- ***"relatesTo"*** -  [TODO]
	- ***"requiredFor"*** - [TODO]
	- ***"duplicate"*** - [TODO]
	- ***"parent"*** - [TODO]

:::info
If you want to load new data for links dynamically, you can use the [**parse()**](../../methods/js_kanban_parse_method) method!
:::

### Example

~~~jsx {1-9,14}
const links = [
	{
		id: string | number,
		masterId: string | number,
		slaveId: string | number,
		relation: "relatesTo" | "requiredFor" | "duplicate" | "parent",
	},
	{...}
];

new kanban.Kanban("#root", {
   columns,
   cards,
   links
   // other parameters
});
~~~

**Change log:** The property was added in v1.4

**Related articles:** [Working with data](../../../guides/working_with_data)

**Related sample:** [Kanban. Links between tasks](https://snippet.dhtmlx.com/81qu7qh0)
