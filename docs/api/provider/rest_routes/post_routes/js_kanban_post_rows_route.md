---
sidebar_label: POST /rows
title: POST /rows
description: You can learn about the POST /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST /rows

### Description

@short: Adds a new row and responds with a JSON object containing the row ID.

This route processes **HTTP POST** requests sent to the **'/rows'** endpoint.

### Payload

The server expects a JSON object with the following properties:

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name for the new row to be added.|
| `collapsed`   |  boolean | *Optional*. Indicates the initial state of the row (swimlane). The default state is expanded (**false**). Setting to **true** means the row starts as collapsed.|

Example:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### Response

The response contains a JSON object with the ID of the newly created row.

Example:

~~~json
{    
   "id": 2
}
~~~

The HTTP status code signals whether the request was successful (**200**) or encountered an error (**500**).

---

**Related articles**: [Working with server](/guides/working_with_server.md)
