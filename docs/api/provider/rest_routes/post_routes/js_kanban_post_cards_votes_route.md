---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: You can learn about the POST /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards/{cardId}/vote`

### Description

@short: Adds a new vote to the card and returns a json object with the voting user ID

This route accepts an **HTTP POST** request at the `/cards/{cardId}/vote` endpoint.

### Payload

No payload needs to be sent with this request.

### Response

The response includes a JSON object containing the ID of the user who voted.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates the outcome: a status of 200 means the request was successful, while 500 indicates an error.

---

**Related articles**: [Working with server](/guides/working_with_server)
