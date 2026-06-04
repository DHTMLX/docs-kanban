---
sidebar_label: GET /columns
title: GET /columns REST Route API
description: Read the GET /columns REST route API for DHTMLX Kanban. Learn how to get data on all columns as a JSON array.
---

# GET `/columns`

### Description

@short: Gets data on all columns and returns a json object with an array of objects with columns data

The route handles the **HTTP GET** request made to the `/columns` path.

### Payload

No payload is required.

### Response

The route returns a json object with an array of objects with columns data.

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

For another example of the returned object, go to [**columns**](api/config/js_kanban_columns_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)
