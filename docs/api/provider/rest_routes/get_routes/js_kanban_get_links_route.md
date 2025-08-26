---
sidebar_label: GET /links
title: GET /links
description: Explore the GET /links REST endpoint in the DHTMLX JavaScript Kanban library documentation. Access developer guides, check out API references, experiment with code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/links`

### Description

@short: Retrieves information about all links and returns a JSON object containing an array of link objects.

This endpoint responds to **HTTP GET** requests sent to the `/links` path.

### Payload

No payload needs to be sent with this request.

### Response

The response includes a JSON object with an array of all link objects.

Example:

~~~json
[
    {
        "id": 1,
        "masterId": 2,
        "slaveId": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "masterId": 4,
        "slaveId": 9,
        "relation": "relatesTo",
    },
]
~~~

For another example of the returned object, see [**links**](/api/config/js_kanban_links_config).

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method)
