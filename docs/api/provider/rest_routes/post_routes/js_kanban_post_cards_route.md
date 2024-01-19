---
sidebar_label: POST /cards
title: POST /cards
description: You can learn about the POST /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards`

### Description

@short: Creates a new card and returns a json object with a new card ID

The route handles the **HTTP POST** request made to the `/cards` path.

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The name of a new card to be added.|
| `column`    |  number     | *Required*. The target column ID.|
| `row`       |  number     | *Required*. The target row ID.|

Example:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### Response

The route returns a json object with a new card ID.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
