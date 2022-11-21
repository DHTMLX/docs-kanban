---
sidebar_label: Post /columns
title: Post /columns
description: You can learn about the Post /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Post /columns

### Description

@short: Adds a new column and returns a json object with the column id

The route handles the **HTTP POST** request made to the **'/columns'** path.

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name of a new column to be added.|

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

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [api.setNext()](api/internal/js_kanban_setnext_method.md)