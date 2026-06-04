---
sidebar_label: POST /columns
title: POST /columns REST Route API
description: Read the POST /columns REST route API for DHTMLX Kanban. Learn how to create a new column and return its ID.
---

# POST `/columns`

### Description

@short: Adds a new column and returns a json object with the column id

The route handles the **HTTP POST** request made to the `/columns` path.

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The name of a new column to be added.|

Example:

~~~json
{
    "label": "New column",
}
~~~

### Response

The route returns a json object with a new column id.

Example:

~~~json
{ 
   "id": 4
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
