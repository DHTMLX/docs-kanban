---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: You can learn about the POST /cards/{cardId}/comments REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards/{cardId}/comments`

### Description

@short: Adds one or more new comments to a card and returns a JSON object containing the ID of the newly added comment.

This route processes **HTTP POST** requests sent to the `/cards/{cardId}/comments` endpoint.

### Payload

The server expects a JSON object with the following properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `text`      | string      | *Required*. The content of the comment. |
| `date`      | object      | *Required*. The date when the comment was made. |

Example:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### Response

The response includes a JSON object with the ID of the newly added comment.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)