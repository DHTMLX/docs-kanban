---
sidebar_label: GET /uploads
title: GET /uploads REST Route API
description: Read the GET /uploads REST route API for DHTMLX Kanban. Learn how to get a requested binary file from the server.
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
