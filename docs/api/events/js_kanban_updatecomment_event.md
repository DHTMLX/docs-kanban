---
sidebar_label: update-comment
title: update-comment Event
description: Get to know the update-comment event from the DHTMLX JavaScript Kanban library. Check out developer guides and API references, explore code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# update-comment

### Description

@short: Triggered when a comment gets updated

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

The callback for the **update-comment** event receives an object with these parameters:

- `id` -  (optional) the ID of the comment being updated
- `cardId` - (required) the ID of the card where the comment is located
- `comment` - (required) an object with the updated comment details. It can include:
    - `id` -  (optional) the updated comment's ID
    - `cardId` - (optional) the card ID where the updated comment will be added
    - `text` - (optional) the updated comment text
    - `date` - (optional) the updated comment date
    - `html` - (optional) the updated comment's HTML markup. To show HTML instead of text, enable the `html` property in the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config
- `skipProvider` - (optional) controls whether the update request should be sent to the server or not

:::info
To manage internal events, you can use the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
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
