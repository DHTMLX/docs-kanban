---
sidebar_label: rowShape
title: rowShape Config
description: You can learn about the rowShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# rowShape

### Description

@short: Optional. An object of settings for managing the rows appearance

### Usage

~~~jsx {}
rowShape?: {
	menu?: {
		show?: boolean, 
		items?: [
			{
				id?: string,
				icon?: string,
				label?: string,
				disabled? boolean,
				onClick?: ({ id, item, row }) => void
			}, 
			{...}
		] | ({ row, rowIndex, store }) => array | boolean
	},
	css?: (row, cards) => string
};
~~~

### Parameters

To configure the rows appearance, in the **rowShape** object you can specify the following parameters:

- `menu` - (optional) an object of parameters of the rows context menu. Here you can specify the following parameters:
	- `show` - (optional) enables/disables a row context menu
	- `items` - (optional) an array of objects containing parameters of items of the rows context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item. To implement the built-in actions, you need to specify the following values:
			- ***"set-edit"*** - defines the action to edit a row name
			- ***"move-row:up"*** - defines the action to move a row up
			- ***"move-row:down"*** - defines the action to move a row down
			- ***"delete-row"*** - defines the action to delete a row

		- `icon` - (optional) a class name of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
		- `label` - (optional) a name of the menu item
		- `disabled` - (optional) a state of the menu item (*active* or *disabled* depending on the *boolean* value)
		- `onClick` - (optional) a custom callback function, that takes the following arguments:
			- ***id*** - an ID of the current menu item
			- ***item*** - a data object of the current menu item
			- ***row*** - a data object of the target row

	:::info
	You can also set the `items` parameter to a custom function, that takes the following arguments:
	- ***row*** - a data object of a current row
	- ***rowIndex*** - an index of a current row
	- ***store*** - an object of *dataStore*

	This function allows customizing menu for any row or hide it for a specific one (by returning *null* or *false*):

	~~~jsx {}
	items: ({ row, rowIndex, store }) => {
		if(rowIndex == 0)
			return null
		return [
			{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
			{
				id: "custom-delete-row",
				icon: "wxi-delete",
				label: "Remove row",
			},
			{
				id: "custom-move-row:up",
				icon: "wxi-arrow-up",
				label: "Move up",
			}
		]
	}
	~~~
	:::

- `css` - a function returns a css class that applies to rows conditionally

### Default config

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, store }) => [
	{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        label: "Move up",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        label: "Move down",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", label: "Delete" }
];
const rowShape = {
	menu: {
		show: true,
		items: getDefaultRowMenuItems
	}
};
~~~

### Example

~~~jsx {10-42,48}
const changeRowColor = (row, cssClass) => board.updateRow({ 
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
	menu: {
		show: true,
		items: ({ row, rowIndex, store }) => {
			if (rowIndex == 0) 
				return false
			return [
				{
                    id: "color",
                    label: "Color",
                    items: [
                        { 
                            id:"gray", 
                            label: "Gray",
                            onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                        },
                        { 
                            id:"yellow", 
                            label: "Yellow",
                            onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                        },
                        { 
                            id:"red", 
                            label: "Red",
                            onClick: ({ id, item, row }) => changeRowColor(row, "red")
                        }
                    ]
                }
			]
		}
	},
	css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red"
};

new kanban.Kanban("#root", {
	cards,
	rows,
	rows,
	rowShape, 
	// other parameters
});
~~~

**Change log:** The ***css*** parameter was added in v1.4

**Related articles:** [Configuration](../../../guides/configuration)

**Related sample:** [Kanban. Changing color of rows via custom menu](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
