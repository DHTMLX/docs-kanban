---
sidebar_label: POST /links
title: POST /links REST Route API
description: Read the POST /links REST route API for DHTMLX Kanban. Learn how to create a new link and return its new ID.
---

# POST `/links`

### Description

@short: Creates a new link and returns a json object with a new link ID

The route handles the **HTTP POST** request made to the `/links` path.

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type                   | Description |
| ----------- | ---------------------- | ----------- |
| `source`    |  *number* or *string*  | *Required*. The ID of the start link. |
| `target`    |  *number* or *string*  | *Required*. The ID of the end link.  |
| `relation`  |  *string*              | *Required*. The type of the relation created by the link. |

Example:

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### Response

The route returns a json object with a new link ID.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)
