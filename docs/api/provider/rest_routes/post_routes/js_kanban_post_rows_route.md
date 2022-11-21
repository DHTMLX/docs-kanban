---
sidebar_label: Post /rows
title: Post /rows
description: You can learn about the Post /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Post /rows

### Description

@short: Adds a new row and returns a json object with the row ID in it

The route handles the **HTTP POST** request made to the **'/rows'** path.

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name of a new row to be added.|
| `collapsed`   |  boolean | *Optional*. The current state of the row (swimlane). By default, the row is expanded (the value is **false**). If **true**, the row is collapsed initially.|

Example:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~


### Response

The route returns a json object with a new row ID.

Example:

~~~json
{    
   "id": 2
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [setNext()](api/internal/js_kanban_setnext_method.md)