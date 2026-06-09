---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId} REST 路由 API
description: 阅读 DHTMLX Kanban 的 PUT /cards/{cardId}/comments/{commentId} REST 路由 API。了解如何更新卡片评论并返回其 ID。
---

# PUT `/cards/{cardId}/comments/{commentId}`

### 描述

@short: 更新卡片中的评论，并返回包含更新后评论ID的json对象。

此路由处理对路径 `cards/{cardId}/comments/{commentId}` 发起的 **HTTP PUT** 请求。

### 路径参数

以下参数通过请求路径传递：

| 名称         | 类型        | 说明                           |
| ------------ | ----------- | ------------------------------ |
| `cardId`     |  number     | *必填*。要更新评论的卡片ID。   |
| `commentId`  |  number     | *必填*。要更新的评论ID。       |

### 请求体

服务器期望接收一个包含以下属性的json对象：

| 名称         | 类型        | 说明                           |
| ------------ | ----------- | ------------------------------ |
| `text`       | string      | *必填*。评论的内容文本。       |

示例：

~~~json
{
    "text": "The comment's content"
}
~~~

### 响应

服务器返回一个包含卡片ID的json对象。

示例：

~~~json
{
    "id": 4
}
~~~

HTTP状态码用于指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
