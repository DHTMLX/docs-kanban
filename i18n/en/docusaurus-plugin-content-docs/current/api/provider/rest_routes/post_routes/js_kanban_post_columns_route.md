---
sidebar_label: POST /columns
title: POST /columns
description: You can learn about the POST /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/columns`

### Description

@short: Creates a new column and returns a JSON object containing the column id.

This route processes an **HTTP POST** request sent to the `/columns` endpoint.

### Payload

The server expects a JSON object with the following property:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The name for the new column to be created.|

Example:

~~~json
{
    "label": "New column",
}
~~~

### Response

The response returns a JSON object with the id of the newly created column.

Example:

~~~json
{ 
   "id": 4
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)