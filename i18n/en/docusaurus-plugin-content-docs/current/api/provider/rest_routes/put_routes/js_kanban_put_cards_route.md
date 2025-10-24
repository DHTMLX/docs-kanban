---
sidebar_label: PUT /cards
title: PUT /cards
description: You can learn about the PUT /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/cards`

### Description

@short: Updates the details of a specific card and returns an empty JSON object.

This route processes an **HTTP PUT** request sent to the `/cards/{id}` endpoint.

### Path parameters

The following parameter is included in the request URL:

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       | number      | *Required*. The unique identifier of the card to update.|

### Payload

The server expects a JSON object containing the card details, including both existing and updated properties.

| Name          | Type        | Description |
| ------------- | ----------- | ----------- |
| `label`       | string      | *Required*. The title of the card being updated.|
| `description` | string      | *Required*. A description of the card.|
| `column`      | number      | *Required*. The ID of the column where the card is located.|
| `row`         | number      | *Required*. The ID of the row where the card is placed.|
| `start_date`  | string      | *Required*. The start date in ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    | string      | *Required*. The end date in ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    | number      | *Required*. The progress percentage, ranging from 0 to 100.|
| `attached`    | object      | *Required*. An array containing information about attached files. Refer to the example in [**cards**](api/config/js_kanban_cards_config.md)|
| `color`       | string      | *Required*. The HEX color code for the card's top border.|
| `priority`    | number      | *Required*. The ID representing the card's priority. |
| `users`       | object      | *Required*. An array with IDs of users assigned to the card. See example in [**cardShape**](api/config/js_kanban_cardshape_config.md)|

Example:

~~~json
{
    "card": {
        "label": "Drag and drop",
        "description": "",
        "column": 3,
        "row": 1,
        "start_date": null,
        "end_date": "2018-01-01T00:00:00Z",
        "progress": 100,
        "attached": [],
        "color": "#58C3FE",
        "priority": 2,
        "users": []
    },
}
~~~

Additional examples of the card object can be found in the [**cards**](api/config/js_kanban_cards_config.md) section.

### Response

On success, the server responds with an empty JSON object.

The HTTP status code indicates the result of the request: 200 for success, or 500 if an error occurs.

---

**Related articles**: [Working with server](guides/working_with_server.md)