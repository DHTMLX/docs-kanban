---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: 您可以在DHTMLX JavaScript看板库的文档中了解DELETE /cards/{cardId}/comments/{commentId} REST路由。浏览开发者指南和API参考，尝试代码示例和在线演示，并下载DHTMLX Kanban的免费30天试用版。
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