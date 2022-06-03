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
		show?: boolean | ({ column }) => boolean,
		items?: [
			{
				id?: string,
				icon?: string,
				label?: string,
				disabled? boolean,
				onClick?: ({ id, item, column }) => void
			}, 
			{...}
		] | ({ column, columnIndex, store }) => array
	}
};
~~~

### Parameters

To configure the columns appearance, in the **columnShape** object you can specify the following parameters:

- `menu` - (optional) an object of parameters of the columns context menu. Here you can specify the following parameters:
	- `show` - (optional) - enables/disables a column context menu

	:::info
	You can set the `show` parameter to the *boolean* value, to show or hide menu for all columns:
	~~~jsx {}
		// hides menu of all columns
		show: false, 
	~~~
	You can also set the `show` parameter to a custom function, that takes an object of column data. This function allows showing or hiding menu for a specific column:
	~~~jsx {}
		// hides menu of the "Inprogress" column
		show: ({ column }) => column.id !== "inprogress", 
	~~~
	:::

	- `items` - (optional) an array of objects containing parameters of items of the columns context menu. For each item you can specify the following parameters:
		- `id` - (optional) an ID of the menu item
		- `icon` - (optional) a classname of icon of the menu item. Here you can specify any icon related to the icon fonts (*mdi-delete*)
		- `label` - (optional) a name of the menu item
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

	This function allows customizing menu for a specific column:

	~~~jsx {}
	items: ({ column, columnIndex, store }) => {
		const items = [
			{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
			{
				id: "delete-card",
				icon: "wxi-delete",
				label: "Remove card",
				onClick: ({ id, item, column }) => {
					board.deleteCard({
						id: board.getAreaCards(column.id)[0].id,
					});
				},
			},
		];
		if (column.id === "backlog") {
			items.push({ id: "add-card", icon: "wxi-plus", label: "Add card" });
		}
		return items;
	}
	~~~
	:::

### Default config

~~~jsx {}
// TODO defaultColumnMenuItems
const getColumnMenuItems = ({ column, columnIndex, store }) => [
	{ id: "add-card", icon: "wxi-plus", label: "Add new card" },
    { id: "set-edit", icon: "wxi-edit", label: "Rename" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        label: "Move left",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        label: "Move right",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", label: "Delete" }
];
const columnShape = {
	menu: {
		show: true,
		items: getColumnMenuItems // TODO defaultColumnMenuItems
	}
};
~~~

### Example

~~~jsx {1-21,27}
const columnShape = {
	menu: {
		show: true,
		items: [
			{ id: "set-edit", icon: "wxi-edit", label: "Rename" },
			{ id: "delete-column", icon: "wxi-delete", label: "Delete" },
			{ id: "add-card", icon: "wxi-plus", label: "Add new card" },
			{
				id: "move-column:left",
				icon: "wxi-arrow-left",
				label: "Move left",
				disabled: true
			},
			{
				id: "move-column:right",
				icon: "wxi-arrow-right",
				label: "Move right",
				disabled: true
			}
		]
};

new kanban.Kanban("#root", {
	cards,
	columns,
	rows,
	columnShape, 
	// other parameters
});
~~~

**Change log:** The property was added in v1.2

**Related articles:** [Configuration](../../../guides/configuration)
