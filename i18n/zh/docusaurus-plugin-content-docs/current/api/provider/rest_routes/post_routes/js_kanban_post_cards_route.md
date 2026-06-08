---
sidebar_label: POST /cards
title: POST /cards REST 路由 API
description: 阅读 DHTMLX Kanban 的 POST /cards REST 路由 API。了解如何创建新卡片并返回其新 ID。
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

**相关文档**：[与服务器协作](guides/working_with_server.md)
