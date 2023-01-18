---
sidebar_label: GET /rows
title: GET /rows
description: You can learn about the GET /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# GET /rows

### Description

@short: Gets data on all rows and returns a json object with an array of objects with rows (swimlanes) data

The route handles the **HTTP GET** request made to the **'/rows'** path.

### Payload

No payload is required.


### Response

The route returns a json object with an array of objects with rows data. 

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

For another example of the returned object, go to [**rows**](api/config/js_kanban_rows_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)
