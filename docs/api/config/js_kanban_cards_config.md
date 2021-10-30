---
sidebar_label: cards
title: JS Kanban cards property
description: You can learn about the cards property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# cards

### Description

Array of objects containing the **cards data**. This parameter is mandatory

### Usage

```js
cards: [
	{
		id?: string | number, // a card ID
		label?: string, // a card label
		description?: string, // a value of the description section
		progress?: number, // a value of the progress bar (from 0 to 100)
		users?: array, // an array with the users IDs
		start_date?: Date, // a value of the start date
		end_date?: Date, // a value of the end date
		cover?: string, // a valid HEX color code
		status?: string | number, // a card status ID
		attached?: [ // an array with the data of the attached file
			id: string | number,
			url?: string, // a link to the file to be attached
			previewURL?: string, // a link to the preview image
			coverURL?: string, // a link to the image to be set as a cover
			name?: string, // a file name
			// enables a cover image
			// if true, the cover image will be downloaded via the "coverURL"
			isCover?: boolean
		],
		[custom_key: string]?: any // a custom key of the card
	}, ...
]
```

:::info
If you want to load the cards data via the **parse()** method, set the **cards** property to the empty array
:::

### Example

```jsx {19}
const cards = [
	{
		id: 1,
		stage: "backlog",
		label: "Integration with React",
		description: "Some description",
		progress: 25,
		users: [1, 2],
		start_date: new Date("01/05/2021"),
		end_date: new Date("01/15/2021"),
		cover: "#65D3B3",
		status: 1,
		type: "feature", // custom field
	}, ...
];

new kanban.Kanban("#root", {
	columns,
	cards
});
```
