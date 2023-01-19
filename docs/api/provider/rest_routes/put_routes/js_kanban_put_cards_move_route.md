---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: You can learn about the PUT /cards/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT /cards/{id}/move

### Description

@short: Moves cards to a specified position 

The route handles the **HTTP PUT** request made to the **'cards/{id}/move'** path.


### Query parameters

The query parameter is sent in the request line:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the card to be moved. In case multiple cards are requested to be moved, the id should be set to 0|

:::info
When you move multiple cards, make sure that the `id` is set to 0, otherwise (if set to another value), only one card (with this specified id value) will be moved.
:::

### Payload

The server expects to receive a json object with the next properties:

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`        | number      |*Required*. The ID of the moved card. |
| `columnId`  |  number     | *Required*. The ID of the column where the card is moved to.|
| `rowId`       |  number   | *Required*. The ID of the row where the card is moved to.|
| `before`       |  number   | *Optional*. The ID of the card before which the moved card should be placed.|
| `batch`       |  object  | *Required for multiselect*. An array of cards objects that are moved.|


Example:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

In case multiple cards are moved, the `batch` property should contain an array of all cards objects that are moved:

~~~json
{
    "batch": [
        {
            "id": 2,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        },
        {
            "id": 7,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        }
    ]
}
~~~ 

### Response 

The server returns a json object with a card ID (if one card is moved) or with the ID set to 0 for the operation on multiple cards. 

Example:

~~~json title="Response to the request for the single card operation"
{
    "id": 4
}
~~~


~~~json title="Response to the request for the multiple cards operation"
{
    "id": 0
}
~~~

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)