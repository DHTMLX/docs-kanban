---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 DELETE /cards/{cardId}/vote REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天评估版本。
---

# DELETE `/cards/{cardId}/vote`

### 描述

@short: 从卡片中移除一票，并返回包含移除该票的用户ID的 JSON 对象。

该路由处理发送到 `/cards/{cardId}/vote` 路径的 **HTTP DELETE** 请求。

### 路径参数

以下参数在请求行中传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `cardId`   | number      | *必需*。要移除投票的卡片ID。|

### 请求体

无需请求体。

### 响应

该路由返回一个包含移除投票的用户ID的 JSON 对象。

示例：

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**: [Working with server](guides/working_with_server.md)