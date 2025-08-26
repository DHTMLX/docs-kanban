---
sidebar_label: DELETE /cards
title: DELETE /cards
description: You can learn about the DELETE /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/cards`

### Description

@short: Removes data from a card

This route processes the **HTTP DELETE** request sent to the `/cards/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the card to be removed.|

### Payload

No payload needs to be sent.

### Response

No content is returned. The HTTP status code indicates if the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](/guides/working_with_server)
