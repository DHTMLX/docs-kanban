---
sidebar_label: GET /cards
title: GET /cards
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 GET /cards REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费30天试用版。
---

# GET `/cards`

### 描述

@short: 获取所有卡片的信息，并返回包含卡片对象数组的 JSON 对象。

此路由处理发送到 `/cards` 端点的 **HTTP GET** 请求。

### 请求体

无需请求体。

### 响应

响应返回一个包含所有卡片对象数组的 JSON 对象。

示例:

~~~json
[
    {
        "id": 4,
        "label": "Set the tasks priorities",
        "description": "",
        "column": 2,
        "row": 1,
        "start_date": "2018-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
    {
        "id": 5,
        "label": "Custom icons",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2019-01-01T00:00:00Z",
        "end_date": null,
        "progress": 0,
        "attached": [],
        "color": "#65D3B3",
        "users": []
    },
    {
        "id": 6,
        "label": "Integration with Gantt",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2020-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
]
~~~

:::note
事件的开始和结束日期应遵循 ISO 格式 **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

有关返回对象的另一个示例，请参见 [**cards**](/api/config/js_kanban_cards_config.md)。

HTTP 状态码表示请求的结果:成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**:
- [与服务器交互](/guides/working_with_server.md)
- [getCards()](/api/provider/rest_methods/js_kanban_getcards_method.md)
