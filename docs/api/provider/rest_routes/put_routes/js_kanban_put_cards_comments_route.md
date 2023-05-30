---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: You can learn about the PUT /cards/{cardId}/comments/{cardId} REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT /cards/{cardId}/comments/{cardId}

### Description

@short: Updates a comment in a card and returns a json object with the card ID

The route handles the **HTTP PUT** request made to the **'cards/{cardId}/comments/{cardId}'** path.

### Query parameters

The query parameter is sent in the request line:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *Required*. The ID of the card, which comment is updated. |
| `commentId` |  number     | *Required*. The ID of the comment to be updated. |

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `text`      | number      | *Required*. The comment's text.|
| `date`      | object      | *Required*. The comment's date.|

Example:

~~~json
{
    "text": "The comment's content",
    "date": "2023-05-18T09:13:56.656Z",
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