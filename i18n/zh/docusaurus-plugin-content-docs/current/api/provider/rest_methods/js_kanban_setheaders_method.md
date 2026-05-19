---
sidebar_label: setHeaders()
title: setHeaders REST 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 setHeaders REST 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# setHeaders()

### 描述

@short: 设置自定义 HTTP 请求头，RestDataProvider 会将其附加到每个发送至服务器的请求中

:::info
`setHeaders()` 方法是 **RestDataProvider** 服务的一部分，用于与服务器进行交互。
:::

### 用法

~~~jsx {}
setHeaders(headers: object): void;
~~~

### 参数

- `headers` - （必填）一个对象，其键为请求头名称，值为请求头的值。这些请求头会附加到默认的 `Content-Type: application/json` 请求头之后，并随每次通过 [`send()`](api/provider/rest_methods/js_kanban_send_method.md) 发送的请求一同传递。

### 示例

最常见的用例是为每个请求附加授权令牌：

~~~jsx {4-6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

restProvider.setHeaders({
    "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
});
~~~

如果只需为某个特定请求设置请求头而非所有请求，请将其作为第四个参数传递给 [`send()`](api/provider/rest_methods/js_kanban_send_method.md)。

**相关文章：** [与服务器协作：多用户后端](guides/working_with_server.md/#multiuser-backend)
