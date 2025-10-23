---
sidebar_label: GET /uploads
title: GET /uploads
description: Explore the GET /uploads REST endpoint in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, sample code, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/uploads`

### Description

@short: Retrieves the specified binary file from the server

This route processes an **HTTP GET** request directed to the `/uploads/{id}/{name}` URL.

### Path parameters

The request URL includes the following parameters:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The unique identifier of the file to retrieve.|
| `name`     |  string     | *Required*. The filename of the file being requested.|

### Payload

No payload is needed for this request.

### Response

The server responds with the requested binary file.

The HTTP status code indicates the outcome: 200 means success, while 500 indicates an error.

---

**Related articles**: [Working with server](guides/working_with_server.md)