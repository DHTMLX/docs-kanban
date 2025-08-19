---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /cards/{cardId}/comments/{cardId} REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# PUT `/cards/{cardId}/comments/{commentId}`

### 描述

@short: 此端点用于更新卡片中的现有评论，并返回包含已更新评论 ID 的 JSON 对象。

该路由处理发送到 `cards/{cardId}/comments/{commentId}` 的 **HTTP PUT** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称         | 类型        | 描述                                   |
| ------------ | ----------- | ------------------------------------ |
| `cardId`     |  number     | *必填*。包含要更新评论的卡片 ID。      |
| `commentId`  |  number     | *必填*。需要更新的评论 ID。             |

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象:

| 名称         | 类型        | 描述                                   |
| ------------ | ----------- | ------------------------------------ |
| `text`       | string      | *必填*。更新后的评论内容。               |

示例:

~~~json
{
    "text": "The comment's content"
}
~~~

### 响应

服务器将返回一个包含已更新评论 ID 的 JSON 对象。

示例:

~~~json
{
    "id": 4
}
~~~

HTTP 状态码表示请求的结果:200 表示成功，500 表示失败。

---

**相关文章**:[与服务器交互](/guides/working_with_server.md)
