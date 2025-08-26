---
sidebar_label: DELETE /columns
title: DELETE /columns
description: You can learn about the DELETE /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/columns`

### Description

@short: Removes a column's data

This route processes **HTTP DELETE** requests sent to the `/columns/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. Specifies the ID of the column to remove.|

### Payload

No payload is needed.

### Response

No content is returned. The status code indicates the outcome: success with response.status == 200, or failure with response.status == 500.

---

**Related articles**: [Working with server](/guides/working_with_server)
