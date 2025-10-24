---
sidebar_label: deleteComment()
title: deleteComment Method
description: You can learn about the deleteComment method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# deleteComment()

### Description

@short: Removes a comment from a card by specifying its ID

### Usage

~~~jsx {}
deleteComment({
    id: string | number, 
    cardId: string | number
}): void;
~~~

### Parameters

- `id` -  (required) the identifier of the comment that should be removed
- `cardId` - (required) the identifier of the card containing the comment

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