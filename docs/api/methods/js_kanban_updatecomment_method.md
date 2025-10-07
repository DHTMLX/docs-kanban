---
sidebar_label: updateComment()
title: updateComment Method
description: You can learn about the updateComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateComment()

### Description

@short: Update a card comment by its ID

### Usage

~~~jsx {}
updateComment({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    }
}): void;
~~~

### Parameters

- `id` -  (optional) the ID of the comment to be updated
- `cardId` - (required) the ID of the card which comment to be updated
- `comment` - (required) the configuration object of the comment to be updated. Here you can specify the following parameters:
    - `id` -  (optional) the ID of the updated comment
    - `cardId` - (optional) the ID of the card, to which the updated comment to be added
    - `text` - (optional) the text of the updated comment
    - `date` - (optional) the date of the updated comment
    - `html` - (optional) the HTML markup of the updated comment. Enable the `html` property of the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config, to display the HTML markup instead of text

### Example

~~~jsx {7-17}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// update comment
board.updateComment({
    id: 1,
    cardId: 1,
    comment: {
        id: 2,
        cardId: 4,
        text: "", 
        date: new Date("01/08/2021"),
        html: "<b>Updated comment</b>"
    }
});
~~~

**Change log:** The method was added in v1.4
