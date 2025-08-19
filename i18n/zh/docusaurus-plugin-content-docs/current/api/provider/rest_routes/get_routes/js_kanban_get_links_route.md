---
sidebar_label: GET /links
title: GET /links
description: 浏览 DHTMLX JavaScript 看板库文档中的 GET /links REST 端点。访问开发者指南，查看 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX 看板 30 天试用版。
---

# GET `/links`

### 描述

@short: 获取所有链接的信息，并返回包含链接对象数组的 JSON 对象。

此端点响应发送到 `/links` 路径的 **HTTP GET** 请求。

### 请求负载

此请求无需发送任何负载。

### 响应

响应包含一个 JSON 对象，该对象包含所有链接对象的数组。

示例:

~~~json
[
    {
        "id": 1,
        "masterId": 2,
        "slaveId": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "masterId": 4,
        "slaveId": 9,
        "relation": "relatesTo",
    },
]
~~~

更多返回对象的示例，请参见 [**links**](/api/config/js_kanban_links_config.md)。

HTTP 状态码指示请求是否成功（response.status == 200）或出现错误（response.status == 500）。

---

**相关文档**:
- [与服务器交互](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
