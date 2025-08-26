---
sidebar_label: send()
title: send() Method
description: You can learn about the send() method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# send()

### Description

@short: This method handles sending the necessary HTTP requests to the server and returns a promise that may include data, depending on the request type.

All server requests are performed using the **send()** method, which is part of the [**RestDataProvider**](/guides/working_with_server/#restdataprovider) service.

### Usage

```js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
```

### Parameters

| Name      | Type   | Description                                                                                                                                                                                  |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`     | string | _Required_. The server endpoint where the request is sent.                                                                                                                                   |
| `method`  | string | _Required_. The HTTP method to use (GET, POST, PUT, DELETE).                                                                                                                                 |
| `data`    | object | _Optional_. Parameters sent to the server. By default, event parameters are sent, but you can include additional parameters using a custom object. See the [Example](#examples) below.       |
| `headers` | object | _Optional_. The default header includes **Content-Type** set to _application/json_. Additional headers can be added via the **customHeaders** parameter. See the [Example](#examples) below. |

### Response

This method returns a promise, which may or may not include data based on the request.

A promise resolves upon a successful request. If the request fails, an error is thrown.

You can control the returned data and handle failed requests by using the **catch** method on the returned promise.

```jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // success: process the received data
})
.catch(err => {
    ... // handle errors
});
```

### Examples

The example below demonstrates sending a request with extra parameters alongside the default ones:

```jsx {14-20}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([restProvider.getCards(), restProvider.getColumns()]).then(
  ([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
      cards,
      columns,
      //configuration parameters
    });

    board.api.on("add-card", (obj) => {
      obj.custom = "custom prop";
      restProvider.send(`cards`, "POST", obj).then((data) => {
        board.api.parse({ cards: data });
        return Promise.resolve();
      });
    });

    board.api.setNext(restProvider);
  },
);
```

The following examples show how to include additional headers when using the **send()** method.

```js
const customHeaders = {
  Authorization: "Bearer",
  "Custom header": "some value",
};

board.api.on("add-cards", (obj) => {
  restDataProvider.send("cards", "POST", obj, customHeaders);
});
```

Alternatively, headers can be added by extending RestDataProvider, which allows greater control over the data sent to the server:

```jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
    headers = { ...headers, SomeToken: "abc" };
    return super.send(url, methods, data, headers);
  }
}

board.api.setNext(new MyDataProvider(url));
```

---

**Related articles:** [Working with server](//guides/working_with_server)
