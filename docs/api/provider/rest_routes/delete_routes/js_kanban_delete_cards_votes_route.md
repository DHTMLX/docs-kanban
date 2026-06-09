---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote REST Route API
description: Read the DELETE /cards/{cardId}/vote REST route API for DHTMLX Kanban. Learn how to remove a vote from a card.
---

# DELETE `/cards/{cardId}/vote`

### Description

@short: Removes a vote from a card and returns a json object with a user ID that removes a vote

The route handles the **HTTP DELETE** request made to the `/cards/{cardId}/vote` path.

### Path parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `cardId`   | number      | *Required*. The ID of the card, from which the vote will be removed.|

### Payload

No payload is required.

### Response

The route returns a json object with a user ID that removes a vote.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
