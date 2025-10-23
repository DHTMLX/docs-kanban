---
sidebar_label: POST /links
title: POST /links
description: You can learn about the POST /links REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/links`

### Description

@short: Adds a new link and returns a JSON object containing the newly created link ID.

This route processes **HTTP POST** requests sent to the `/links` endpoint.

### Payload

The server expects a JSON object with the following properties:

| Name        | Type                   | Description |
| ----------- | ---------------------- | ----------- |
| `source`    |  *number* or *string*  | *Required*. The ID of the starting point of the link. |
| `target`    |  *number* or *string*  | *Required*. The ID of the ending point of the link.  |
| `relation`  |  *string*              | *Required*. Specifies the type of relationship the link represents. |

Example:

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### Response

The response returns a JSON object with the ID of the newly created link.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)