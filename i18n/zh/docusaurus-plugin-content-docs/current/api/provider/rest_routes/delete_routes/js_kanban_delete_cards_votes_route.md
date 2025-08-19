---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 DELETE /cards/{cardId}/vote REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天试用版。
---

# DELETE `/cards/{cardId}/vote`

### 描述

@short: 从卡片中移除一票，并返回一个包含移除投票的用户 ID 的 JSON 对象

此路由处理发送到 `/cards/{cardId}/vote` 的 **HTTP DELETE** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `cardId`   |  number     | *必需*。要移除投票的卡片 ID。|

### 请求体

无需发送请求体。

### 响应

响应是一个 JSON 对象，包含移除投票的用户 ID。

示例:

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码指示请求是否成功（response.status == 200）或发生错误（response.status == 500）。

---

**相关文档**: [Working with server](/guides/working_with_server.md)
