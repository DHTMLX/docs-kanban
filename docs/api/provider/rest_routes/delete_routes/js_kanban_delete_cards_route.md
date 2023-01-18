---
sidebar_label: DELETE /cards
title: DELETE /cards
description: You can learn about the DELETE /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE /cards

### Description

@short: Deletes data on a card

The route handles the **HTTP DELETE** request made to the **'/cards/{id}'** path. 

### Query parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the card to be deleted.|

### Payload

No payload is required.

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).


---

**Related articles**: [Working with server](guides/working_with_server.md)
