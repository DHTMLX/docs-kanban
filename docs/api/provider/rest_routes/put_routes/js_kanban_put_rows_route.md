---
sidebar_label: PUT /rows
title: PUT /rows REST Route API
description: Read the PUT /rows REST route API for DHTMLX Kanban. Learn how to update data on a row (swimlane).
---

# PUT `/rows`

### Description

@short: Updates data on a specified row (swimlane) and returns an empty json object

The route handles the **HTTP PUT** request made to the `/rows/{id}` path.

### Path parameters

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
