---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments REST Route API
description: Read the POST /cards/{cardId}/comments REST route API for DHTMLX Kanban. Learn how to add a new comment to a card and return the new comment ID.
---

# POST `/cards/{cardId}/comments`

### Description

@short: Adds a new comment(s) to the card and returns a json object with the ID of the new added comment

The route handles the **HTTP POST** request made to the `/cards/{cardId}/comments` path.

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `text`      | string      | *Required*. The comment's text.|
| `date`      | object      | *Required*. The comment's date.|

Example:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### Response

The route returns a json object with the ID of the new added comment.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
