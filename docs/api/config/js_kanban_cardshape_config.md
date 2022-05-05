---
sidebar_label: cardShape
title: cardShape Config
description: You can learn about the cardShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardShape

### Description

@short: Optional. An object of settings for managing the cards appearance

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
	cover?: boolean | { show?: boolean },
	color?: boolean | { 
		show?: boolean,
		values?: array  
	},
	users?: boolean | {
		show?: boolean,
		values?: [
			{
				id: string | number,
				label?: string,
				path?: string
			},
			{...} // other users data
		]
	},
	priority?: boolean | {
		show?: boolean,
		values?: [
			{
				id: string | number,
				label?: string,
				color: string
			},
			{...} // other priorities data
		]
	},	
	headerFields?: [
		{
			key: string,
			label?: string,
			css?: string
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

- `label` - (required) shows/hides a **card label**
- `description` - (optional) shows/hides a **card description**
- `progress` - (optional) shows/hides a **card progress bar**
- `start_date` - (optional) shows/hides a **card start date**
- `end_date` - (optional) shows/hides a **card end date**
- `menu` - (optional) shows/hides a **card menu**
- `attached` - (optional) shows/hides a **card attachment**
- `cover` - (optional) shows/hides a **card picture**
- `color` - (optional) an object of parameters of **the top color line** of card
	- `show` - (optional) shows/hides a **top color line**
	- `values` - (optional) an array of valid HEX codes
- `users` - (optional) an object with **users** parameters
	- `show` - (optional) shows/hides the **assigned users** data
	- `values` - (optional) an array of objects with users data. Here you can specify the following fields:
		- `id` - (required) a user **ID**
		- `label` - (optional) a user name
		- `path` - (optional) a path to the user picture
- `priority` - (optional) an object with **priorities** parameters
	- `show` - (optional) shows/hides a **card priority**
	- `values` - (optional) an array of objects with priorities data. Here you can specify the following fields:
		- `id` - (required) a priority **ID**
		- `label` - (optional) a priority name
		- `color` - (required) a valid HEX code
- `headerFields` - (optional) an array of objects with **custom fields** data. Here you can specify the following parameters:
	- `key` - (required) a key of the custom field. It is used when configuring the Editor via the [editorShape](../js_kanban_editorshape_config) property
	- `label` - (optional) a label of the custom field
	- `css` - (optional) a css class of the custom field

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

const defaultColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const defaultCardShape = {
	label: true,
	description: false,
	progress: false,
	start_date: false,
	end_date: false,
	menu: true,
	attached: false,
	cover: false,
	color: {
        show: false,
        values: defaultColors
    },
	users: false,
	priority: {
        show: false,
        values: defaultPriorities
    }
};
~~~

### Example

~~~jsx {47}
const users = [ // users data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // card settings
	label: true,
	description: true,
	progress: true,
	start_date: true,
	end_date: true,
	menu: true,
	attached: true,
	cover: false,
	color: {
		show: true,
		values: cardColors
	},
	users: {
		show: true,
		values: users
	},
	priority: {
		show: true,
		values: cardPriority
	},
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

**Change log:** The ***color*** parameter (field) was updated in v1.1

**Related articles:** [Configuration](../../../guides/configuration#cards)

**Related sample:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?mode=wide&text=#kanban)