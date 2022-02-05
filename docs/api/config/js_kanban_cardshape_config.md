---
sidebar_label: cardShape
title: cardShape Config
description: You can learn about the cardShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardShape

### Description

@short: the card settings for managing the appearance of the Kanban board

### Usage

~~~jsx {}
cardShape?: {
	label: boolean | { show?: boolean },
	description?: boolean | { show?: boolean },
	progress?: boolean | { show?: boolean },
	start_date?: boolean | { show?: boolean },
	end_date?: boolean | { show?: boolean },
	menu?: boolean | { show?: boolean },
	attached?: boolean | { show?: boolean },
	users?: {
		show?: boolean,
		values?: [
			{
				id: string | number,
				path?: string,
				label?: string
			},
			{...} // other users data
		]
	},
	priority?: {
		show?: boolean,
		values?: [
			{
				id: string | number,
				color: string,
				label?: string
			},
			{...} // other priorities data
		]
	},
	color?: boolean | { show?: boolean },
	cover?: boolean | { show?: boolean },
	headerFields?: [
		{
			key: string,
			css?: string,
			label?: string
		},
		{...} // other fields data
	]
};
~~~

### Parameters

:::info
In some cases, you can set the parameter to the **short** or **extended** value. See the code below:

~~~jsx {3,6}
	label: boolean | { show?: boolean }
	// short value
	label: true
	// or
	// full value
	label: { show: true }
~~~
:::

To configure the card appearance, in the **cardShape** object you can specify the following parameters (fields):

- `label` - (mandatory) show/hide a **card label** 
- `progress` - (optional) show/hide a **card progress bar**
- `start_date` - (optional) show/hide a **card start date**
- `end_date` - (optional) show/hide a **card end date**
- `menu` - (optional) show/hide a **card menu**
- `attached` - (optional) show/hide a **card attachment**
- `users` - (optional) an object with **users** parameters
	- `show` - (optional) show/hide the **assigned users** data
	- `values` - (optional) an array of objects with users data. Here you can specify the following fields:
		- `id` - (mandatory) a user **ID** 
		- `path` - (optional) a path to the user picture
		- `label` - (optional) a user name
- `priority` - (optional) an object with **priorities** parameters
	- `show` - (optional) show/hide a **card priority**
	- `values` - (optional) an array of objects with priorities data. Here you can specify the following fields:
		- `id` - (mandatory) a priority **ID** 
		- `color` - (mandatory) a valid HEX code 
		- `label` - (optional) a priority name
- `color` - (optional) show/hide a colored **top line** of a card
- `cover` - (optional) show/hide a **card picture**
- `headerFields` - (optional) an array of objects with **custom fields** data. Here you can specify the following parameters:
	- `key` - (mandatory) a key of the custom field. It is used when configuring the Editor via the [editorShape](../js_kanban_editorshape_config) property 
	- `css` - (optional) a css class of the custom field
	- `label` - (optional) a label of the custom field

:::info
Unless you specify the cards settings via the **cardShape** property, the widget will apply a **defaultCardShape** set of parameters!
:::

### Default config

~~~jsx {}
const defaultPriorities = [
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const defaultCardShape = {
	label: true,
	description: false,
	progress: false,
	start_date: false,
	end_date: false,
	users: false,
	priority: {
		show: false,
		values: defaultPriorities
	},
	color: false,
	cover: false,
	attached: false,
	menu: true
};
~~~

### Example

~~~jsx {42}
const users = [ // users data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // card settings
	label: true,
	description: true,
	progress: true,
	start_date: true,
	end_date: true,
	menu: true,
	attached: true,
	users: {
		show: true,
		values: users
	},
	priority: {
		show: true,
		values: cardPriority
	},
	color: false,
	cover: false,
	headerFields: [
		{ // custom field
			key: "sprint",
			css: "custom_style",
			label: "Sprint"
		}
	]
};

new kanban.Kanban("#root", {
	cards,
	columns,
	cardShape,
	// other parameters
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#cards)
