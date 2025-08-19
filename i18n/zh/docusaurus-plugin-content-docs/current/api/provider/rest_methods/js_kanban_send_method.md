---
sidebar_label: send()
title: send() 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 send() 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# send()

### 描述

@short: 此方法负责向服务器发送必要的 HTTP 请求，并返回一个 promise，根据请求类型，promise 可能包含数据。

所有服务器请求均通过 [**RestDataProvider**](/guides/working_with_server.md/#restdataprovider) 服务中的 **send()** 方法执行。

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

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *必需*。请求发送的服务器端点。            |
| `method`            |string             | *必需*。使用的 HTTP 方法（GET、POST、PUT、DELETE）。            |
| `data`  | object        | *可选*。发送到服务器的参数。默认发送事件参数，但您可以通过自定义对象包含额外参数。详见下方[示例](#示例)。 |
| `headers`  |object       | *可选*。默认请求头包含 **Content-Type** 设置为 *application/json*。可以通过 **customHeaders** 参数添加额外的请求头。详见下方[示例](#示例)。 |

### 返回值

此方法返回一个 promise，返回的数据取决于请求类型。

请求成功时，promise 解析。请求失败时，会抛出错误。

您可以通过返回的 promise 的 **catch** 方法控制返回数据和处理失败请求。

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // 成功：处理接收到的数据
})
.catch(err => {
    ... // 处理错误
});
~~~

### 示例

下面示例演示如何在默认参数之外，附加额外参数发送请求:

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
        //配置参数
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

下面示例展示如何在使用 **send()** 方法时添加额外的请求头:

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

或者，您也可以通过扩展 RestDataProvider 来添加请求头，从而更好地控制发送至服务器的数据:

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

**相关文档:** [与服务器交互](../../../../guides/working_with_server)
