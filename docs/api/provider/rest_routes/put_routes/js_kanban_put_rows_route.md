---
sidebar_label: PUT /rows
title: PUT /rows
description: You can learn about the PUT /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/rows`

### Description

@short: Updates data on a specified row (swimlane) and returns an empty json object

The route handles the **HTTP PUT** request made to the `/rows/{id}` path.

### Query parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Required*. The ID of the row (swimlane) to be updated.|

### Payload

The server needs to receive a json object with all row properties (both unchanged and new/modified).

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The name of the row to be updated.|
| `collapsed` |  boolean    | *Optional*. The state of the row: **true** if the row is collapsed initially and **false** for the expanded state (default).|

Example:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

You can find another example of the row object in the [**rows**](api/config/js_kanban_rows_config.md) section.

### Response

In case of the success status, an empty json object is returned back.
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
