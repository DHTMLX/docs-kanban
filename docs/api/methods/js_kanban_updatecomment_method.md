---
sidebar_label: updateComment()
title: updateComment Method
description: You can learn about the updateComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateComment()

### Description

@short: Modify a card comment by specifying its ID

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

- `id` -  (optional) the identifier of the comment to be modified
- `cardId` - (required) the identifier of the card containing the comment to update
- `comment` - (required) an object describing the updated comment details. It can include:
    - `id` -  (optional) the identifier of the comment being updated
    - `cardId` - (optional) the identifier of the card where the updated comment will be placed
    - `text` - (optional) the new text content of the comment
    - `date` - (optional) the new date associated with the comment
    - `html` - (optional) the new HTML content for the comment. To display HTML instead of plain text, enable the `html` property in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) configuration

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
