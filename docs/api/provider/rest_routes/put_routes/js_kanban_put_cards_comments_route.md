---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId} REST Route API
description: Read the PUT /cards/{cardId}/comments/{commentId} REST route API for DHTMLX Kanban. Learn how to update a card comment and return its ID.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### Description

@short: Updates a comment in a card and returns a json object with the ID of the updated comment

The route handles the **HTTP PUT** request made to the `cards/{cardId}/comments/{commentId}` path.

### Path parameters

The next parameters are sent in the request line:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The ID of the card, which comment is updated. |
| `commentId` |  number     | *Required*. The ID of the comment to be updated. |

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `text`      | string      | *Required*. The comment's text.|

Example:

~~~json
{
    "text": "The comment's content"
}
~~~

### Response

The server returns a json object with a card ID.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
