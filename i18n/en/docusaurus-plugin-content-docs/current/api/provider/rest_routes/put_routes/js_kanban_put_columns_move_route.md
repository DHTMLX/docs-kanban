---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: You can learn about the PUT /columns/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/columns/{id}/move`

### Description

@short: Moves a column to a specified position

This route handles an **HTTP PUT** request sent to the `columns/{id}/move` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the column that needs to be moved.|

### Payload

The server expects a JSON object containing the following property:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *Optional*. The ID of the column before which the moved column should be inserted.|

Example:

~~~json
{
    "before": 3
}
~~~

### Response

The server responds with a JSON object containing the ID of the column that was moved.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or if it encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)