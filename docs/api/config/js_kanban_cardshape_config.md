---
sidebar_label: cardShape
title: JS Kanban cardShape property
description: You can learn about the cardShape property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# cardShape / cardConfig?

### Description

The **cards configs** that manage the appearance of the JS Kanban board

### Usage

```js
cardShape?: {
	label: { show?: boolean }, // to show/hide a card label
	description?: { show?: boolean }, // to show/hide a card description
	progress?: { show?: boolean }, // to show/hide a card progress bar
	start_date?: { show?: boolean }, // to show/hide the start date
	end_date?: { show?: boolean }, // to show/hide the end date
	menu?: { show?: boolean }, // to show/hide a card menu
	attached?: { show?: boolean }, // to show/hide an attachment
	users?: { // to show/hide users data
		show?: boolean,
		values?: [
			{
				id: string | number, // a user ID
				path?: string, // a path to the user picture
				label?: string // a user name
			}, {...}
		]
	},
	status?: { // to show/hide a card status
		show?: boolean,
		values?: [
			{
				id: string | number, // a status ID
				color: string, // a valid HEX color code
				label?: string // a status name
			}, {...}
		]
	},
	cover?: { show?: boolean }, // to show/hide a card cover (top line)
	customFields?: [ // an array of custom fields
		{
			key: string, // a custom field key
			//available types: text, textarea, date, select, multiselect, files
			type: string, // a custom field type
		}, {...}
	]
}
```

### Default Config

```js
defaultCardShape: {
	label: { show: true },
	description: { show: false },
	progress: { show: true },
	start_date: { show: false },
	end_date: { show: false },
	users: { show: false },
	status: {
		show: false,
		values: defaultStatuses
	},
	cover: { show: false },
	attached: { show: true },
	menu: { show: true }
}
```

### Example

```jsx {29}
const users = [
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const defaultStatuses = [
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const cardShape = {
	label: { show: true },
	description: { show: true },
	progress: {	show: true },
	start_date: { show: true },
	end_date: { show: true	},
	menu: { show: true },
	attached: { show: true },
	status: { show: true, values: defaultStatuses },
	users: { show: true, values: users },
	customFields: [
		{ key: "sprint", type: "text", label: "Custom field" }
	]
};

new kanban.Kanban("#root", {
	...,
	cardShape
});
```
