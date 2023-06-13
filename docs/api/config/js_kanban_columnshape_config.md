---
sidebar_label: columnShape
title: columnShape Config
description: You can learn about the columnShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# columnShape

### Description

@short: Optional. An object of settings for managing the columns appearance

### Usage

~~~jsx {}
columnShape?: {
	menu?: {
		show?: boolean,
		items?: [
			{
				id?: string,
				icon?: string,
				text?: string,
				disabled?: boolean,
				onClick?: ({ id, item, column }) => void
			}, 
			{...}
		] | ({ column, columnIndex, store }) => array | boolean
	},
	fixedHeaders?: boolean,
	css?: (column, cards) => string
};
~~~

### Parameters

To configure the columns appearance, in the **columnShape** object you can specify the following parameters:

- `menu` - (optional) an object of parameters of the columns context menu. Here you can specify the following parameters:
	- `show` - (optional) - enables/disables a column context menu
	- `items` - (optional) an array of objects containing parameters of items of the columns context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item. To implement the built-in actions, you need to specify the following values:
			- ***"add-card"*** - defines the action to add a new card
			- ***"set-edit"*** - defines the action to edit a column name
			- ***"move-column:left"*** - defines the action to move a column left
			- ***"move-column:right"*** - defines the action to move a column right
			- ***"delete-column"*** - defines the action to delete a column
		- `icon` - (optional) a class name of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
		- `text` - (optional) a name of the menu item
		- `disabled` - (optional) a state of the menu item (*active* or *disabled* depending on the *boolean* value)
		- `onClick` - (optional) a custom callback function, that takes the following arguments:
			- ***id*** - an ID of the current menu item
			- ***item*** - a data object of the current menu item
			- ***column*** - a data object of the target column

	:::info
	You can also set the `items` parameter to a custom function, that takes the following arguments:
	- ***column*** - a data object of a current column
	- ***columnIndex*** - an index of a current column
	- ***store*** - an object of *dataStore*

	This function allows customizing menu for any column or hide it for a specific one (by returning *null* or *false*):

	~~~jsx {}
	items: ({ column, columnIndex, store }) => {
		if(column.id === "inprogress")
			return null

		if (column.id === "backlog") 
			return [
				{ id: "set-edit", icon: "wxi-edit", text: "Rename" },
				{
					id: "delete-card",
					icon: "wxi-delete",
					text: "Remove card"
				}
			]
	}
	~~~
	:::

- `fixedHeaders` - (optional) fixes column headers during vertical scroll (*true* by default)
- `css` - (optional) a function returns a css class that applies to columns conditionally

### Default config

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, store }) => [
	{ id: "add-card", icon: "wxi-plus", text: "Add new card" },
    { id: "set-edit", icon: "wxi-edit", text: "Rename" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "Move left",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "Move right",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "Delete" }
];
const columnShape = {
	menu: {
		show: true,
		items: getDefaultColumnMenuItems
	},
	fixedHeaders: true
};
~~~

### Example

~~~jsx {1-30,36}
const columnShape = {
	menu: {
		show: true,
		items: [
			{
				id: "color",
				text: "Color",
				items: [
					{ 
						id:"yellow", 
						text: "Yellow",
						onClick: ({ column }) => changeColumnColor(column, "yellow")
					},
					{ 
						id:"red", 
						text: "Red",
						onClick: ({ column }) => changeColumnColor(column, "red")
					},
					{ 
						id:"green", 
						text: "Green",
						onClick: ({ column }) => changeColumnColor(column, "green")
					}
				]
			}
		]
	},
	fixedHeaders: false,
	css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red"
};

new kanban.Kanban("#root", {
	cards,
	columns,
	rows,
	columnShape, 
	// other parameters
});
~~~

**Change log:**
- The ***css*** parameter was added in v1.4
- The ***menu.items[0].label*** parameter was replaced by the ***menu.items[0].text*** parameter in v1.4
- The ***fixedHeaders*** parameter was added in v1.5

**Related articles:** [Configuration](../../../guides/configuration)

**Related samples:** 
- [Kanban. Changing color of column via custom menu](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixed headers](https://snippet.dhtmlx.com/gc19coj0?tag=kanban)
