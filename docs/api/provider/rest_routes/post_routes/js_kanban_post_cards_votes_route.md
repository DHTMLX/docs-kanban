---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: You can learn about the POST /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards/{cardId}/vote`

### Description

@short: Adds a new vote to the card and returns a json object with the card ID

The route handles the **HTTP POST** request made to the `/cards/{cardId}/vote` path.

### Payload

No payload is required.

### Response

The route returns a json object with a card ID, to which the vote will be added to.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
