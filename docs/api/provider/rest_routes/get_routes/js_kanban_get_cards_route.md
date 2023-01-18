---
sidebar_label: GET /cards
title: GET /cards
description: You can learn about the GET /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# GET /cards

### Description

@short: Gets data on all cards and returns a json object with an array of cards objects

The route handles the **HTTP GET** request made to the **'/cards'** path.

### Payload

No payload is required.


### Response

The route returns a json object with an array of all cards objects. 

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
The event start and end dates should conform to the ISO format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

For another example of the returned object, go to [**cards**](api/config/js_kanban_cards_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [getCards()](api/provider/rest_methods/js_kanban_getcards_method.md)

