---
sidebar_label: POST /links
title: POST /links
description: You can learn about the POST /links REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/links`

### Description

@short: Creates a new link and returns a json object with a new link ID

The route handles the **HTTP POST** request made to the `/links` path.

### Payload

The server expects to receive a json object with the next properties:

| Name        | Type                   | Description |
| ----------- | ---------------------- | ----------- |
| `source`    |  *number* or *string*  | *Required*. The ID of a master link. |
| `target`    |  *number* or *string*  | *Required*. The ID of a slave link.  |
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
