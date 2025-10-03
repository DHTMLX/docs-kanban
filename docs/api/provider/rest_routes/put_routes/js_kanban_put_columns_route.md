---
sidebar_label: PUT /columns
title: PUT /columns
description: You can learn about the PUT /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/columns`

### Description

@short: Updates data on a specified column and returns an empty json object

The route handles the **HTTP PUT** request made to the `/columns/{id}` path.

### Path parameters

The next parameter is sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the column to be updated.|

### Payload

The server needs to receive a json object with all column properties (both unchanged and new/modified). 

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *Required*. The name of the column to be updated.|
| `collapsed`|  boolean    | *Optional*. The state of the column: **true** if the column is collapsed initially and **false** for the expanded state (default).|

Example:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

You can find another example of the column object in the [**columns**](api/config/js_kanban_columns_config.md) section.

### Response

In case of the success status, an empty json object is returned back.
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
