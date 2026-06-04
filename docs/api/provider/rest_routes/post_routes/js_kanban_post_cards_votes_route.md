---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote REST Route API
description: Read the POST /cards/{cardId}/vote REST route API for DHTMLX Kanban. Learn how to add a vote to a card and return the voting user ID.
---

# POST `/cards/{cardId}/vote`

### Description

@short: Adds a new vote to the card and returns a json object with the voting user ID

The route handles the **HTTP POST** request made to the `/cards/{cardId}/vote` path.

### Payload

No payload is required.

### Response

The route returns a json object with the voting user ID.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
