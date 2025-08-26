---
sidebar_label: DELETE /links
title: DELETE /links
description: This section covers the DELETE /links REST route in the DHTMLX JavaScript Kanban library. It includes developer guides, API references, examples, live demos, and a free 30-day trial of DHTMLX Kanban.
---

# DELETE `/links`

### Description

@short: Removes a link entry

This endpoint processes an **HTTP DELETE** request sent to `/links/{id}`.

### Path parameters

The following parameter is included in the request URL:

| Name | Type | Description |
| ---- | ------- | ----------- |
| `id` | number  | *Required*. The identifier of the link you want to delete. |

### Payload

There is no payload needed for this request.

### Response

No content is returned. The HTTP status code indicates success (response.status == 200) or failure (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method)
- [links](/api/config/js_kanban_links_config)
