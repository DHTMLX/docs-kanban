---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments REST 路由 API
description: 阅读 DHTMLX Kanban 的 POST /cards/{cardId}/comments REST 路由 API。了解如何向卡片添加新评论并返回新评论的 ID。
---

# POST `/cards/{cardId}/comments`

### 描述

@short: 向卡片添加新的评论，并返回包含新添加评论 ID 的 json 对象。

该路由处理对 `/cards/{cardId}/comments` 路径发起的 **HTTP POST** 请求。

### 请求体

服务器期望接收一个包含以下属性的 json 对象：

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `text`      | string      | *必填*。评论内容文本。|
| `date`      | object      | *必填*。评论的日期。|

示例：

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### 响应

该路由返回一个包含新添加评论 ID 的 json 对象。

示例：

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
