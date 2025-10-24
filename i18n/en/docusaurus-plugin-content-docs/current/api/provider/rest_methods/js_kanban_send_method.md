---
sidebar_label: send()
title: send() Method
description: You can learn about the send() method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# send()

### Description

@short: Sends an HTTP request to the server and returns a promise, which may include data depending on the request.

All communication with the server happens through the **send()** method, which is part of the [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) service.

### Usage

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
~~~

### Parameters

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| `url`       | string      | *Required*. The server endpoint where the request is sent. |
| `method`    | string      | *Required*. The HTTP method to use (GET, POST, PUT, DELETE). |
| `data`      | object      | *Optional*. Parameters to send along with the request. By default, parameters from the triggered event are sent, but you can add extra ones with a custom object. See the [Example](#examples) below. |
| `headers`   | object      | *Optional*. The default header is **Content-Type** set to *application/json*. Additional headers can be included via the **customHeaders** parameter. See the [Example](#examples) below. |

### Response

This method returns a promise that may include data depending on the request type.

The promise resolves on a successful request. If the request fails, an error is thrown.

You can customize the response handling. To manage errors, use the **catch** method on the returned promise.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // success: handle the data
})
.catch(err => {
    ... // error handling
});
~~~

### Examples

This example shows how to send a request with extra parameters beyond the defaults:

~~~jsx {14-20}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        //configuration parameters
    });

    board.api.on("add-card", obj => {
        obj.custom = "custom prop";
        restProvider.send(`cards`, "POST", obj).then(data => {
            board.api.parse({ cards: data });
            return Promise.resolve();
        });
    });

   board.api.setNext(restProvider);
});
~~~

Here’s how you can add extra headers when using the **send()** method:

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

Alternatively, you can override RestDataProvider to add headers, giving you more control over the data sent to the server:

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, method, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**Related articles:** [Working with server](guides/working_with_server.md)