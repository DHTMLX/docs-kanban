---
sidebar_label: PUT /cards
title: PUT /cards
description: You can learn about the PUT /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/cards`

### Description

@short: Updates the data of a specified card and returns an empty JSON object.

This route processes an **HTTP PUT** request sent to the `/cards/{id}` endpoint.

### Path parameters

The following parameter is included in the request path:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *Required*. The ID of the card to update.|

### Payload

The server expects a JSON object containing the card object with all its properties, including both unchanged and updated values.

| Name | Type | Description |
| ------------- | ----------- | ----------- |
| `label`       |  string     | *Required*. The name of the card to update.|
| `description` |  string     | *Required*. The card's description.|
| `column`      | number      | *Required*. The ID of the column the card belongs to.|
| `row`         | number      | *Required*. The ID of the row the card belongs to.|
| `start_date`  |  string     | *Required*. The start date in ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    |  string     | *Required*. The end date in ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    |  number     | *Required*. The progress value, ranging from 0 to 100.|
| `attached`    |  object     | *Required*. An array containing data about attached file(s). See the object example here [**cards**](/api/config/js_kanban_cards_config)|
| `color`       |  string     | *Required*. The color of the card's top line in HEX format.|
| `priority`    |  number     | *Required*. The priority ID of the card. |
| `users`       |  object     | *Required*. An array of assigned user IDs. See the object example here [**cardShape**](/api/config/js_kanban_cardshape_config) |

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

Another example of the card object is available in the [**cards**](/api/config/js_kanban_cards_config) section.

### Response

If the update is successful, the server returns an empty JSON object.

The HTTP status code indicates the result of the request: success with status 200, or failure with status 500.

---

**Related articles**: [Working with server](/guides/working_with_server)
