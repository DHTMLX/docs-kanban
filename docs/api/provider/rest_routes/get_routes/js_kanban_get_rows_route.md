---
sidebar_label: GET /rows
title: GET /rows
description: Explore the GET /rows REST route in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try live demos and code samples, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/rows`

### Description

@short: Retrieves data for all rows and returns a JSON object containing an array of row (swimlane) data objects.

This route responds to **HTTP GET** requests sent to the `/rows` endpoint.

### Payload

No payload needs to be sent with the request.

### Response

The response is a JSON object that includes an array of row data objects.

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

For another example of the returned object, see [**rows**](/api/config/js_kanban_rows_config.md).

The HTTP status code indicates if the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server.md)
- [getRows()](/api/provider/rest_methods/js_kanban_getrows_method.md)
