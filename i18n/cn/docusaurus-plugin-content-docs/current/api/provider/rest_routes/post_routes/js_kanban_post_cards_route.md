---
sidebar_label: POST /cards
title: POST /cards
description: 浏览 DHTMLX JavaScript 看板库文档中的 POST /cards REST 端点。访问开发者指南、API 参考、代码示例、在线演示，并获得 DHTMLX 看板的免费 30 天试用。
---

# POST `/cards`

### 描述

@short: 添加一张新卡片，并返回包含该卡片 ID 的 json 对象。

此端点处理发送到 `/cards` URL 的 **HTTP POST** 请求。

### 请求负载

服务器需要一个包含以下字段的 json 对象:

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *必填*。要创建的卡片标题。|
| `column`    |  number     | *必填*。卡片将被放置的列的 ID。|
| `row`       |  number     | *必填*。卡片将被定位的行的 ID。|

示例:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### 响应

该端点返回一个包含新创建卡片 ID 的 json 对象。

示例:

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码指示请求是否成功（response.status == 200）或是否发生错误（response.status == 500）。

---

**相关文档**: [Working with server](/guides/working_with_server.md)
