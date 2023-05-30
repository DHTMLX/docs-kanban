---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: You can learn about the POST /cards/{cardId}/comments REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST /cards/{cardId}/comments

### Description

@short: Adds a new comment(s) to the card and returns a json object with the card ID

The route handles the **HTTP POST** request made to the **'/cards/{cardId}/comments'** path.

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

The route returns a json object with a card ID, to which the new comment(s) will be added to.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)