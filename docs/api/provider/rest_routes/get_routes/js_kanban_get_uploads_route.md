---
sidebar_label: GET /uploads
title: GET /uploads
description: Check out the GET /uploads REST route in the DHTMLX JavaScript Kanban library docs. Explore developer guides and API references, try sample code and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/uploads`

### Description

@short: Retrieves the specified binary file from the server

This route processes **HTTP GET** requests sent to the `/uploads/{id}/{name}` endpoint.

### Path parameters

The following parameters are included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the file to fetch.|
| `name`     |  string     | *Required*. The filename to retrieve.|

### Payload

No payload is needed.

### Response

The route responds with the requested binary file.

The HTTP status code indicates success (response.status == 200) or failure (response.status == 500).

---

**Related articles**: [Working with server](/guides/working_with_server)
