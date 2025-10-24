---
sidebar_label: GET /users
title: GET /users
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 GET /users REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# GET `/users`

### 描述

@short: 获取所有用户的数据，并返回包含用户对象数组的 json 对象

该路由处理对 `/users` 路径发起的 **HTTP GET** 请求。

### 请求体

无需请求体。

### 响应

该路由返回一个包含用户数据对象数组的 json 对象。

示例：

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

有关返回对象的另一个示例，请参见 [**cardShape**](api/config/js_kanban_cardshape_config.md)。

HTTP 状态码指示请求是成功（response.status == 200）还是失败（response.status == 500）。

---

**相关文章**：
- [与服务器交互](guides/working_with_server.md)
- [getUsers()](api/provider/rest_methods/js_kanban_getusers_method.md)