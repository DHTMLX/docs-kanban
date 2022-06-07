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
	label?: boolean | { show?: boolean },
	description?: boolean | { show?: boolean },
	progress?: boolean | { show?: boolean },
	start_date?: boolean | { show?: boolean },
	end_date?: boolean | { show?: boolean },
	attached?: boolean | { show?: boolean },
	cover?: boolean | { show?: boolean },
	color?: boolean | { 
		show?: boolean,
		values?: array  
	},
	menu?: boolean | {
		show?: boolean | ({ card }) => boolean,
		items?: [
			{
				id?: string,
				icon?: string,
				label?: string,
				disabled? boolean,
				onClick?: ({ id, item, card }) => void
			}, 
			{...}
		] | ({ card, store }) => array
	},
	users?: boolean | {
		show?: boolean,
		values: [
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

- `label` - (optional) shows/hides a **card label**
- `description` - (optional) shows/hides a **card description**
- `progress` - (optional) shows/hides a **card progress bar**
- `start_date` - (optional) shows/hides a **card start date**
- `end_date` - (optional) shows/hides a **card end date**
- `attached` - (optional) shows/hides a **card attachment**
- `cover` - (optional) shows/hides a **card picture**
- `color` - (optional) an object of parameters of **the top color line** of card
	- `show` - (optional) shows/hides a **top color line**
	- `values` - (optional) an array of valid HEX codes
- `menu` - (optional) an object of parameters of a **card menu**. Here you can specify the following parameters:
	- `show` - (optional) - enables/disables a card context menu

	:::info
	You can set the `show` parameter to the *boolean* value, to show or hide menu for all cards:
	~~~jsx {}
		// hides menu of all cards
		show: false, 
	~~~
	You can also set the `show` parameter to a custom function, that takes an object of card data. This function allows showing or hiding menu for a specific card:
	~~~jsx {}
		// hides menu of card with the "first" ID
		show: ({ card }) => card.id !== "first", 
	~~~
	:::

	- `items` - (optional) an array of objects containing parameters of items of the cards context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item
		- `icon` - (optional) a classname of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
		- `label` - (optional) a name of the menu item
		- `disabled` - (optional) a state of the menu item (*active* or *disabled* depending on the *boolean* value)
		- `onClick` - (optional) a custom callback function, that takes the following arguments:
			- ***id*** - an ID of the current menu item
			- ***item*** - a data object of the current menu item
			- ***card*** - a data object of the target card

	:::info
	You can also set the `items` parameter to a custom function, that takes the following arguments:
	- ***card*** - a data object of a current card
	- ***store*** - an object of *dataStore*

	This function allows customizing menu for a specific card:

	~~~jsx {}
	items: ({ card, store }) => {
		if(card.id === 1){
			return [
				{ id: "set-edit", icon: "wxi-edit", label: "Edit" },
				{ id: "delete-card", icon: "wxi-delete", label: "Delete" }
			];
		} else {
			return [
				{ id: "set-edit", icon: "wxi-edit", label: "Edit" }
			];
		}
	}
	~~~
	:::

- `users` - (optional) an object with **users** parameters
	- `show` - (optional) shows/hides the **assigned users** data
	- `values` - (required) an array of objects with users data. Here you can specify the following fields:
		- `id` - (required) a user **ID**
		- `label` - (optional) a user name
		- `path` - (optional) a path to the user picture

	:::info
	By default, the **users** field is disabled (`users: false`). To work with users, you need to set the `show` parameter to `true` and provide the corresponding data via the `values` parameter. Note, that you cannot activate users via the `users: true` expression!

	~~~jsx {3-7}		
	cardShape: {
		users: {
			show: true,
			values: [
				{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
				{ id: 2, label: "Aaron Short" }
			]
		}
	}
	~~~
	:::

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
// TODO defaultCardMenuItems
const getCardMenuItems = ({ card, store }) => {
    const readonly = store.getState();
    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit", label: "Edit" },
            { id: "delete-card", icon: "wxi-delete", label: "Delete" },
        ];
    }
    return [{ id: "delete-card", icon: "wxi-delete", label: "Delete" }];
};

const defaultCardShape = {
	label: true,
	description: false,
	progress: false,
	start_date: false,
	end_date: false,
	menu: {
		show: true,
		items: getCardMenuItems // TODO defaultCardMenuItems
	},
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

**Change log:**

- The ***color*** parameter (field) was updated in v1.1
- The ***menu*** parameter was updated in v1.2

**Related articles:** [Configuration](../../../guides/configuration#cards)

**Related sample:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?mode=wide&text=#kanban)