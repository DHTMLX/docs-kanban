---
sidebar_label: GET /links
title: GET /links
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 GET /links REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# GET `/links`

### 描述

@short: 获取所有链接的数据，并返回包含链接对象数组的 json 对象

该路由处理对 `/links` 路径发起的 **HTTP GET** 请求。

### 请求负载

不需要请求负载。

### 响应

该路由返回一个包含所有链接对象数组的 json 对象。

示例：

~~~json
[
    {
        "id": 1,
        "source": 2,
        "target": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "source": 4,
        "target": 9,
        "relation": "relatesTo",
    },
]
~~~

有关返回对象的另一个示例，请参见 [**links**](api/config/js_kanban_links_config.md)。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：
- [与服务器协作](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)