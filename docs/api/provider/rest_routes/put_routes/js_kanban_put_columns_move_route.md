---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: You can learn about the PUT /columns/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/columns/{id}/move`

### Description

@short: Changes the position of a column by moving it to a specified spot.

This route processes an **HTTP PUT** request sent to `columns/{id}/move`.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The identifier of the column to be moved.|

### Payload

The server expects a JSON object containing the following property:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *Optional*. The ID of the column that the moved column should be placed in front of.|

Example:

~~~json
{
    "before": 3
}
~~~

### Response

The server responds with a JSON object indicating the ID of the column that was moved.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code indicates the outcome of the request: a status of 200 means it was successful, while 500 indicates an error.

---

**Related articles**: [Working with server](/guides/working_with_server)
