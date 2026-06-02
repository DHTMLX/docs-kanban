---
sidebar_label: update-comment
title: update-comment Event API
description: Read the update-comment event API for DHTMLX Kanban. Learn how to handle the event triggered when updating a comment.
---

# update-comment

### Description

@short: Fires when updating a comment

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

The callback of the **update-comment** event can take an object with the following parameters:

- `id` -  (optional) the ID of the comment to be updated
- `cardId` - (required) the ID of the card which comment will be updated
- `comment` - (required) the configuration object of the comment to be updated. Here you can specify the following parameters:
    - `id` -  (optional) the ID of the updated comment
    - `cardId` - (optional) the ID of the card, to which the updated comment will be added
    - `text` - (optional) the text of the updated comment
    - `date` - (optional) the date of the updated comment
    - `html` - (optional) the HTML markup of the updated comment. Enable the `html` property of the [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) config, to display the HTML markup instead of text
- `skipProvider` - (optional) enables/disables preventing the request from being sent to the server

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// subscribe on the "update-comment" event
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Change log:** The event was added in v1.4
