---
sidebar_label: addComment()
title: addComment Method
description: You can learn about the addComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# addComment()

### Description

@short: Inserts a new comment into the specified card using its ID

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

- `id` -  (optional) identifier for the new comment
- `cardId` - (required) identifier of the card where the comment will be added
- `comment` - (required) object defining the new comment's details. It can include:
    - `text` - (optional) the comment's text content
    - `date` - (optional) the date associated with the comment
    - `html` - (optional) HTML content for the comment. To display HTML instead of plain text, enable the `html` property in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration

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