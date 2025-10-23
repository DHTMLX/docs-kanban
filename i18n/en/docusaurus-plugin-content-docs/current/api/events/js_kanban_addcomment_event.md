---
sidebar_label: add-comment
title: add-comment Event
description: You can learn about the add-comment event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
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
- `comment` - (required) an object describing the new comment. It can include:
    - `text` - (optional) the comment’s text content
    - `date` - (optional) the date associated with the comment
    - `html` - (optional) the HTML markup for the comment. To show HTML instead of plain text, enable the `html` option in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration
- `skipProvider` - (optional) controls whether the request to the server is skipped or not

:::info
To work with internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "add-comment" event
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Change log:** This event was introduced in version 1.4