---
sidebar_label: POST /cards
title: POST /cards
description: Explore the POST /cards REST endpoint in the DHTMLX JavaScript Kanban library documentation. Access developer guides, API references, code samples, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# POST `/cards`

### Description

@short: Adds a new card and responds with a json object containing the card's ID.

This endpoint processes **HTTP POST** requests sent to the `/cards` URL.

### Payload

The server requires a json object with the following fields:

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *Required*. The title of the card to create.|
| `column`    |  number     | *Required*. The ID of the column where the card will be placed.|
| `row`       |  number     | *Required*. The ID of the row where the card will be positioned.|

Example:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### Response

The endpoint responds with a json object containing the ID of the newly created card.

Example:

~~~json
{ 
   "id": 1
}
~~~

The HTTP status code indicates if the request was successful (response.status == 200) or if there was an error (response.status == 500).

---

**Related articles**: [Working with server](/guides/working_with_server)
