---
sidebar_label: GET /links
title: GET /links REST Route API
description: Read the GET /links REST route API for DHTMLX Kanban. Learn how to get data on all links as a JSON array.
---

# GET `/links`

### Description

@short: Gets data on all links and returns a json object with an array of links objects

The route handles the **HTTP GET** request made to the `/links` path.

### Payload

No payload is required.

### Response

The route returns a json object with an array of all links objects.

Example:

~~~json
[
    {
        "id": 1,
        "source": 2,
        "target": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "source": 4,
        "target": 9,
        "relation": "relatesTo",
    },
]
~~~

For another example of the returned object, go to [**links**](api/config/js_kanban_links_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
