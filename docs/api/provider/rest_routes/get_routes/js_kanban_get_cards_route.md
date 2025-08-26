---
sidebar_label: GET /cards
title: GET /cards
description: You can learn about the GET /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# GET `/cards`

### Description

@short: Retrieves information on all cards and returns a JSON object containing an array of card objects.

This route processes an **HTTP GET** request sent to the `/cards` endpoint.

### Payload

No payload is needed.

### Response

The response provides a JSON object with an array of all card objects.

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
Event start and end dates should follow the ISO format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

For another example of the returned object, see [**cards**](/api/config/js_kanban_cards_config).

The HTTP status code indicates the outcome of the request: success (response.status == 200) or failure (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server)
- [getCards()](/api/provider/rest_methods/js_kanban_getcards_method)
