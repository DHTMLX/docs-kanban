---
sidebar_label: GET /users
title: GET /users
description: 探索 DHTMLX JavaScript 看板库文档中的 GET /users REST 端点。查看开发者指南、API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# GET `/users`

### 描述

@short: 获取所有用户的数据，并返回包含用户对象数组的 JSON 对象。

此端点处理发送到 `/users` URL 的 **HTTP GET** 请求。

### 请求体

无需发送请求体。

### 响应

响应包含一个用户数据对象的 JSON 数组。

示例:

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

有关返回对象的另一个示例，请参见 [**cardShape**](/api/config/js_kanban_cardshape_config.md)。

HTTP 状态码指示请求是否成功（response.status == 200）或出现错误（response.status == 500）。

---

**相关文章**:
- [与服务器交互](/guides/working_with_server.md)
- [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method.md)
