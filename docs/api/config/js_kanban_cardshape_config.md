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
	attached?: boolean | { show?: boolean },
	cover?: boolean | { show?: boolean },
	comments?: boolean | { show?: boolean },
	subtasks?: boolean | { show?: boolean },
	start_date?: boolean | { 
		show?: boolean,
		format?: string 
	},
	end_date?: boolean | { 
		show?: boolean,
		format?: string
	},
	color?: boolean | { 
		show?: boolean,
		values?: array  
	},
	menu?: boolean | {
		show?: boolean, 
		items?: [
			{
				id?: string,
				icon?: string,
				label?: string,
				disabled? boolean,
				onClick?: ({ id, item, card }) => void
			}, 
			{...}
		] | ({ card, store }) => array | boolean
	},
	users?: boolean | {
		show?: boolean,
		values: [
			{
				id: string | number,
				label?: string,
				avatar?: string
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
	votes?: boolean | { show?: boolean }, 
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

- `label` - (optional) shows/hides a **label** field
- `description` - (optional) shows/hides a **description** field
- `progress` - (optional) shows/hides a **progress** field
- `attached` - (optional) shows/hides an **attachment** field
- `cover` - (optional) shows/hides a **card picture**
- `comments` - (optional) shows/hides **comments** on cards
- `subtasks` - (optional) shows/hides **subtasks** on cards
- `start_date` - (optional) an object of parameters of a **start date** field
	- `show` - (optional) shows/hides a card start date
	- `format` - (optional) defines format of a card start date. The available parameters can be found [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (optional) an object of parameters of an **end date** field
	- `show` - (optional) shows/hides a card end date
	- `format` - (optional) defines format of a card end date. The available parameters can be found [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (optional) an object of parameters of a **top color line** of card
	- `show` - (optional) shows/hides a top color line
	- `values` - (optional) an array of valid HEX codes
- `menu` - (optional) an object of parameters of a **card context menu**. Here you can specify the following parameters:
	- `show` - (optional) - enables/disables a card context menu
	- `items` - (optional) an array of objects containing parameters of items of the cards context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item
		- `icon` - (optional) a class name of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
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

	This function allows customizing menu for any card or hide it for a specific one (by returning *null* or *false*):

	~~~jsx {}
	items: ({ card, store }) => {
		if(card.id === 1){
			return false;
		} else {
			return [
				{ id: "set-edit", icon: "wxi-edit", label: "Edit" },
				{ id: "delete-card", icon: "wxi-delete", label: "Delete" }
			];
		} 
	}
	~~~
	:::

- `users` - (optional) an object of parameters of a **users** field
	- `show` - (optional) shows/hides the assigned users
	- `values` - (required) an array of objects with users data. For each user you can specify the following parameters:
		- `id` - (required) a user **ID**
		- `label` - (optional) a user name
		- `avatar` - (optional) a path to the user avatar

	:::info
	The ***users*** field is disabled by default. To enable it, you need to set the `show` parameter to `true` and provide the corresponding users data via the `values` parameter. To assign new users via the editor, you need to configure the corresponding control via the [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) property. Use the ***select*** type for assigning one or user or the ***multiselect*** type for assigning several users.

	~~~jsx {}
	cardShape: {
		users: {
			show: true,
			values: [
				{ id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
				{ id: 2, label: "Aaron Short" }
			]
		}
	}
	~~~
	:::

- `priority` - (optional) an object of parameters of a **priority** field
	- `show` - (optional) shows/hides a card priority
	- `values` - (optional) an array of objects with priorities data. For each priority you can specify the following parameters:
		- `id` - (required) a priority **ID**
		- `label` - (optional) a priority name
		- `color` - (required) a valid HEX code
- `votes` - (optional) shows/hides **votes** on cards. If **true**, the corresponding control will be displayed in the editor
- `headerFields` - (optional) an array of objects with the **custom fields** data. Here you can specify the following parameters:
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

const getDefaultCardMenuItems = ({ card, store }) => {
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
		items: getDefaultCardMenuItems
	},
	attached: false,
	cover: false,
	comments: false,
	subtasks: false,
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

~~~jsx {14-51,56}
const users = [ // users data
	{ id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
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
	comments: false,
	subtasks: false,
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

- The ***start_date***, ***end_date***, ***menu*** and ***users*** parameters (fields) were updated in v1.2
- The ***comments***, ***subtasks*** and ***votes*** parameters (fields) were added in v1.4

**Related articles:** [Configuration](../../../guides/configuration#cards)

**Related samples:**

- [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?mode=wide&text=#kanban)
- [Kanban. Custom context menu](https://snippet.dhtmlx.com/8eo65gr5?text=#kanban)
- [Kanban. Comments](https://snippet.dhtmlx.com/f9ponfsg?text=#kanban)
- [Kanban. Subtasks](https://snippet.dhtmlx.com/01k7qv5z?text=#kanban)
