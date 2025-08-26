---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: This section covers the POST /cards/{cardId}/comments REST route from the DHTMLX JavaScript Kanban library documentation. It includes developer guides, API references, practical code samples, live demos, and offers a free 30-day trial of DHTMLX Kanban.
---

# POST `/cards/{cardId}/comments`

### Description

@short: Adds one or more new comments to the specified card and returns a JSON object containing the ID of the newly added comment.

This endpoint processes **HTTP POST** requests sent to `/cards/{cardId}/comments`.

### Payload

The server expects a JSON object with the following properties:

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `text`      | string      | *Required*. The content of the comment.|
| `date`      | object      | *Required*. The date of the comment.|

Example:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### Response

The response includes a JSON object containing the ID of the newly added comment.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates the outcome of the request: a status of 200 means success, while 500 indicates an error.

---

**Related articles**: [Working with server](/guides/working_with_server)
