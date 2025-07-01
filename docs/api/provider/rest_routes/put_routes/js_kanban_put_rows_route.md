---
sidebar_label: PUT /rows
title: PUT /rows
description: You can learn about the PUT /rows REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/rows`

### Description

@short: Updates data for a specific row (swimlane) and returns an empty JSON object.

This route processes an **HTTP PUT** request sent to the `/rows/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Required*. The ID of the row (swimlane) that needs to be updated.|

### Payload

The server expects a JSON object containing all properties of the row, including both unchanged and updated fields.

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The name of the row to update.|
| `collapsed` |  boolean    | *Optional*. Indicates whether the row is collapsed initially (**true**) or expanded (**false**, which is the default).|

Example:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

For another example of the row object, see the [**rows**](/api/config/js_kanban_rows_config.md) section.

### Response

Upon a successful update, the server responds with an empty JSON object.

The HTTP status code reflects the outcome: a status of 200 means the request was successful, while 500 indicates a failure.

---

**Related articles**: [Working with server](/guides/working_with_server.md)
