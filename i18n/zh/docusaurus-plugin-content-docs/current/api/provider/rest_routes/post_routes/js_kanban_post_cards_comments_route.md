---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /cards/{cardId}/comments REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
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

**相关文档**：[Working with server](guides/working_with_server.md)