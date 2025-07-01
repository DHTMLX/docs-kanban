---
sidebar_label: addComment()
title: addComment Method
description: You can learn about the addComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addComment()

### Description

@short: Inserts a new comment into the specified card using its ID.

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

- `id` -  (optional) the unique identifier for the new comment
- `cardId` - (required) the identifier of the card where the comment will be added
- `comment` - (required) an object defining the new comment. The available fields include:
    - `text` - (optional) the content of the comment in plain text
    - `date` - (optional) the timestamp for the comment
    - `html` - (optional) the comment formatted in HTML. To show HTML content instead of plain text, the `html` option in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration must be enabled

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

**Change log:** This method was introduced in version 1.4
