---
sidebar_label: editorShape
title: editorShape Config
description: You can learn about the editorShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editorShape

### Description

The **editor configs** that manage the appearance of the Kanban editor

### Usage

```js
editorShape?: [
	{
		// available types:
		// text, textarea, date, select, combo, multiselect, files, color, progress
		type: string, // an editor field type
		key: string, // an editor field key
		label?: string, // an editor field label
		placeholder?: string, // an editor field placeholder
		options?: [ // an array of the dropdown options
			{ id: any, label: string },
			{...}
		],
		config?: { // an editor uploader config
			accept?: string,
			disabled?: boolean,
			multiple?: boolean,
			folder?: boolean
		},
		// an editor uploader URL (this parameter is mandatory for the "files" type)
		uploadURL?: string
	},
	{...}
]
```

### Default config

```js
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
```
### Example

```jsx {18}
const users = [ // user data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const editorShape = [ // editor configs
	...kanban.defaultEditorShape, // include default configs
	{ // add custom configs
		type: "multiselect",
		key: "users",
		label: "Users",
		options: users
	}
];

new kanban.Kanban("#root", {
	...,
	editorShape
});
```

**Related article:** [Configuration](../../../guides/configuration#editor)
