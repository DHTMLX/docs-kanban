---
sidebar_label: GET /columns
title: GET /columns
description: This section covers the GET /columns REST route in the DHTMLX JavaScript Kanban library documentation. It includes developer guides, API reference, code examples, live demos, and a free 30-day trial download of DHTMLX Kanban.
---

# GET `/columns`

### Description

@short: Retrieves data for all columns and returns a JSON object containing an array of column data objects.

This route responds to an **HTTP GET** request sent to the `/columns` endpoint.

### Payload

No payload needs to be sent.

### Response

The response is a JSON object that includes an array of column data objects.

Example:

~~~json
[
    {
        "id": 1,
        "label": "Backlog",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "In Progress",
        "collapsed": false
    },
    {
        "id": 3,
        "label": "Testing",
        "collapsed": false
    },
    {
        "id": 4,
        "label": "Done",
        "collapsed": false
    }
]
~~~

For another example of the returned object, check out [**columns**](api/config/js_kanban_columns_config.md).

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)