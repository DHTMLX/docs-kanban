---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: You can learn about the DELETE /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/cards/{cardId}/vote`

### Description

@short: This endpoint removes a vote from a specified card and responds with a JSON object containing the user ID who removed the vote.

This route processes an **HTTP DELETE** request sent to the `/cards/{cardId}/vote` URL.

### Path parameters

The following parameter is included in the request URL:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `cardId`   | number      | *Required*. The ID of the card from which the vote will be removed.|

### Payload

No payload is necessary for this request.

### Response

The response returns a JSON object with the user ID that removed the vote.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)