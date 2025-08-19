---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 DELETE /cards/{cardId}/comments/{commentId} REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX 看板的30天试用版本。
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### 描述

@short: 删除卡片上的评论

此路由处理发送到 `cards/{cardId}/comments/{commentId}` 端点的 **HTTP DELETE** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称        | 类型        | 说明 |
| ----------- | ----------- | ---- |
| `cardId`    |  number     | *必需*。要删除评论的卡片标识符。 |
| `commentId` |  number     | *必需*。要删除的评论标识符。 |

### 请求体

此请求无需发送请求体。

### 响应

服务器会返回一个 JSON 对象，包含删除该评论的用户 ID。

示例:

~~~json
{
    "id": 4
}
~~~

HTTP 状态码表示请求结果:200 表示请求成功，500 表示发生错误。

---

**相关文档**: [与服务器交互](/guides/working_with_server.md)
