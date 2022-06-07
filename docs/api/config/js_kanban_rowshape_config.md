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
		show?: boolean | ({ row }) => boolean,
		items?: [
			{
				id?: string,
				icon?: string,
				label?: string,
				disabled? boolean,
				onClick?: ({ id, item, row }) => void
			}, 
			{...}
		] | ({ row, rowIndex, store }) => array
	}
};
~~~

### Parameters

To configure the rows appearance, in the **rowShape** object you can specify the following parameters:

- `menu` - (optional) an object of parameters of the rows context menu. Here you can specify the following parameters:
	- `show` - (optional) - enables/disables a row context menu

	:::info
	You can set the `show` parameter to the *boolean* value, to show or hide menu for all rows:
	~~~jsx {}
		// hides menu of all rows
		show: false, 
	~~~
	You can also set the `show` parameter to a custom function, that takes an object of row data. This function allows showing or hiding menu for a specific row:
	~~~jsx {}
		// hides menu of the "Feature" row
		show: ({ row }) => row.id !== "feature", 
	~~~
	:::

	- `items` - (optional) an array of objects containing parameters of items of the rows context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item
		- `icon` - (optional) a classname of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
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

	This function allows customizing menu for a specific row:

	~~~jsx {}
	items: ({ row, rowIndex, store }) => {
		if(rowIndex == 0){
			return [
				{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
				{
					id: "delete-row",
					icon: "wxi-delete",
					label: "Remove row",
					onClick: ({ id, item, row }) => board.deleteRow({ id: row.id })
				}
			];
		} else {
			return [
				{
					id: "move-row:up",
					icon: "wxi-arrow-up",
					label: "Move up",
					disabled: false
				}
			];
		}
	}
	~~~
	:::

### Default config

~~~jsx {}
// TODO defaultRowMenuItems
const getRowMenuItems = ({ row, rowIndex, store }) => [
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
		items: getRowMenuItems // TODO defaultRowMenuItems
	}
};
~~~

### Example

~~~jsx {1-20,26}
const rowShape = {
	menu: {
		show: true,
		items: [
			{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
			{ id: "delete-row", icon: "wxi-delete", label: "Delete" },
			{
				id: "move-row:up",
				icon: "wxi-arrow-up",
				label: "Move up",
				disabled: true
			},
			{
				id: "move-row:down",
				icon: "wxi-arrow-down",
				label: "Move down",
				disabled: true
			}
		]
};

new kanban.Kanban("#root", {
	cards,
	rows,
	rows,
	rowShape, 
	// other parameters
});
~~~

**Change log:** The property was added in v1.2

**Related articles:** [Configuration](../../../guides/configuration)