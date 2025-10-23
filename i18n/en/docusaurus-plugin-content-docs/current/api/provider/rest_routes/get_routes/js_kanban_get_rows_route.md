---
sidebar_label: GET /rows
title: GET /rows
description: Explore the GET /rows REST route in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, sample code, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/rows`

### Description

@short: Retrieves data for all rows and returns a JSON object containing an array of row (swimlane) data objects.

This route processes **HTTP GET** requests sent to the `/rows` endpoint.

### Payload

No payload is needed.

### Response

The response includes a JSON object with an array of row data objects.

Example:

~~~json
[
    {
        "id": 1,
        "label": "Feature",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "Task",
        "collapsed": false
    }
]
~~~

For a different example of the returned object, see [**rows**](api/config/js_kanban_rows_config.md).

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)