---
sidebar_label: POST /rows
title: POST /rows
description: You can learn about the POST /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST /rows

### Description

@short: Adds a new row and returns a JSON object containing the row ID.

This route processes an **HTTP POST** request sent to the **'/rows'** endpoint.

### Payload

The server expects a JSON object with the following properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name for the new row to be created.|
| `collapsed`   |  boolean | *Optional*. Indicates the initial state of the row (swimlane). By default, the row is expanded (value is **false**). If set to **true**, the row is initially collapsed.|

Example:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### Response

The response includes a JSON object with the newly created row's ID.

Example:

~~~json
{    
   "id": 2
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)