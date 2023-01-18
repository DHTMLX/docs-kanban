---
sidebar_label: GET /users
title: GET /users
description: You can learn about the GET /users REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# GET /users

### Description

@short: Gets data on all users and returns a json object with an array of users objects

The route handles the **HTTP GET** request made to the **'/users'** path.

### Payload

No payload is required.


### Response

The route returns a json object with an array of objects with users data. 

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

For another example of the returned object, see [**cardShape**](api/config/js_kanban_cardshape_config.md).

The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [getUsers()](api/provider/rest_methods/js_kanban_getusers_method.md)
