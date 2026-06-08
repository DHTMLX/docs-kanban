---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId} REST 路由 API
description: 阅读 DHTMLX Kanban 的 DELETE /cards/{cardId}/comments/{commentId} REST 路由 API。了解如何从卡片中删除评论。
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### 描述

@short: 从卡片中删除评论

此路由处理对路径 `cards/{cardId}/comments/{commentId}` 发起的**HTTP DELETE**请求。

### 路径参数

以下参数通过请求行传递：

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `cardId`    |  number     | *必填*。要删除评论的卡片ID。 |
| `commentId` |  number     | *必填*。要删除的评论ID。 |

### 请求体

无需请求体。

### 响应

服务器返回一个包含删除评论用户ID的json对象。

示例：

~~~json
{
    "id": 4
}
~~~

HTTP状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)