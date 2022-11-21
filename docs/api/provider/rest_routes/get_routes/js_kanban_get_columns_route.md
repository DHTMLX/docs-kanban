---
sidebar_label: Get /columns
title: Get /columns
description: You can learn about the Get /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Get /columns

### Description

@short: Gets data on all columns and returns a json object with an array of objects with columns data

The route handles the **HTTP GET** request made to the **'/columns'** path.

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
