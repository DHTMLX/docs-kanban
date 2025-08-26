---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: You can learn about the DELETE /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/cards/{cardId}/vote`

### Description

@short: Removes a vote from a card and returns a json object with a user ID that removes a vote

This route processes an **HTTP DELETE** request sent to `/cards/{cardId}/vote`.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `cardId`   |  number     | *Required*. The ID of the card from which the vote will be removed.|

### Payload

No payload needs to be sent.

### Response

The response is a JSON object containing the user ID of the person who removed their vote.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or if an error occurred (response.status == 500).

---

**Related articles**: [Working with server](/guides/working_with_server)
