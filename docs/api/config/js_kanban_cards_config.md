---
sidebar_label: cards
title: cards Config
description: You can learn about the cards config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cards

### Description

@short: an array of objects containing the cards data. This parameter is mandatory!

### Usage

~~~jsx {}
cards: [
	{
		id?: string | number,
		label?: string,
		description?: string,
		progress?: number,
		users?: array,
		start_date?: Date,
		end_date?: Date,
		color?: string,
		priority?: string | number,
		attached?: [
			id: string | number,
			url?: string,
			previewURL?: string,
			coverURL?: string,
			name?: string,
			isCover?: boolean
		],
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
- `users` - (optional) an array with the assigned users **ID**s. To specify the assigned users, you need to define an array with users data in the [cardShape](../js_kanban_cardshape_config) property (see the **users** parameter). The users are displayed in the **Users** field
- `start_date` - (optional) a start date value. It is displayed in the **Start date** field
- `end_date` - (optional) an end date value. It is displayed in the **End date** field
- `color` - (optional) a valid HEX color code. It is the color of the card top line
- `priority` - (optional) a card priority **ID**. To specify the card priority, you need to define an array with priorities data in the [cardShape](../js_kanban_cardshape_config) property (see the **priority** parameter). It is displayed in the **Priority** field
- `attached` - (optional) an array with data of the attached file(s). It is displayed in the **Attachment** field. Here you can specify the following parameters:
	- `id` - (mandatory) an **ID** of the attached file 
	- `url` - (optional) a path to the file to be attached
	- `previewURL` - (optional) a path to the preview image
	- `coverURL` - (optional) a path to the image to be set as a cover
	- `name` - (optional) a file name
	- `isCover` - (optional) enables a cover image. If **true**, the cover image will be downloaded via the "coverURL" url
- `custom_key` - (optional) a custom key of the card. You can specify the custom keys to place the card into column and row. See the [columnKey](../js_kanban_columnkey_config) and [rowKey](../js_kanban_rowkey_config) properties

:::info
If you want to load the cards data via the [**parse()**](../../methods/js_kanban_parse_method) method, set the **cards** property to the empty array
:::

### Example

~~~jsx {1-29,33}
const cards = [
	{
		id: 1,
		label: "Integration with React",
		description: "Some description",
		progress: 25,
		users: [1, 2],
		start_date: new Date("01/05/2021"),
		end_date: new Date("01/15/2021"),
		color: "#65D3B3",
		priority: 1,
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
		// custom field to place the card into the "feature" row (rowKey is required)
		type: "feature",
		// custom field to place the card into the "backlog" column (columnKey is required)
		stage: "backlog"
	},
	{...} // other cards data
];

new kanban.Kanban("#root", {
	columns,
	cards,
	// other parameters
});
~~~

**Related articles:** [Working with data](../../../guides/working_with_data)
