---
sidebar_label: GET /cards
title: GET /cards
description: Explore the GET /cards REST route in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, sample code, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/cards`

### Description

@short: Retrieves data for all cards and returns a JSON object containing an array of card objects.

This route processes an **HTTP GET** request sent to the `/cards` endpoint.

### Payload

No payload is needed.

### Response

The route responds with a JSON object that includes an array of all card objects.

Example:

~~~json
[
    {
        "id": 4,
        "label": "Set the tasks priorities",
        "description": "",
        "column": 2,
        "row": 1,
        "start_date": "2018-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
    {
        "id": 5,
        "label": "Custom icons",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2019-01-01T00:00:00Z",
        "end_date": null,
        "progress": 0,
        "attached": [],
        "color": "#65D3B3",
        "users": []
    },
    {
        "id": 6,
        "label": "Integration with Gantt",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2020-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
]
~~~

:::note
The start and end dates for events must follow the ISO format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

For a different example of the returned object, see [**cards**](api/config/js_kanban_cards_config.md).

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](guides/working_with_server.md)
- [getCards()](api/provider/rest_methods/js_kanban_getcards_method.md)