---
sidebar_label: update-comment
title: update-comment Event
description: Find out about the update-comment event in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# update-comment

### Description

@short: Triggered when a comment is updated

### Usage

~~~jsx {}
"update-comment": ({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    },
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **update-comment** event receives an object with these properties:

- `id` -  (optional) the ID of the comment being updated
- `cardId` - (required) the ID of the card where the comment is located
- `comment` - (required) an object describing the updated comment, which may include:
    - `id` -  (optional) the ID of the comment after update
    - `cardId` - (optional) the ID of the card the updated comment belongs to
    - `text` - (optional) the updated comment text
    - `date` - (optional) the updated comment date
    - `html` - (optional) the updated comment’s HTML markup. To display HTML instead of text, enable the `html` option in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config
- `skipProvider` - (optional) controls whether the request to the server is skipped or not

:::info
To manage internal events, you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// listen for the "update-comment" event
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Change log:** This event was introduced in v1.4