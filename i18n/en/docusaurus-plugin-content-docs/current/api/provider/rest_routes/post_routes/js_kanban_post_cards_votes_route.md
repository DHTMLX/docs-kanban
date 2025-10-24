---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: You can learn about the POST /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards/{cardId}/vote`

### Description

@short: Adds a vote to the specified card and returns a JSON object containing the ID of the user who voted.

This route processes an **HTTP POST** request sent to the `/cards/{cardId}/vote` endpoint.

### Payload

No payload needs to be sent with the request.

### Response

The response includes a JSON object with the ID of the user who cast the vote.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates the result of the request: 200 means success, while 500 indicates a failure.

---

**Related articles**: [Working with server](guides/working_with_server.md)