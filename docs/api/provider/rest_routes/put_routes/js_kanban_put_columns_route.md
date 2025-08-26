---
sidebar_label: PUT /columns
title: PUT /columns
description: You can learn about the PUT /columns REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/columns`

### Description

@short: Updates the details of a specific column and returns an empty JSON object.

This route processes an **HTTP PUT** request sent to the `/columns/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the column that needs to be updated.|

### Payload

The server expects a JSON object containing all properties of the column, including those that remain unchanged and those that are new or modified.

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *Required*. The updated name of the column.|
| `collapsed`|  boolean    | *Optional*. Indicates if the column is initially collapsed (**true**) or expanded (**false**, default).|

Example:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

Another example of the column object can be found in the [**columns**](/api/config/js_kanban_columns_config) section.

### Response

When the request is successful, an empty JSON object is returned.

The HTTP status code indicates the result: success with status 200, or failure with status 500.

---

**Related articles**: [Working with server](/guides/working_with_server)
