---
sidebar_label: Put /cards
title: Put /cards
description: You can learn about the Put /cards REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Put /cards

### Description

@short: Updates data on a specified card and returns an empty json object

The route handles the **HTTP PUT** request made to the **'/cards/{id}'** path.

### Query parameters

The query parameter sent in the request line is the following:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the card to be updated.|



### Payload

The server needs to receive a json object with the card object in it that contains all card properties (both unchanged and new/modified). 

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Required*. The name of the card to be updated.|
| `description` |  string  | *Required*. The card description.|
| `column`       | number | *Required*. The ID of the column the card refers to.|
| `row`          | number | *Required*. The ID of the row the card refers to.|
| `start_date` |  string  | *Required*. The start date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`   |  string  | *Required*. The end date in the ISO format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`   |  number  | *Required*. The progress bar value in the range from 0 to 100 points.|
| `attached`   |  object  | *Required*. An array with data of the attached file(s). See the object example here [**cards**](api/config/js_kanban_cards_config.md)|
| `color`   |  string | *Required*. The color of the card top line in HEX.|
| `priority`   |  number | *Required*. The card priority ID. |
| `users`   |  object | *Required*. An array with the assigned users IDs. See the object example here [**cardShape**](api/config/js_kanban_cardshape_config.md) |


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

You can find another example of the card object in the [**cards**](api/config/js_kanban_cards_config.md) section.

### Response

In case of the success status, an empty json object is returned back. 
  
The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
