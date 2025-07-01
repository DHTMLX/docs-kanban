---
sidebar_label: POST /links
title: POST /links
description: Explore the POST /links REST route in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, sample code, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# POST `/links`

### Description

@short: Adds a new link and returns a JSON object containing the new link ID

This route processes **HTTP POST** requests sent to the `/links` endpoint.

### Payload

The server expects a JSON object with the following properties:

| Name | Type | Description |
| ----------- | ---------------------- | ----------- |
| `masterId`  |  *number* or *string*  | *Required*. The ID of the master link. |
| `slaveId`   |  *number* or *string*  | *Required*. The ID of the slave link.  |
| `relation`  |  *string*              | *Required*. Defines the type of relation the link represents. |

Example:

~~~json
{
    "masterId": 1,
    "slaveId": 2,
    "relation": "relatesTo",
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

The HTTP status code indicates if the request was successful (response.status == 200) or if it failed (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
