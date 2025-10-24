---
sidebar_label: GET /links
title: GET /links
description: Explore the GET /links REST route in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/links`

### Description

@short: Retrieves data for all links and returns a JSON object containing an array of link objects.

This route processes **HTTP GET** requests sent to the `/links` endpoint.

### Payload

No payload is needed.

### Response

The response includes a JSON object with an array of all link objects.

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

For another example of the returned object, see [**links**](api/config/js_kanban_links_config.md).

The HTTP status code indicates success (response.status == 200) or failure (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)