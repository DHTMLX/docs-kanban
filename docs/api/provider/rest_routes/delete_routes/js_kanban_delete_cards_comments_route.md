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

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The identifier of the card from which the comment will be deleted. |
| `commentId` |  number     | *Required*. The identifier of the comment to be deleted. |

### Payload

No payload needs to be sent with this request.

### Response

The server responds with a JSON object containing the user ID who deleted the comment.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates the result: 200 means the request was successful, while 500 indicates an error.

---

**Related articles**: [Working with server](/guides/working_with_server.md)
