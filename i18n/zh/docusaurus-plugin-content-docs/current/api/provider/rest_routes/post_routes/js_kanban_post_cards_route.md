---
sidebar_label: POST /cards
title: POST /cards
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /cards REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# POST `/cards`

### 描述

@short: 创建一个新卡片并返回包含新卡片 ID 的 json 对象

该路由处理发送到 `/cards` 路径的 **HTTP POST** 请求。

### 请求体

服务器期望接收一个包含以下属性的 json 对象：

| 名称        | 类型        | 描述               |
| ----------- | ----------- | ------------------ |
| `label`     |  string     | *必填*。要添加的新卡片名称。|
| `column`    |  number     | *必填*。目标列的 ID。|
| `row`       |  number     | *必填*。目标行的 ID。|

示例：

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### 响应

该路由返回一个包含新卡片 ID 的 json 对象。

示例：

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)