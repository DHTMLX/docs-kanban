---
sidebar_label: PUT /columns
title: PUT /columns
description: You can learn about the PUT /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/columns`

### Description

@short: Updates the details of a specified column and returns an empty JSON object.

This route processes **HTTP PUT** requests sent to the `/columns/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the column to update.|

### Payload

The server expects a JSON object containing all the properties of the column, including both unchanged and updated values.

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *Required*. The new name for the column.|
| `collapsed`|  boolean    | *Optional*. Indicates the column’s initial state: **true** if collapsed, **false** if expanded (default).|

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

On success, the server returns an empty JSON object.

The HTTP status code indicates the result: a status of 200 means the request was successful, while 500 indicates a failure.

---

**Related articles**: [Working with server](guides/working_with_server.md)