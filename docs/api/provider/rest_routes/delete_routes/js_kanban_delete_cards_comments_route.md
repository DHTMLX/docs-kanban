---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: You can learn about the DELETE /cards/{cardId}/comments/{commentId} REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### Description

@short: Removes a comment from a card

The route handles the **HTTP DELETE** request made to the `cards/{cardId}/comments/{commentId}` path.

### Path parameters

The next parameters are sent in the request line:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The ID of the card, from which the comment will be deleted. |
| `commentId` |  number     | *Required*. The ID of the comment to be removed. |

### Payload

No payload is required.

### Response

The server returns a json object with a user ID that removes a comment.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
