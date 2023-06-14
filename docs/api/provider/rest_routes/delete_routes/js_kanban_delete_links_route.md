---
sidebar_label: DELETE /links
title: DELETE /links
description: You can learn about the DELETE /links REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DELETE /links

### Description

@short: Deletes data on a link

The route handles the **HTTP DELETE** request made to the **'/links/{id}'** path. 

### Query parameters

The next parameter is sent in the request line:

| Name | Type    | Description |
| ---- | ------- | ----------- |
| `id` | number  | *Required*. The ID of the link to be deleted.|

### Payload

No payload is required.

### Response

No data is returned back. The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)
