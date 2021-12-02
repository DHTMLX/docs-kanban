---
sidebar_label: cardShape
title: cardShape Config
description: You can learn about the cardShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardShape

### Description

The **card configs** that manage the appearance of the Kanban board

### Usage

```js
cardShape?: {
	label: boolean | { show?: boolean }, // to show/hide a card label
	description?: boolean | { show?: boolean }, // to show/hide a card description
	progress?: boolean | { show?: boolean }, // to show/hide a card progress bar
	start_date?: boolean | { show?: boolean }, // to show/hide the start date
	end_date?: boolean | { show?: boolean }, // to show/hide the end date
	menu?: boolean | { show?: boolean }, // to show/hide a card menu
	attached?: boolean | { show?: boolean }, // to show/hide an attachment
	users?: { // to show/hide users data
		show?: boolean,
		values?: [
			{
				id: string | number, // a user ID
				path?: string, // a path to the user picture
				label?: string // a user name
			},
			{...}
		]
	},
	priority?: { // to show/hide a card priority
		show?: boolean,
		values?: [
			{
				id: string | number, // a priority ID
				color: string, // a valid HEX code
				label?: string // a priority name
			},
			{...}
		]
	},
	color?: boolean | { show?: boolean }, // to show/hide a colored top line of a card
	cover?: boolean | { show?: boolean }, // to show/hide a card image
	headerFields?: [ // an array of custom fields
		{
			key: string, // a key of the custom field
			// available types:
			// text, textarea, date, select, combo, multiselect, files, color, progress
			type: string, // a type of the custom field
		},
		{...}
	]
}
```

### Default config

```js
const defaultPriorities = [
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const defaultCardShape = {
	label: true,
	description: false,
	progress: false,
	start_date: false,
	end_date: false,
	users: false,
	priority: {
		show: false,
		values: defaultPriorities
	},
	color: false,
	cover: false,
	attached: false,
	menu: true
};
```

### Example

```jsx {39}
const users = [ // user data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
	{ id: 1, color: "#FF5252", label: "high" },
	{ id: 2, color: "#FFC975", label: "medium" },
	{ id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // card configs
	label: true,
	description: true,
	progress: true,
	start_date: true,
	end_date: true,
	menu: true,
	attached: true,
	priority: {
		show: true,
		values: cardPriority
	},
	users: {
		show: true,
		values: users
	},
	headerFields: [
		{
			key: "sprint",
			type: "text",
			label: "Custom field"
		}
	]
};

new kanban.Kanban("#root", {
	...,
	cardShape
});
```

**Related article:** [Configuration](../../../guides/configuration#cards)
