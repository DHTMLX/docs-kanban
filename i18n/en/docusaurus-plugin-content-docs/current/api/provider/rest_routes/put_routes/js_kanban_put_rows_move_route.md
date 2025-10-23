---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: You can learn about the PUT /rows/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/rows/{id}/move`

### Description

@short: Moves a row to a new position

This route processes an **HTTP PUT** request sent to the `rows/{id}/move` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The identifier of the row to be moved.|

### Payload

The server expects a JSON object containing the following property:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *Optional*. The ID of the row that the moved row should be positioned before.|

Example:

~~~json
{
    "before": 3
}
~~~

### Response

The server responds with a JSON object indicating the ID of the row that was moved.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates if the request was successful (response.status == 200) or if it failed (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)