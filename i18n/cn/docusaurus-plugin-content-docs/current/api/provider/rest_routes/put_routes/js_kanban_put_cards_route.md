---
sidebar_label: PUT /cards
title: PUT /cards
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /cards REST 路由。浏览开发者指南和 API 参考，尝试代码示例和实时演示，下载 DHTMLX 看板的免费 30 天评估版本。
---

# PUT `/cards`

### 描述

@short: 更新指定卡片的数据并返回一个空的 JSON 对象。

此路由处理发送到 `/cards/{id}` 端点的 **HTTP PUT** 请求。

### 路径参数

请求路径中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要更新的卡片 ID。|

### 请求体

服务器期望接收一个包含卡片对象及其所有属性的 JSON 对象，包括未更改和已更新的值。

| 名称          | 类型        | 描述 |
| ------------- | ----------- | ----------- |
| `label`       |  string     | *必填*。要更新的卡片名称。|
| `description` |  string     | *必填*。卡片描述。|
| `column`      | number      | *必填*。卡片所属列的 ID。|
| `row`         | number      | *必填*。卡片所属行的 ID。|
| `start_date`  |  string     | *必填*。起始日期，ISO 格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    |  string     | *必填*。结束日期，ISO 格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    |  number     | *必填*。进度值，范围 0 到 100。|
| `attached`    |  object     | *必填*。包含附件文件数据的数组。具体对象示例见 [**cards**](/api/config/js_kanban_cards_config.md) |
| `color`       |  string     | *必填*。卡片顶部线条颜色，HEX 格式。|
| `priority`    |  number     | *必填*。卡片优先级 ID。|
| `users`       |  object     | *必填*。分配用户 ID 数组。具体对象示例见 [**cardShape**](/api/config/js_kanban_cardshape_config.md) |

示例:

~~~json
{
    "card": {
        "label": "Drag and drop",
        "description": "",
        "column": 3,
        "row": 1,
        "start_date": null,
        "end_date": "2018-01-01T00:00:00Z",
        "progress": 100,
        "attached": [],
        "color": "#58C3FE",
        "priority": 2,
        "users": []
    },
}
~~~

卡片对象的另一个示例可见于 [**cards**](/api/config/js_kanban_cards_config.md) 部分。

### 响应

如果更新成功，服务器返回一个空的 JSON 对象。

HTTP 状态码表示请求结果:成功时为 200，失败时为 500。

---

**相关文档**: [与服务器交互](/guides/working_with_server.md)
