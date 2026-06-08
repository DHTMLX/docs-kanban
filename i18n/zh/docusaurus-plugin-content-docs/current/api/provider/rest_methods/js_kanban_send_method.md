---
sidebar_label: send()
title: send REST 方法 API
description: 阅读 DHTMLX Kanban 的 send REST 方法 API。了解如何向服务器发送 HTTP 请求并获取包含响应的 promise。
---

# send()

### 描述

@short: 向服务器发送所需的 HTTP 请求，并根据请求返回带数据或不带数据的 promise。

所有发送到服务器的请求均通过 **send()** 方法完成，该方法是 [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) 服务的一部分。

### 用法

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
~~~

### 参数

| 名称        | 类型        | 说明 |
| ----------- | ----------- | ----------- |
| `url`       | string      | *必填*。请求发送到的服务器路径。|
| `method`    | string      | *必填*。HTTP 方法类型（GET、POST、PUT、DELETE）|
| `data`      | object      | *可选*。发送到服务器的参数。默认情况下，发送触发事件的参数。但您可以用自定义对象添加额外参数。详见下方[示例](#示例)。 |
| `headers`   | object      | *可选*。默认请求头为 **Content-Type**，值为 *application/json*。可以通过 **customHeaders** 参数添加更多自定义请求头。详见下方[示例](#示例)。 |

### 返回值

该方法返回一个带或不带数据的 promise，具体取决于请求。

请求成功时返回 promise；请求失败时，客户端会抛出错误。

您可以配置返回内容。要处理失败请求的响应，请使用返回的 promise 的 **catch** 方法。

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // 成功时：处理数据
})
.catch(err => {
    ... // 错误处理
});
~~~

### 示例

下面的示例演示了如何发送包含除默认参数外的额外参数的请求：

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
        // 配置参数
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

以下示例展示了如何向 **send()** 方法添加更多请求头：

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

或者，您也可以通过重新定义 RestDataProvider 来添加请求头，这样可以更灵活地控制发送给服务器的数据：

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, methods, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**相关文档：** [与服务器交互](guides/working_with_server.md)