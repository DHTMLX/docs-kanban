---
sidebar_label: updateComment()
title: updateComment Method
description: You can learn about the updateComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateComment()

### Description

@short: Modify a card comment by its ID

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

- `id` -  (optional) the ID of the comment that needs to be updated
- `cardId` - (required) the ID of the card containing the comment to update
- `comment` - (required) an object defining the updated comment details. This can include:
    - `id` -  (optional) the ID of the comment being updated
    - `cardId` - (optional) the ID of the card where the updated comment will be placed
    - `text` - (optional) the new text content of the comment
    - `date` - (optional) the date associated with the updated comment
    - `html` - (optional) the HTML content for the updated comment. To show HTML instead of plain text, make sure the `html` property is enabled in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration

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

**Change log:** This method was introduced in version 1.4