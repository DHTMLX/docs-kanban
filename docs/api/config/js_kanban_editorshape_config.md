---
sidebar_label: editorShape
title: editorShape Config
description: You can learn about the editorShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editorShape

### Description

@short: Optional. An array of objects containing settings for managing the appearance and functionality of the Kanban editor

### Usage

~~~jsx {3,8,18,25,34,41}
editorShape?: [
	{
		// common parameters for all types
		type: string, 
		key: string, 
		label?: string, 

		// for "combo", "select" and "multiselect" types only
		values?: [ 
			{
				id: string | number,
				label: string,
				avatar?: string // for a "multiselect" type only
			},
			{...} // other options
		],

		// for a "color" type only
		values?: array, 
		config?: {
			placeholder?: string,
			clear?: boolean
		},

		// for "text" and "textarea" types only
		config?: {
			placeholder?: string,
			readonly?: boolean,
			focus?: boolean,
			disabled?: boolean,
			inputStyle?: string
		},

		// for a "progress" type only
		config?: {
			min?: number,
			max?: number,
			step?: number
		},
		
		// for a "files" type only
		uploadURL?: string,
		config?: {
			accept?: string,
			disabled?: boolean,
			multiple?: boolean,
			folder?: boolean
		}
	},
	{...} // other fields settings
];
~~~

### Parameters

To configure the editor appearance and functionality, you can specify the following parameters (fields):

#### - Common parameters for all types

- `type` - (required) an editor field type. Here you can specify the following types: **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **date**
- `key` - (required) an editor field key. Here you need to use the value specified in the [cardShape](../js_kanban_cardshape_config) property. See the example below:

~~~js {8,17}
	// card appearance settings
	const cardShape = { 
		...kanban.defaultCardShape,
		headerFields: [
			{ // custom field
				label: "Custom field",
				css: "custom_style",
				key: "custom_key"
			}
		]
	};
	// editor appearance settings
	const editorShape = [
		{
			label: "Custom field",
			type: "text",
			key: "custom_key"
		}
	];
~~~

- `label` - (optional) an editor field label

#### - Parameters for "combo", "select" and "multiselect" types

- `values` - (optional) an array of objects containing the dropdown options data. Here you can specify the following parameters:
	- `id` - (required) an option **ID** 
	- `label` - (required) an option label 
	- `avatart` - (optional) a path to the option preview image (for a **"multiselect"** type only)

:::important
To set a control for assigning users (the ***users*** field of the [**cardShape**](../js_kanban_cardshape_config) property), you need to use the ***multiselect*** type only!
:::

#### - Parameters for a "color" type

- `values` - (optional) an array with valid HEX codes
- `config` - (optional) a configuration object of the **"color"** field. Here you can specify the following parameters:
	- `placeholder` - (optional) a placeholder value
	- `clear` - (optional) shows/hides a "clear" icon

#### - Parameters for "text" and "textarea" types

- `config` - (optional) a configuration object of the **"text"** and **"textarea"** fields. Here you can specify the following parameters:
	- `placeholder` - (optional) a placeholder value
	- `readonly` - (optional) enables/disables a readonly mode
	- `focus` - (optional) enables/disables a focus
	- `disabled` - (optional) enables/disables a field
	- `inputStyle` - (optional) a custom css style

#### - Parameters for a "progress" type

- `config` - (optional) a configuration object of the **"progress"** field. Here you can specify the following parameters:
	- `min` - (optional) a min value
	- `max` - (optional) a max value
	- `step` - (optional) a step of moving the progress bar slider

#### - Parameters for a "files" type

- `uploadURL` - (optional) an URL of the editor uploader
- `config` - (optional) a configuration object the **"files"** field. Here you can specify the following parameters:
	- `accept` - (optional) a file type to be uploaded (***"image/\*", "video/\*", "audio/\*"*** *and other*)
	- `disabled` - (optional) enables/disables uploading *files*
	- `multiple` - (optional) enables/disables uploading *multiple files*
	- `folder` - (optional) enables/disables uploading *folders* 

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

const defaultEditorShape = [
	{ key: "label", type: "text", label: "Label" },
	{ key: "description", type: "textarea", label: "Description" },
	{ key: "priority", type: "combo", label: "Priority", values: defaultPriorities },
	{ key: "color", type: "color", label: "Color", values: defaultColors },
	{ key: "progress", type: "progress", label: "Progress" },
	{ key: "start_date", type: "date", label: "Start date" },
	{ key: "end_date", type: "date", label: "End date" }
];
~~~

### Example

~~~jsx {6-14,19}
const users = [ // user data
	{ id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const editorShape = [ // editor settings
	...kanban.defaultEditorShape, // include the default settings
	{ // add custom field
		type: "multiselect",
		key: "users",
		label: "Users",
		values: users
	}
];

new kanban.Kanban("#root", {
	cards,
	columns,
	editorShape,
	// other parameters
});
~~~

**Change log:** The *multiselect* type was updated in v1.2

**Related articles:** [Configuration](../../../guides/configuration#editor)
