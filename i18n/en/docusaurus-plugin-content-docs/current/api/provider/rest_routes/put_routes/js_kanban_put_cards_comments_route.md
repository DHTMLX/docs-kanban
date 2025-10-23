---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: You can learn about the PUT /cards/{cardId}/comments/{cardId} REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### Description

@short: Updates a comment within a card and returns a JSON object containing the ID of the updated comment.

This route processes an **HTTP PUT** request sent to the `cards/{cardId}/comments/{commentId}` endpoint.

### Path parameters

The following parameters are included in the request URL:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The ID of the card containing the comment to update. |
| `commentId` |  number     | *Required*. The ID of the comment that needs to be updated. |

### Payload

The request body should contain a JSON object with the following property:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `text`      | string      | *Required*. The updated text of the comment.|

Example:

~~~json
{
    "text": "The comment's content"
}
~~~

### Response

The server responds with a JSON object containing the ID of the updated comment.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates the outcome of the request: a status of 200 means success, while 500 indicates a failure.

---

**Related articles**: [Working with server](guides/working_with_server.md)