---
sidebar_label: deleteComment()
title: deleteComment Method API
description: Read the deleteComment method API for DHTMLX Kanban. Learn how to delete a card comment by its ID.
---

# deleteComment()

### Description

@short: Delete a card comment by its ID

### Usage

~~~jsx {}
deleteComment({
    id: string | number, 
    cardId: string | number
}): void;
~~~

### Parameters

- `id` -  (required) the ID of the comment to be deleted
- `cardId` - (required) the ID of the card which comment to be deleted

### Example

~~~jsx {7-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// delete comment
board.deleteComment({
    id: 1,
    cardId: 1,
});
~~~

**Change log:** The method was added in v1.4
