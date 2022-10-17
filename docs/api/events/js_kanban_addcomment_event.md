---
sidebar_label: add-comment
title: add-comment Event
description: You can learn about the add-comment event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-comment

### Description

@short: Fires when adding a new comment

### Usage

~~~jsx {}
"add-comment": ({
	id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}) => void;
~~~

### Parameters

The callback of the **add-comment** event can take an object with the following parameters:

- `id` -  (optional) the ID of the new comment
- `cardId` - (required) the ID of the card, to which the comment to be added
- `comment` - (required) the configuration object of the new comment. Here you can specify the following parameters:
	- `text` - (optional) the text of the new comment
	- `date` - (optional) the date of the new comment
	- `html` - (optional) the HTML markup of the new comment. Enable the `html` property of the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config, to display the HTML markup instead of text

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// subscribe on the "add-comment" event
board.api.on("add-comment", (obj) => {
	console.log(obj.comment);
});
~~~

**Change log:** The event was added in v1.4