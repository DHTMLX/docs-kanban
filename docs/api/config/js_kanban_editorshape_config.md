---
sidebar_label: editorShape
title: JS Kanban editorShape property
description: You can learn about the editorShape property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# editorShape / editorConfig?

### Description

The **editor configs** that manage the appearance of the JS Kanban editor

### Usage

```js
editorShape?: [
	{
		//available types: text, textarea, date, select, multiselect, files, color
		type: string, // an editor field type
		key: string, // an editor field key
		label?: string, // an editor field label
		placeholder?: string, // an editor field placeholder
		options?: [ // the editor dropdown options
			{ id: any, label: string },
			...
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
	...
]
```

### Default Config

```js
defaultEditorShape: [
	{ key: "label", type: "text", label: "Label" },
	{ key: "description", type: "textarea", label: "Description" },
	{ type: "combo", label: "Status", key: "status", options: defaultStatuses },
	{ type: "color", label: "Cover", key: "cover", colors: defaultColors },
	{ type: "date", key: "start_date", label: "Date" },
	{ type: "date", key: "end_date", label: "End date" },
	{ type: "image", key: "image", label: "Image" }
]
```
### Example

```jsx {12}
const editorShape = [
	...kanban.defaultEditorShape, // include default configs
	{ // add custom configs
		type: "progress",
		key: "progress",
		label: "Progress"
	}
];

new kanban.Kanban("#root", {
	...,
	editorShape
});
```
