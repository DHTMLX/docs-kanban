---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: You can learn about the DELETE /cards/{cardId}/vote REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE /cards/{cardId}/vote

### Description

@short: Removes a vote from a card

The route handles the **HTTP DELETE** request made to the **'/cards/{cardId}/vote'** path.

### Query parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `cardId`   |  number     | *Required*. The ID of the card, from which the vote will be removed.|

### Payload

No payload is required.

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
