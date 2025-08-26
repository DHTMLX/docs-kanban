---
sidebar_label: DELETE /rows
title: DELETE /rows
description: You can learn about the DELETE /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/rows`

### Description

@short: Removes a row (swimlane) from the data.

This route processes an **HTTP DELETE** request sent to the `/rows/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The unique identifier of the row to be removed.|

### Payload

No payload needs to be sent with the request.

### Response

No content is returned. The HTTP status code indicates the outcome: a status of 200 means the deletion was successful, while 500 indicates an error.

---

**Related articles**: [Working with server](/guides/working_with_server)
