---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: You can learn about the PUT /cards/{id}/move REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# PUT `/cards/{id}/move`

### Description

@short: Moves cards to a specified position

This route deals with the **HTTP PUT** request sent to the `cards/{id}/move` endpoint.

### Path parameters

The following parameter should be included in the request URL:

| Name | Type | Description |
| ---------- | ----------- | ----------- |
| `id`       |  number   | *Required*. The ID of the card to be moved. For moving multiple cards, set the id to 0.|

:::info
If moving multiple cards, the `id` must be set to 0; otherwise, if any other value is used, only the card with that specific id will be moved.
:::

### Payload

The server expects a JSON object with these properties:

| Name | Type | Description |
| ----------- | ----------- | ----------- |
| `id`        | number      |*Required*. The ID of the card being moved. |
| `columnId`  |  number     | *Required*. The ID of the column where the card is placed.|
| `rowId`     |  number     | *Required*. The ID of the row where the card is placed.|
| `before`    |  number     | *Optional*. The ID of the card that the moved card should be positioned before.|
| `batch`     |  object     | *Required for multiselect*. An array of card objects being moved.|

Example:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

When moving multiple cards, the `batch` property should include an array of all the card objects being moved:

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

The server responds with a JSON object containing the card ID (for single card moves) or with the ID set to 0 when multiple cards are moved.

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

The HTTP status code indicates the success of the request (response.status == 200) or an error (response.status == 500).

---

**Related articles**: [Working with server](/guides/working_with_server)
