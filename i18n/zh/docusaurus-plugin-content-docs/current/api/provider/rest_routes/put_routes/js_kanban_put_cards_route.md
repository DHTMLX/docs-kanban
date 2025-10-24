---
sidebar_label: PUT /cards
title: PUT /cards
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /cards REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# PUT `/cards`

### 描述

@short: 更新指定卡片的数据并返回一个空的 json 对象

该路由处理对 `/cards/{id}` 路径发起的 **HTTP PUT** 请求。

### 路径参数

以下参数通过请求行传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *必需*。要更新的卡片的 ID。|

### 请求负载

服务器需要接收一个包含卡片对象的 json 对象，该对象包含所有卡片属性（包括未更改的和新的/修改的）。

| 名称          | 类型        | 描述 |
| ------------- | ----------- | ----------- |
| `label`       | string      | *必需*。要更新的卡片名称。|
| `description` | string      | *必需*。卡片描述。|
| `column`      | number      | *必需*。卡片所属列的 ID。|
| `row`         | number      | *必需*。卡片所属行的 ID。|
| `start_date`  | string      | *必需*。开始日期，ISO 格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    | string      | *必需*。结束日期，ISO 格式 yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    | number      | *必需*。进度条数值，范围从 0 到 100。|
| `attached`    | object      | *必需*。包含附件文件数据的数组。对象示例请参见 [**cards**](api/config/js_kanban_cards_config.md) |
| `color`       | string      | *必需*。卡片顶部线条颜色，HEX 格式。|
| `priority`    | number      | *必需*。卡片优先级 ID。|
| `users`       | object      | *必需*。包含分配用户 ID 的数组。对象示例请参见 [**cardShape**](api/config/js_kanban_cardshape_config.md) |

示例：

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

您可以在 [**cards**](api/config/js_kanban_cards_config.md) 部分找到另一个卡片对象示例。

### 响应

成功时，返回一个空的 json 对象。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [与服务器交互](guides/working_with_server.md)