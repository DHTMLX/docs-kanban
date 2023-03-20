---
sidebar_label: cards
title: cards Config
description: You can learn about the cards config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cards

### Description

@short: Optional. An array of objects containing the cards data

### Usage

~~~jsx {}
cards?: [
	{
		id?: string | number,
		label?: string,
		description?: string,
		progress?: number,
		start_date?: Date,
		end_date?: Date,
		attached?: [
			id: string | number,
			url?: string,
			previewURL?: string,
			coverURL?: string,
			name?: string,
			isCover?: boolean
		],
		color?: string,
		users?: array,
		priority?: string | number,
		css?: string,
		[custom_key: string]?: any
	},
	{...} // other cards data
];
~~~

### Parameters

For each card you can specify the following parameters (data):

- `id` - (optional) a card **ID**. It is used for managing the card via the corresponding methods
- `label` - (optional) a card label. It is displayed in the **Label** field
- `description` -  (optional)a card description. It is displayed in the **Description** field
- `progress` - (optional) a progress bar value. You can specify the value in the range from 0 to 100 points. It is displayed in the **Progress bar** field
- `start_date` - (optional) a start date value. It is displayed in the **Start date** field
- `end_date` - (optional) an end date value. It is displayed in the **End date** field
- `attached` - (optional) an array with data of the attached file(s). It is displayed in the **Attachment** field. Here you can specify the following parameters:
	- `id` - (required) an **ID** of the attached file 
	- `url` - (optional) a path to the file to be attached
	- `previewURL` - (optional) a path to the preview image
	- `coverURL` - (optional) a path to the image to be set as a cover
	- `name` - (optional) a file name
	- `isCover` - (optional) enables a cover image. If **true**, the cover image will be downloaded via the "coverURL" url
- `color` - (optional) a valid HEX color code. It is the color of the card top line
- `users` - (optional) an array with the assigned users **ID**s. To specify the assigned users, you need to define an array with users data in the [cardShape.users](../js_kanban_cardshape_config) property. The users are displayed in the **Users** field
- `priority` - (optional) a card priority **ID**. To specify the card priority, you need to define an array with priorities data in the [cardShape.priority](../js_kanban_cardshape_config) property. It is displayed in the **Priority** field
- `css` - (optional) defines css styles for a separate card
- `custom_key` - (optional) a custom key of the card. You can specify the custom keys to place the card into column and row. See the [columnKey](../js_kanban_columnkey_config) and [rowKey](../js_kanban_rowkey_config) properties

:::info
If you want to load new data for cards dynamically, you can use the [**parse()**](../../methods/js_kanban_parse_method) method!
:::

### Example

~~~jsx {1-32,36}
const cards = [
	{
		id: 1,
		label: "Integration with React",
		description: "Some description",
		progress: 25,
		start_date: new Date("01/05/2021"),
		end_date: new Date("01/15/2021"),
		attached: [
			{
				id: 234,
				url: "../assets/img-1.jpg",
				previewURL: "../assets/img-1.jpg",
				coverURL: "../assets/img-1.jpg",
				name: "img-1.jpg",
				isCover: true
			},
			{...} // other attached files data
		],
		color: "#65D3B3",
		users: [1, 2],
		priority: 1,
		// custom field to place the card into the "feature" row 
		// the rowKey config needs to be set to the "type" value
		type: "feature",
		// custom field to place the card into the "backlog" column 
		// the columnKey config needs to be set to the "stage" value
		stage: "backlog",
		css: "red",
	},
	{...} // other cards data
];

new kanban.Kanban("#root", {
	columns,
	cards,
	// other parameters
});
~~~

**Change log:** The ***css*** parameter was added in v1.4

**Related articles:**
- [Working with data](../../../guides/working_with_data)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**Related sample:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)