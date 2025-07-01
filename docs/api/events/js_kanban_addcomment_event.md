---
sidebar_label: add-comment
title: add-comment Event
description: Explore the add-comment event in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try examples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# add-comment

### Description

@short: Triggered when a new comment is added

### Usage

~~~jsx {}
"add-comment": ({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    },
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **add-comment** event receives an object with these properties:

- `id` -  (optional) the ID assigned to the new comment
- `cardId` - (required) the ID of the card where the comment is being added
- `comment` - (required) an object defining the new comment details. It can include:
    - `text` - (optional) the comment's text content
    - `date` - (optional) the date when the comment was made
    - `html` - (optional) the comment's HTML content. To enable rendering of HTML instead of text, activate the `html` property in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration
- `skipProvider` - (optional) controls whether the request to the server is prevented or not

:::info
To manage internal event handling, refer to the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen to the "add-comment" event
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Change log:** This event was introduced in v1.4
