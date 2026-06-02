---
sidebar_label: DELETE /cards
title: DELETE /cards REST Route API
description: Read the DELETE /cards REST route API for DHTMLX Kanban. Learn how to delete a card.
---

# DELETE `/cards`

### Description

@short: Deletes data on a card

The route handles the **HTTP DELETE** request made to the `/cards/{id}` path. 

### Path parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the card to be deleted.|

### Payload

No payload is required.

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
