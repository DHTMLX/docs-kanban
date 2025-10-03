---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: You can learn about the PUT /rows/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/rows/{id}/move`

### Description

@short: Moves a row to a specified position

The route handles the **HTTP PUT** request made to the `rows/{id}/move` path.

### Path parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the row to be moved.|

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *Optional*. The ID of the row before which the moved row should be placed.|

Example:

~~~json
{
    "before": 3
}
~~~

### Response

The server returns a json object with the ID of the moved row.

Example:

~~~json
{
    "id": 4
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
