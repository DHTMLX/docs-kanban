---
sidebar_label: GET /users
title: GET /users
description: Explore the GET /users REST endpoint in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# GET `/users`

### Description

@short: Retrieves data for all users and returns a JSON object containing an array of user objects.

This endpoint processes **HTTP GET** requests sent to the `/users` URL.

### Payload

No payload needs to be sent.

### Response

The response includes a JSON array of user data objects.

Example:

~~~json
[
    {
        "id": 1,
        "label": "Jhon",
        "avatar": "https://serv.com/images/jhon.png"
    },
    {
        "id": 2,
        "label": "Ben",
        "avatar": "https://serv.com/images/ben.png"
    },
    {
        "id": 3,
        "label": "Alex",
        "avatar": "https://serv.com/images/alex.png"
    }
]
~~~

For another example of the returned object, see [**cardShape**](/api/config/js_kanban_cardshape_config).

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**:
- [Working with server](/guides/working_with_server)
- [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method)
