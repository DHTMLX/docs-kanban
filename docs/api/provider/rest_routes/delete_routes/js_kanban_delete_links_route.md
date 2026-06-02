---
sidebar_label: DELETE /links
title: DELETE /links REST Route API
description: Read the DELETE /links REST route API for DHTMLX Kanban. Learn how to delete a link.
---

# DELETE `/links`

### Description

@short: Deletes data on a link

The route handles the **HTTP DELETE** request made to the `/links/{id}` path.

### Path parameters

The next parameter is sent in the request line:

| Name | Type    | Description |
| ---- | ------- | ----------- |
| `id` | number  | *Required*. The ID of the link to be deleted. |

### Payload

No payload is required.

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)
