---
sidebar_label: addComment()
title: addComment Method
description: You can learn about the addComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addComment()

### Description

@short: Adds a new comment to the specified card by its ID

### Usage

~~~jsx {}
addComment({
	id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}): void;
~~~

### Parameters

- `id` -  (optional) the ID of the new comment
- `cardId` - (required) the ID of the card, to which the comment to be added
- `comment` - (required) the configuration object of the new comment. Here you can specify the following parameters:
	- `text` - (optional) the text of the new comment
	- `date` - (optional) the date of the new comment
	- `html` - (optional) the HTML markup of the new comment. Enable the `html` property of the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config, to display the HTML markup instead of text

### Example

~~~jsx {7-15}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// add new comment
board.addComment({
	id: 1,
	cardId: 1,
	comment: {
        text: "", 
		date: new Date("01/07/2021"),
        html: "<b>Important comment</b>"
    }
});
~~~

**Change log:** The method was added in v1.4