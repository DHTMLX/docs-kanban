---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: 您可以在DHTMLX JavaScript看板库的文档中了解POST /cards/{cardId}/vote REST路由。浏览开发者指南和API参考，尝试代码示例和现场演示，并下载DHTMLX Kanban的免费30天试用版。
---

# POST `/cards/{cardId}/vote`

### 描述

@short: 向卡片添加一个新的投票，并返回包含投票用户ID的json对象

此路由接受对 `/cards/{cardId}/vote` 端点的**HTTP POST**请求。

### 请求体

此请求不需要发送任何请求体。

### 响应

响应包含一个JSON对象，内含投票用户的ID。

示例:

~~~json
{ 
   "id": 1
}
~~~

HTTP状态码表示请求的结果:状态码200表示请求成功，状态码500表示出现错误。

---

**相关文档**: [Working with server](/guides/working_with_server.md)
