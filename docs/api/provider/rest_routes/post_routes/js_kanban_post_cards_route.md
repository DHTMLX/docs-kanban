---
sidebar_label: POST /cards
title: POST /cards REST Route API
description: Read the POST /cards REST route API for DHTMLX Kanban. Learn how to create a new card and return its new ID.
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
