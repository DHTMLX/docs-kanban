---
sidebar_label: editorShape
title: Kanban editorShape property
description: You can learn about the editorShape property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# editorShape

### Description

The **editor configs** for managing the appearance and functionality of the Kanban editor

### Usage

~~~jsx {}
editorShape?: [
	{
		type: string,
		key: string,
		label?: string,
		options?: [
			{
				id: any,
				label: string
			},
			{...} // other options
		],
		colors?: array,
		placeholder?: string,
		config?: {
			accept?: string,
			disabled?: boolean,
			multiple?: boolean,
			folder?: boolean
		},
		uploadURL?: string
	},
	{...} // other fields data
]
~~~

### Parameters

To configure the editor appearance and functionality, you can specify the following parameters (fields):

- `type: string` - an editor field type. Here you can specify the following types: ***text***, ***textarea***, ***date***, ***select***, ***combo***, ***multiselect***, ***files***, ***color***, ***progress*** (*mandatory*)
- `key: string` - an editor field key. Here you need to use the value specified in the [cardShape](../js_kanban_cardshape_config) property (*mandatory*). See the example below:

~~~js {2,5,16,21}
	const cardShape = { // card configs
		label: true,
		headerFields: [
			{ // custom field
				key: "sprint",
				css: "custom_style",
				label: "Sprint"
			}
		]
		// other parameters
	};

	const editorShape= { // editor configs
		{
			type: "text",
			key: "label",
			label: "Label"
		},
		{
			type: "text",
			key: "sprint",
			label: "Sprint"
		},
		// other parameters
	};
~~~
- `label?: string` - an editor field label

- `options?: array` - an array of objects with the dropdown options (for the *select* and *combo* types). Here you can specify the following fields:
	- `id: any` - an option ID (*mandatory*)
	- `label: string` - an option label (*mandatory*)

- `colors?: array` - an array with valid HEX codes. It is used for the *color* type
- `placeholder?: string` - an editor field placeholder

- `config?:object` - an object with the editor uploader configs. Here you can specify the following parameters:
	- `accept?: string` -  a file type the uploader should accept
	- `disabled?: boolean` - when the *disabled* attribute is ***true***, the uploader forbids the user to upload any files
	- `multiple?: boolean` - when the *multiple* attribute is ***true***, the uploader allows the user to select more than one file
	- `folder?: boolean` - when the *folder* attribute is ***true***, the uploader allows the user to select a folder

- `uploadURL?: string` - an editor uploader URL (this parameter is *mandatory* for the "files" type)

:::info
Unless you specify the editor settings via the **editorShape** property, the widget will apply a **defaultEditorShape** set of parameters!
:::

### Default config

~~~jsx {}
const defaultPriorities = [
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const defaultColors = [ "#65D3B3", "#FFC975", "#58C3FE" ];

const defaultEditorShape: [
	{ key: "label", type: "text", label: "Label" },
	{ key: "description", type: "textarea", label: "Description" },
	{ key: "priority", type: "combo", label: "Priority", options: defaultPriorities },
	{ key: "color", type: "color", label: "Color", colors: defaultColors },
	{ key: "progress", type: "progress", label: "Progress" },
	{ key: "start_date", type: "date", label: "Start date" },
	{ key: "end_date", type: "date", label: "End date" }
]
~~~

### Example

~~~jsx {6-14,19}
const users = [ // user data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const editorShape = [ // editor configs
	...kanban.defaultEditorShape, // include the default configs
	{ // add custom field
		type: "multiselect",
		key: "users",
		label: "Users",
		options: users
	}
];

new kanban.Kanban("#root", {
	cards,
	columns,
	editorShape,
	// other parameters
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#editor)
