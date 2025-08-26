---
sidebar_label: GET /columns
title: GET /columns
description: This section covers the GET /columns REST route in the DHTMLX JavaScript Kanban library documentation. It includes developer guides, API references, code examples, live demos, and offers a free 30-day trial of DHTMLX Kanban.
---

# GET `/columns`

### Description

@short: Retrieves information about all columns and returns a JSON object containing an array of column data.

This route processes **HTTP GET** requests sent to the `/columns` endpoint.

### Payload

No payload needs to be sent.

### Response

The response includes a JSON object with an array of column data objects.

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

A different example of the returned object can be found in [**columns**](/api/config/js_kanban_columns_config).

The HTTP status code indicates if the request was successful (response.status == 200) or if it failed (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server)
- [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method)
