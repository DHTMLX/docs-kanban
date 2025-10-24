---
sidebar_label: POST /cards
title: POST /cards
description: You can learn about the POST /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/cards`

### Description

@short: Adds a new card and responds with a json object containing the new card ID

This route processes an **HTTP POST** request sent to the `/cards` endpoint.

### Payload

The server expects a json object with the following properties:

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The title for the new card. |
| `column`    |  number     | *Required*. The ID of the column where the card will be placed. |
| `row`       |  number     | *Required*. The ID of the row where the card will be positioned. |

Example:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### Response

The response returns a json object containing the newly created card ID.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates if the request was successful (response.status == 200) or if it failed (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)