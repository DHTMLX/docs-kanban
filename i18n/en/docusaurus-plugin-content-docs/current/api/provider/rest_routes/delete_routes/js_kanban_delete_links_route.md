---
sidebar_label: DELETE /links
title: DELETE /links
description: You can learn about the DELETE /links REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE `/links`

### Description

@short: Removes a link's data

This route processes an **HTTP DELETE** request sent to the `/links/{id}` endpoint.

### Path parameters

The following parameter should be included in the request URL:

| Name | Type    | Description |
| ---- | ------- | ----------- |
| `id` | number  | *Required*. The identifier of the link to be removed. |

### Payload

No payload is necessary.

### Response

No content is returned. The HTTP status code indicates whether the operation was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)