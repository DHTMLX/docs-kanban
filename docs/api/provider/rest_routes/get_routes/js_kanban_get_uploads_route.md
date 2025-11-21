---
sidebar_label: GET /uploads
title: GET /uploads
description: You can learn about the GET /uploads REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# GET `/uploads`

### Description

@short: Gets the requested binary file from the server

The route handles the **HTTP GET** request made to the `/uploads/{id}/{name}` path.

### Path parameters

The following parameters are sent in the request line:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the required file.|
| `name`     |  string     | *Required*. The name of the requested file.|

### Payload

No payload is required.

### Response

The route returns the requested binary file.

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
