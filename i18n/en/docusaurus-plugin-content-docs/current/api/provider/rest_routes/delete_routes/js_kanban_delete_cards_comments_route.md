---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: You can learn about the DELETE /cards/{cardId}/comments/{commentId} REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### Description

@short: Deletes a comment from a card

This route processes an **HTTP DELETE** request sent to the `cards/{cardId}/comments/{commentId}` endpoint.

### Path parameters

The following parameters are included in the request URL:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The ID of the card from which the comment will be deleted. |
| `commentId` |  number     | *Required*. The ID of the comment that needs to be removed. |

### Payload

No payload is needed for this request.

### Response

The server responds with a JSON object containing the user ID of the person who deleted the comment.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or if it failed (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)