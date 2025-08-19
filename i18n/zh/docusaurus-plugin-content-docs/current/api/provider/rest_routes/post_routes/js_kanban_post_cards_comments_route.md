---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: 本节介绍了DHTMLX JavaScript看板库中的POST /cards/{cardId}/comments REST接口。内容包括开发者指南、API参考、实用代码示例、在线演示，以及DHTMLX看板的免费30天试用。
---

# POST `/cards/{cardId}/comments`

### 描述

@short: 向指定卡片添加一个或多个新评论，并返回包含新添加评论ID的JSON对象。

此接口处理发送到 `/cards/{cardId}/comments` 的 **HTTP POST** 请求。

### 请求负载

服务器期望接收一个包含以下属性的JSON对象:

| 名称        | 类型        | 说明           |
| ----------- | ----------- | -------------- |
| `text`      | string      | *必填*。评论内容。|
| `date`      | object      | *必填*。评论日期。 |

示例:

~~~json
{
    "text": "评论内容",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### 响应

响应包含一个JSON对象，包含新添加评论的ID。

示例:

~~~json
{ 
   "id": 1
}
~~~

HTTP状态码表示请求结果:200表示成功，500表示错误。

---

**相关文档**: [Working with server](/guides/working_with_server.md)
